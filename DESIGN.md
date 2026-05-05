---
name: Monochrome Experimentalist
colors:
  surface: '#121314'
  surface-dim: '#121314'
  surface-bright: '#393939'
  surface-container-lowest: '#0d0e0f'
  surface-container-low: '#1b1c1c'
  surface-container: '#212121'
  surface-container-high: '#2b2b2b'
  surface-container-highest: '#363636'
  on-surface: '#ffffff'
  on-surface-variant: '#c4c7c5'
  outline: '#ffffff'
  outline-variant: 'rgba(255, 255, 255, 0.2)'
  primary: '#ffffff'
  on-primary: '#000000'
  primary-container: '#333333'
  on-primary-container: '#ffffff'
  secondary: '#a6a6a6'
  on-secondary: '#000000'
  secondary-container: '#474747'
  on-secondary-container: '#ffffff'

typography:
  family:
    serif: "'Newsreader', serif"
    mono: "'JetBrains Mono', monospace"
  headings:
    h1:
      family: serif
      weight: 400
      size: 64px
      line-height: 1.1
      letter-spacing: -0.02em
      italic: true
    h2:
      family: serif
      weight: 400
      size: 48px
      line-height: 1.2
    h3:
      family: mono
      weight: 400
      size: 14px
      text-transform: uppercase
      letter-spacing: 0.1em
  body:
    family: mono
    size: 14px
    line-height: 1.6
    color: '#c4c7c5'

spacing:
  base: 8px
  container-padding: 48px
  section-gap: 120px

components:
  button:
    border: 1px solid #ffffff
    padding: 12px 24px
    text-transform: uppercase
    font-family: mono
    hover:
      bg: '#ffffff'
      text: '#000000'
  divider:
    border-top: 1px solid rgba(255, 255, 255, 0.2)
  navigation:
    font-family: mono
    size: 12px
    text-transform: uppercase
    active:
      color: '#ffffff'
      decoration: underline
---

# Monochrome Experimentalist

A high-contrast, brutalist-inspired design system for technical and architectural portfolios.

## Philosophy
Design as architecture. This system treats digital space as a structural material, prioritizing typographic hierarchy, negative space, and a stark monochromatic palette.

## Visual Language
- **Typography**: The core of the system. An elegant serif (Newsreader) provides editorial sophistication, while a rigid monospaced font handles technical metadata and utility.
- **Color**: Purely monochromatic. Deep blacks (#121314) and whites (#FFFFFF) create maximum impact and focus.
- **Grids**: Asymmetrical and editorial. Elements are often staggered or split to avoid generic layouts.
- **Details**: hairline borders (1px), subtle opacity changes, and a complete absence of shadows or gradients.
