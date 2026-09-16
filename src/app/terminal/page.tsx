"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { projects } from "@/data/projects";
import { experience } from "@/data/experience";
import { socialLinks } from "@/data/socialLinks";
import styles from "./terminal.module.css";

type CommandOutput = {
  id: string;
  command: string;
  output: React.ReactNode;
};

export type ThemeId = "matrix" | "dracula" | "nord" | "monokai" | "cyberpunk" | "onedark" | "solarized";

export interface ThemeConfig {
  id: ThemeId;
  name: string;
  cssClass: string;
  description: string;
}

const themeList: ThemeConfig[] = [
  { id: "matrix", name: "Matrix Hacker", cssClass: styles.themeMatrix, description: "Classic neon green phosphor Matrix aesthetic" },
  { id: "dracula", name: "Dracula Theme", cssClass: styles.themeDracula, description: "Popular dark theme with pink & pastel green highlights" },
  { id: "nord", name: "Nord Arctic", cssClass: styles.themeNord, description: "An arctic, north-bluish clean color palette" },
  { id: "monokai", name: "Monokai Pro", cssClass: styles.themeMonokai, description: "Vibrant warm dark palette inspired by Monokai Pro" },
  { id: "cyberpunk", name: "Cyberpunk 2077", cssClass: styles.themeCyberpunk, description: "Synthwave neon cyan, hot pink & electric yellow" },
  { id: "onedark", name: "One Dark Pro", cssClass: styles.themeOneDark, description: "Atom's iconic sleek dark blue-grey color scheme" },
  { id: "solarized", name: "Solarized Dark", cssClass: styles.themeSolarized, description: "Precision color palette designed for low eye strain" }
];

const asciiBanner = `
 ___    _   ___ ___ ___   _  _ _  _ _  _   _   
| _ \\  /_\\ | __|_ _| __| | \\| | || | || | /_\\  
|   / / _ \\| _|| || _|   | .\` | || | __ |/ _ \\ 
|_|_\\/_/ \\_\\_| |___|_|   |_|\\_\\_,_|_||_/_/ \\_\\
`;

const availableCommands = [
  "help",
  "theme",
  "projects",
  "ls",
  "whoami",
  "about",
  "skills",
  "contact",
  "clear",
  "sudo",
  "exit",
  "open"
];

export default function TerminalPage() {
  const router = useRouter();
  const [inputVal, setInputVal] = useState("");
  const [activeTheme, setActiveTheme] = useState<ThemeId>("matrix");
  const [history, setHistory] = useState<CommandOutput[]>([]);
  const [cmdIndexHistory, setCmdIndexHistory] = useState<string[]>([]);
  const [historyPointer, setHistoryPointer] = useState<number>(-1);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("rafif_terminal_theme") as ThemeId;
    if (savedTheme && themeList.some((t) => t.id === savedTheme)) {
      setActiveTheme(savedTheme);
    }
  }, []);

  const changeTheme = (themeId: ThemeId) => {
    setActiveTheme(themeId);
    localStorage.setItem("rafif_terminal_theme", themeId);
  };

  const cycleTheme = () => {
    const currentIndex = themeList.findIndex((t) => t.id === activeTheme);
    const nextIndex = (currentIndex + 1) % themeList.length;
    changeTheme(themeList[nextIndex].id);
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const currentThemeObj = themeList.find((t) => t.id === activeTheme) || themeList[0];

  const handleCommandExecute = (rawCmd: string) => {
    const trimmed = rawCmd.trim();
    if (!trimmed) return;

    setCmdIndexHistory((prev) => [...prev, trimmed]);
    setHistoryPointer(-1);

    const parts = trimmed.split(" ");
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    let outputNode: React.ReactNode = null;

    switch (cmd) {
      case "help":
        outputNode = (
          <div className="space-y-1.5 py-1">
            <p className={styles.amberGlow}>[ AVAILABLE COMMANDS ]</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-xs pl-2">
              <div><span className="font-bold text-white">help</span> - Display list of available commands</div>
              <div><span className="font-bold text-white">theme &lt;name&gt;</span> - Switch terminal theme ({themeList.map((t) => t.id).join(", ")})</div>
              <div><span className="font-bold text-white">projects / ls</span> - List all portfolio projects</div>
              <div><span className="font-bold text-white">open &lt;slug&gt;</span> - Open or inspect a specific project</div>
              <div><span className="font-bold text-white">whoami / about</span> - Show Rafif Nuha&apos;s profile & bio</div>
              <div><span className="font-bold text-white">skills</span> - Display technical stack & tools</div>
              <div><span className="font-bold text-white">contact</span> - Show email & social media links</div>
              <div><span className="font-bold text-white">clear</span> - Clear terminal buffer</div>
              <div><span className="font-bold text-white">exit</span> - Return to standard GUI website</div>
              <div><span className="font-bold text-white">sudo</span> - ??? (Easter egg)</div>
            </div>
          </div>
        );
        break;

      case "theme":
        if (!args[0]) {
          outputNode = (
            <div className="space-y-2 py-1">
              <p className={styles.amberGlow}>[ POPULAR TERMINAL THEMES ]</p>
              <p className="text-xs opacity-90">
                Active Theme: <span className="font-bold text-white uppercase">[{currentThemeObj.name}]</span>
              </p>
              <div className="space-y-1.5 pl-2 text-xs">
                {themeList.map((t) => (
                  <div key={t.id} className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-1 gap-1">
                    <div>
                      <span className="font-bold text-white mr-2">theme {t.id}</span>
                      {t.id === activeTheme && <span className="text-[10px] bg-emerald-700 text-white px-1.5 py-0.5 rounded font-bold mr-2">ACTIVE</span>}
                      <span className="opacity-80">{t.description}</span>
                    </div>
                    <button
                      onClick={() => changeTheme(t.id)}
                      className="text-cyan-400 hover:underline text-xs self-start sm:self-auto font-bold"
                    >
                      [Apply]
                    </button>
                  </div>
                ))}
              </div>
              <p className="text-[11px] opacity-70 italic">Tip: Type &apos;theme dracula&apos; or click [Apply] above to switch themes.</p>
            </div>
          );
        } else {
          const targetThemeId = args[0].toLowerCase();
          const found = themeList.find((t) => t.id === targetThemeId || t.name.toLowerCase().includes(targetThemeId));
          if (found) {
            changeTheme(found.id);
            outputNode = (
              <p className="text-emerald-300 font-bold text-xs py-1">
                ✓ Terminal theme updated to [{found.name}]. Theme preference saved!
              </p>
            );
          } else {
            outputNode = (
              <p className="text-rose-400 text-xs">
                Error: Theme &apos;{args[0]}&apos; not found. Available themes: {themeList.map((t) => t.id).join(", ")}
              </p>
            );
          }
        }
        break;

      case "ls":
      case "projects":
        outputNode = (
          <div className="space-y-2 py-1">
            <p className={styles.amberGlow}>[ PORTFOLIO PROJECTS ]</p>
            <div className="space-y-1.5 pl-2">
              {projects.map((p) => (
                <div key={p.slug} className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-1 gap-1">
                  <div>
                    <span className="text-white font-bold mr-2">[{p.displayIndex}] {p.title}</span>
                    <span className="text-xs opacity-80">({p.category})</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs">
                    <button
                      onClick={() => handleCommandExecute(`open ${p.slug}`)}
                      className="text-cyan-400 hover:underline font-bold"
                    >
                      open {p.slug}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[11px] opacity-70 italic">Tip: Type or click &apos;open kashflow&apos; to view details or live link.</p>
          </div>
        );
        break;

      case "open":
      case "cat":
        if (!args[0]) {
          outputNode = <p className="text-rose-400 text-xs">Usage: open &lt;slug&gt; (e.g., &apos;open kashflow&apos; or &apos;open catetin&apos;)</p>;
        } else {
          const targetSlug = args[0].toLowerCase();
          const target = projects.find((p) => p.slug.toLowerCase() === targetSlug || p.title.toLowerCase().includes(targetSlug));

          if (target) {
            outputNode = (
              <div className={`space-y-2 py-2 border p-3 rounded-md max-w-2xl ${styles.themePanel}`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white">[{target.displayIndex}] {target.title} ({target.year})</h3>
                  <span className="text-[10px] border px-1.5 py-0.5 rounded font-mono">{target.category}</span>
                </div>
                <p className="text-xs opacity-90">{target.summary}</p>
                <div className="text-[11px] space-y-0.5 opacity-80">
                  <p><span className="opacity-60">Role:</span> {target.role}</p>
                  <p><span className="opacity-60">Context:</span> {target.client}</p>
                  <p><span className="opacity-60">Stack:</span> {target.stack.join(", ")}</p>
                </div>
                <div className="pt-1 flex flex-wrap gap-3 text-xs">
                  {target.demoUrl ? (
                    <a href={target.demoUrl} target="_blank" rel="noreferrer" className="text-amber-400 underline font-bold">
                      Live Demo ↗
                    </a>
                  ) : null}
                  {target.githubUrl ? (
                    <a href={target.githubUrl} target="_blank" rel="noreferrer" className="text-cyan-400 underline font-bold">
                      GitHub ↗
                    </a>
                  ) : null}
                  <Link href={`/works/${target.slug}`} className="text-white underline">
                    Case Study ↗
                  </Link>
                </div>
              </div>
            );
          } else {
            outputNode = <p className="text-rose-400 text-xs">Error: Project &apos;{args[0]}&apos; not found. Type &apos;projects&apos; to view all slugs.</p>;
          }
        }
        break;

      case "whoami":
      case "about":
        outputNode = (
          <div className="space-y-2 py-1">
            <p className={styles.amberGlow}>[ ABOUT RAFIF NUHA ]</p>
            <p className="text-xs leading-relaxed opacity-90 max-w-xl">
              I&apos;m Muhammad Rafif Nuha Daniswara — a Multimedia Engineering student & Fullstack Developer based in Surabaya, Indonesia.
              I craft digital products, interactive web applications, and spatial VR experiences that feel intuitive and perform seamlessly.
            </p>
            <div className="pt-1 space-y-1 text-xs">
              <p className={styles.cyanGlow}>[ EDUCATION & JOURNEY ]</p>
              {experience.map((e) => (
                <p key={e.organization} className="opacity-80 text-xs">
                  • <span className="text-white font-bold">{e.organization}</span> ({e.period}) — {e.role}
                </p>
              ))}
            </div>
          </div>
        );
        break;

      case "skills":
        outputNode = (
          <div className="space-y-1.5 py-1">
            <p className={styles.amberGlow}>[ TECHNICAL CAPABILITIES ]</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pl-2">
              <div>
                <p className="text-cyan-400 font-bold mb-0.5">Languages & Frontend:</p>
                <p className="text-white">TypeScript, JavaScript, React.js, Next.js, HTML5, Tailwind CSS, Three.js</p>
              </div>
              <div>
                <p className="text-cyan-400 font-bold mb-0.5">Backend & Database:</p>
                <p className="text-white">Node.js, Express, Supabase, Socket.IO, PostgreSQL, REST APIs</p>
              </div>
              <div>
                <p className="text-cyan-400 font-bold mb-0.5">Mobile & Immersive:</p>
                <p className="text-white">Flutter, Dart, WebXR, Babylon.js 3D</p>
              </div>
              <div>
                <p className="text-cyan-400 font-bold mb-0.5">Tools & DevOps:</p>
                <p className="text-white">Git, GitHub, Vercel, Docker, FFmpeg</p>
              </div>
            </div>
          </div>
        );
        break;

      case "contact":
        outputNode = (
          <div className="space-y-1.5 py-1">
            <p className={styles.amberGlow}>[ CONTACT & SOCIALS ]</p>
            <div className="space-y-1 text-xs pl-2">
              <p>⚡ <span className="opacity-60">Email:</span> <a href="mailto:rafif.nuha@gmail.com" className="text-white underline">rafif.nuha@gmail.com</a></p>
              {socialLinks.map((s) => (
                <p key={s.label}>
                  🔗 <span className="opacity-60">{s.label}:</span>{" "}
                  <a href={s.href} target="_blank" rel="noreferrer" className="text-cyan-400 underline">
                    {s.href}
                  </a>
                </p>
              ))}
            </div>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      case "exit":
      case "gui":
        router.push("/");
        return;

      case "sudo":
        outputNode = (
          <p className="text-rose-400 font-bold text-xs py-1">
            [ACCESS DENIED] User &apos;visitor&apos; is not in the sudoers file. This incident will be reported to Rafif Nuha. 😉
          </p>
        );
        break;

      default:
        outputNode = (
          <p className="text-rose-400 text-xs">
            Command not found: &apos;{trimmed}&apos;. Type &apos;help&apos; for a list of available commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(36).substring(2, 9),
        command: trimmed,
        output: outputNode
      }
    ]);
    setInputVal("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommandExecute(inputVal);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdIndexHistory.length > 0) {
        const nextPtr = historyPointer === -1 ? cmdIndexHistory.length - 1 : Math.max(0, historyPointer - 1);
        setHistoryPointer(nextPtr);
        setInputVal(cmdIndexHistory[nextPtr]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyPointer >= 0) {
        const nextPtr = historyPointer + 1;
        if (nextPtr >= cmdIndexHistory.length) {
          setHistoryPointer(-1);
          setInputVal("");
        } else {
          setHistoryPointer(nextPtr);
          setInputVal(cmdIndexHistory[nextPtr]);
        }
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      if (inputVal.trim()) {
        const match = availableCommands.find((c) => c.startsWith(inputVal.trim().toLowerCase()));
        if (match) {
          setInputVal(match);
        }
      }
    }
  };

  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);

  return (
    <div className={`fixed inset-0 z-50 h-full w-full flex flex-col font-mono overflow-hidden select-none ${styles.crtScreen} ${currentThemeObj.cssClass}`}>
      {/* Scanlines overlay effect */}
      <div className={styles.scanlines} />

      {/* Single Unified Compact Top Header */}
      <div className={`flex items-center justify-between border-b border-white/10 bg-black/40 px-3 py-1.5 z-30 font-mono text-xs shrink-0 ${styles.themeBorder}`}>
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="font-bold text-[11px] sm:text-xs">RAFIF OS v1.0 (TTY 1)</span>
        </div>

        <div className="flex items-center gap-2">
          {/* THEME SWITCHER DROPDOWN MENU */}
          <div className="relative">
            <button
              onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
              className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-bold transition-colors cursor-pointer ${styles.themeButton}`}
              title="Select Terminal Theme"
            >
              <span>🎨</span>
              <span className="hidden xs:inline">{currentThemeObj.name}</span>
              <span className="xs:hidden">Theme</span>
              <span className="text-[9px] ml-0.5 opacity-80">▼</span>
            </button>

            {isThemeMenuOpen && (
              <>
                {/* Backdrop overlay to close dropdown on click outside */}
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setIsThemeMenuOpen(false)}
                />

                {/* Floating Dropdown Panel */}
                <div className={`absolute right-0 top-full mt-1.5 w-56 rounded-md border shadow-2xl p-1 z-50 font-mono text-xs ${styles.themePanel} bg-black/95 backdrop-blur-md`}>
                  <div className="px-2 py-1 border-b border-white/10 text-[10px] text-neutral-400 font-bold uppercase tracking-wider">
                    Select Terminal Theme
                  </div>
                  <div className="py-1 space-y-0.5 max-h-64 overflow-y-auto">
                    {themeList.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => {
                          changeTheme(t.id);
                          setIsThemeMenuOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-2 py-1.5 rounded text-left transition-colors hover:bg-white/10 ${
                          t.id === activeTheme ? "bg-white/15 font-bold" : "opacity-80"
                        }`}
                      >
                        <span className="text-white text-xs">{t.name}</span>
                        {t.id === activeTheme && (
                          <span className="text-emerald-400 font-bold text-xs">✓</span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* SINGLE EXIT GUI BUTTON */}
          <Link
            href="/"
            className={`inline-flex items-center gap-1 border px-2.5 py-0.5 transition-colors rounded text-xs font-bold ${styles.themeButton}`}
          >
            <span>←</span>
            <span>Exit to GUI</span>
          </Link>
        </div>
      </div>

      {/* Main Terminal Buffer Screen */}
      <div
        className={`flex-1 overflow-y-auto px-3 sm:px-6 py-3 space-y-3 z-10 ${styles.terminalScrollbar}`}
        onClick={() => inputRef.current?.focus()}
      >
        {/* Compact ASCII Banner */}
        <pre className="text-[8px] xs:text-[10px] sm:text-xs leading-none font-mono whitespace-pre overflow-x-hidden py-0.5">
          {asciiBanner}
        </pre>
        <div className="border-b border-white/10 pb-2 text-xs space-y-0.5">
          <p className={styles.amberGlow}>Welcome to Rafif Nuha Interactive Terminal Shell.</p>
          <p className="opacity-80">
            Type <span className="text-white font-bold">&apos;help&apos;</span> or <span className="text-white font-bold">&apos;theme&apos;</span> to customize colors. Tap quick buttons below to navigate.
          </p>
        </div>

        {/* Command Output Trajectory */}
        {history.map((item) => (
          <div key={item.id} className="space-y-1">
            <div className="flex items-center gap-2 text-xs">
              <span className={`font-bold ${styles.primaryText}`}>rafif@portfolio:~$</span>
              <span className="text-white font-bold">{item.command}</span>
            </div>
            <div className="pl-2 sm:pl-3">{item.output}</div>
          </div>
        ))}

        {/* Active Input Line */}
        <div className="flex items-center gap-2 text-xs pt-1">
          <span className={`font-bold whitespace-nowrap ${styles.primaryText}`}>rafif@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-white outline-none font-mono caret-current min-w-0 text-xs"
            autoFocus
            spellCheck={false}
            autoCapitalize="off"
            autoComplete="off"
          />
        </div>
        <div ref={terminalEndRef} />
      </div>

      {/* Bottom Quick Action Buttons Bar */}
      <div className="border-t border-white/10 bg-black/90 px-3 py-1.5 z-30 flex items-center justify-between gap-2 shrink-0 overflow-x-auto">
        <div className="flex items-center gap-1.5 text-xs">
          <span className="text-neutral-500 text-[10px] hidden sm:inline mr-1">QUICK CMDS:</span>
          {["help", "theme", "projects", "whoami", "skills", "contact", "clear"].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommandExecute(cmd)}
              className={`px-2 py-0.5 rounded text-[11px] font-mono active:scale-95 whitespace-nowrap ${styles.themeButton}`}
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
