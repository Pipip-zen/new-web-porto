param(
  [switch]$Copy
)

$ErrorActionPreference = "Stop"

function Fail([string]$Message) {
  Write-Error $Message
  exit 1
}

function In-GitRepo {
  try {
    $null = git rev-parse --show-toplevel 2>$null
    return ($LASTEXITCODE -eq 0)
  } catch {
    return $false
  }
}

function Get-StagedFiles {
  $lines = git diff --cached --name-status --diff-filter=ACDMR 2>$null
  if ($LASTEXITCODE -ne 0) {
    Fail "Failed to read staged changes."
  }

  $items = @()
  foreach ($line in $lines) {
    if ([string]::IsNullOrWhiteSpace($line)) {
      continue
    }

    $parts = $line -split "`t"
    $status = $parts[0]

    if ($status.StartsWith("R")) {
      $path = $parts[-1]
      $items += [pscustomobject]@{
        Status = "R"
        Path = $path
      }
      continue
    }

    $items += [pscustomobject]@{
      Status = $status
      Path = $parts[-1]
    }
  }

  return $items
}

function Get-CommonScope([object[]]$Files) {
  if ($Files.Count -eq 1) {
    $single = $Files[0].Path
    $parent = Split-Path -Parent $single
    if ([string]::IsNullOrWhiteSpace($parent)) {
      return [System.IO.Path]::GetFileNameWithoutExtension($single)
    }
    $leaf = Split-Path -Leaf $parent
    if ([string]::IsNullOrWhiteSpace($leaf)) {
      return "repo"
    }
    return $leaf.ToLower()
  }

  $segmentsList = @()
  foreach ($file in $Files) {
    $segments = $file.Path -split "[/\\]"
    if ($segments.Length -gt 1) {
      $segmentsList += ,$segments[0..($segments.Length - 2)]
    } else {
      $segmentsList += ,@()
    }
  }

  $common = @()
  if ($segmentsList.Count -gt 0) {
    $minLen = ($segmentsList | ForEach-Object { $_.Length } | Measure-Object -Minimum).Minimum
    for ($i = 0; $i -lt $minLen; $i++) {
      $candidate = $segmentsList[0][$i]
      $allMatch = $true
      foreach ($segments in $segmentsList) {
        if ($segments[$i] -ne $candidate) {
          $allMatch = $false
          break
        }
      }
      if (-not $allMatch) {
        break
      }
      $common += $candidate
    }
  }

  if ($common.Count -gt 0) {
    return $common[-1].ToLower()
  }

  return "repo"
}

function Get-CommitType([object[]]$Files) {
  $paths = $Files | ForEach-Object { $_.Path.ToLower() }

  $allMarkdown = $true
  $allTests = $true
  $allCi = $true
  $allBuild = $true

  foreach ($path in $paths) {
    if ($path -notmatch '(^|/)(readme|changelog|license)(\.[^/]+)?$' -and $path -notmatch '\.mdx?$') {
      $allMarkdown = $false
    }
    if ($path -notmatch '(^|/)(test|tests|__tests__|spec|specs)(/|$)' -and $path -notmatch '(\.test\.|\.(spec)\.)') {
      $allTests = $false
    }
    if ($path -notmatch '^\.github/' -and $path -notmatch '^\.gitlab-ci' -and $path -notmatch '^azure-pipelines') {
      $allCi = $false
    }
    if ($path -notmatch '(^|/)(package(-lock)?\.json|pnpm-lock\.yaml|yarn\.lock|dockerfile|docker-compose|vite\.config|webpack|rollup|tsconfig|eslint|prettier)' -and $path -notmatch '^\.npmrc$') {
      $allBuild = $false
    }
  }

  if ($allMarkdown) { return "docs" }
  if ($allTests) { return "test" }
  if ($allCi) { return "ci" }
  if ($allBuild) { return "build" }

  $hasAdd = $Files.Status -contains "A"
  $hasDelete = $Files.Status -contains "D"
  $hasRename = $Files.Status -contains "R"
  $hasModify = $Files.Status -contains "M"

  if ($hasRename -and -not $hasAdd -and -not $hasDelete -and -not $hasModify) {
    return "refactor"
  }

  if ($hasAdd -and -not $hasDelete) {
    return "feat"
  }

  if ($hasDelete -and -not $hasAdd -and -not $hasModify) {
    return "chore"
  }

  return "fix"
}

function Get-Verb([object[]]$Files, [string]$Type) {
  $hasAdd = $Files.Status -contains "A"
  $hasDelete = $Files.Status -contains "D"
  $hasRename = $Files.Status -contains "R"
  $hasModify = $Files.Status -contains "M"

  if ($Type -eq "docs") {
    if ($hasAdd -and -not $hasModify -and -not $hasDelete) { return "add" }
    return "update"
  }
  if ($Type -eq "test") {
    if ($hasAdd -and -not $hasModify -and -not $hasDelete) { return "add" }
    return "update"
  }
  if ($hasRename -and -not $hasAdd -and -not $hasDelete) { return "rename" }
  if ($hasDelete -and -not $hasAdd -and -not $hasModify) { return "remove" }
  if ($hasAdd -and -not $hasModify -and -not $hasDelete) { return "add" }
  if ($Type -eq "build" -or $Type -eq "ci") { return "update" }
  return "fix"
}

function Get-Object([object[]]$Files, [string]$Scope) {
  if ($Files.Count -eq 1) {
    $name = [System.IO.Path]::GetFileNameWithoutExtension($Files[0].Path).ToLower()
    if (-not [string]::IsNullOrWhiteSpace($name)) {
      return $name
    }
  }

  switch ($Scope) {
    "repo" { return "repo" }
    default { return $Scope }
  }
}

function Shorten-Subject([string]$Subject) {
  if ($Subject.Length -le 50) {
    return $Subject
  }

  $replacements = @(
    @{ From = "configuration"; To = "config" },
    @{ From = "application"; To = "app" },
    @{ From = "repository"; To = "repo" },
    @{ From = "documentation"; To = "docs" },
    @{ From = "component"; To = "ui" }
  )

  $value = $Subject
  foreach ($pair in $replacements) {
    $value = $value -replace $pair.From, $pair.To
    if ($value.Length -le 50) {
      return $value
    }
  }

  if ($value.Length -le 72) {
    return $value
  }

  return $value.Substring(0, 72).TrimEnd()
}

if (-not (In-GitRepo)) {
  Fail "Not a git repository. Initialize git or run this inside a repo."
}

$files = Get-StagedFiles
if ($files.Count -eq 0) {
  Fail "No staged changes. Stage files first, then run this script."
}

$type = Get-CommitType -Files $files
$scope = Get-CommonScope -Files $files
$verb = Get-Verb -Files $files -Type $type
$object = Get-Object -Files $files -Scope $scope

if ($scope -eq "repo") {
  $subject = "{0}: {1} {2}" -f $type, $verb, $object
} else {
  $subject = "{0}({1}): {2} {3}" -f $type, $scope, $verb, $object
}

$subject = Shorten-Subject -Subject $subject

if ($Copy) {
  Set-Clipboard -Value $subject
}

Write-Output $subject
