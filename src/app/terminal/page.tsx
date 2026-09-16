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

const asciiBanner = `
 ___    _   ___ ___ ___   _  _ _  _ _  _   _   
| _ \\  /_\\ | __|_ _| __| | \\| | || | || | /_\\  
|   / / _ \\| _|| || _|   | .\` | || | __ |/ _ \\ 
|_|_\\/_/ \\_\\_| |___|_|   |_|\\_\\_,_|_||_/_/ \\_\\
`;

const availableCommands = [
  "help",
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
  const [history, setHistory] = useState<CommandOutput[]>([]);
  const [cmdIndexHistory, setCmdIndexHistory] = useState<string[]>([]);
  const [historyPointer, setHistoryPointer] = useState<number>(-1);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

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
          <div className="space-y-2 py-1">
            <p className={styles.amberGlow}>[ AVAILABLE COMMANDS ]</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs sm:text-sm pl-2">
              <div><span className="font-bold text-white">help</span> - Display list of available commands</div>
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

      case "ls":
      case "projects":
        outputNode = (
          <div className="space-y-3 py-1">
            <p className={styles.amberGlow}>[ PORTFOLIO PROJECTS ]</p>
            <div className="space-y-2 pl-2">
              {projects.map((p) => (
                <div key={p.slug} className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-emerald-900/60 pb-1.5 gap-1">
                  <div>
                    <span className="text-white font-bold mr-2">[{p.displayIndex}] {p.title}</span>
                    <span className="text-xs text-emerald-400/80">({p.category})</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs">
                    <button
                      onClick={() => handleCommandExecute(`open ${p.slug}`)}
                      className="text-cyan-400 hover:underline"
                    >
                      open {p.slug}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-neutral-400 italic">Tip: Type or click &apos;open kashflow&apos; to view details or live link.</p>
          </div>
        );
        break;

      case "open":
      case "cat":
        if (!args[0]) {
          outputNode = <p className="text-rose-400">Usage: open &lt;slug&gt; (e.g., &apos;open kashflow&apos; or &apos;open catetin&apos;)</p>;
        } else {
          const targetSlug = args[0].toLowerCase();
          const target = projects.find((p) => p.slug.toLowerCase() === targetSlug || p.title.toLowerCase().includes(targetSlug));

          if (target) {
            outputNode = (
              <div className="space-y-3 py-2 border border-emerald-800/80 bg-emerald-950/40 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">[{target.displayIndex}] {target.title} ({target.year})</h3>
                  <span className="text-xs text-cyan-400 border border-cyan-800 px-2 py-0.5">{target.category}</span>
                </div>
                <p className="text-sm text-emerald-200">{target.summary}</p>
                <div className="text-xs space-y-1 text-neutral-300">
                  <p><span className="text-neutral-500">Role:</span> {target.role}</p>
                  <p><span className="text-neutral-500">Context:</span> {target.client}</p>
                  <p><span className="text-neutral-500">Stack:</span> {target.stack.join(", ")}</p>
                </div>
                <div className="pt-2 flex flex-wrap gap-4 text-xs">
                  {target.demoUrl ? (
                    <a href={target.demoUrl} target="_blank" rel="noreferrer" className="text-amber-400 underline font-bold">
                      View Live Demo ↗
                    </a>
                  ) : null}
                  {target.githubUrl ? (
                    <a href={target.githubUrl} target="_blank" rel="noreferrer" className="text-cyan-400 underline font-bold">
                      View GitHub ↗
                    </a>
                  ) : null}
                  <Link href={`/works/${target.slug}`} className="text-white underline">
                    Full Case Study ↗
                  </Link>
                </div>
              </div>
            );
          } else {
            outputNode = <p className="text-rose-400">Error: Project &apos;{args[0]}&apos; not found. Type &apos;projects&apos; to view all slugs.</p>;
          }
        }
        break;

      case "whoami":
      case "about":
        outputNode = (
          <div className="space-y-3 py-1">
            <p className={styles.amberGlow}>[ ABOUT RAFIF NUHA ]</p>
            <p className="text-sm leading-relaxed text-emerald-100 max-w-2xl">
              I&apos;m Muhammad Rafif Nuha Daniswara — a Multimedia Engineering student & Fullstack Developer based in Surabaya, Indonesia.
              I craft digital products, interactive web applications, and spatial VR experiences that feel intuitive and perform seamlessly.
            </p>
            <div className="pt-2 space-y-1 text-xs">
              <p className={styles.cyanGlow}>[ EDUCATION & JOURNEY ]</p>
              {experience.map((e) => (
                <p key={e.organization} className="text-neutral-300">
                  • <span className="text-white font-bold">{e.organization}</span> ({e.period}) — {e.role}
                </p>
              ))}
            </div>
          </div>
        );
        break;

      case "skills":
        outputNode = (
          <div className="space-y-2 py-1">
            <p className={styles.amberGlow}>[ TECHNICAL CAPABILITIES ]</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm pl-2">
              <div>
                <p className="text-cyan-400 font-bold mb-1">Languages & Frontend:</p>
                <p className="text-white">TypeScript, JavaScript, React.js, Next.js, HTML5, Tailwind CSS, Three.js</p>
              </div>
              <div>
                <p className="text-cyan-400 font-bold mb-1">Backend & Database:</p>
                <p className="text-white">Node.js, Express, Supabase, Socket.IO, PostgreSQL, REST APIs</p>
              </div>
              <div>
                <p className="text-cyan-400 font-bold mb-1">Mobile & Immersive:</p>
                <p className="text-white">Flutter, Dart, WebXR, Babylon.js 3D</p>
              </div>
              <div>
                <p className="text-cyan-400 font-bold mb-1">Tools & DevOps:</p>
                <p className="text-white">Git, GitHub, Vercel, Docker, FFmpeg</p>
              </div>
            </div>
          </div>
        );
        break;

      case "contact":
        outputNode = (
          <div className="space-y-2 py-1">
            <p className={styles.amberGlow}>[ CONTACT & SOCIALS ]</p>
            <div className="space-y-1.5 text-xs sm:text-sm pl-2">
              <p>⚡ <span className="text-neutral-400">Email:</span> <a href="mailto:rafif.nuha@gmail.com" className="text-white underline">rafif.nuha@gmail.com</a></p>
              {socialLinks.map((s) => (
                <p key={s.label}>
                  🔗 <span className="text-neutral-400">{s.label}:</span>{" "}
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
          <p className="text-rose-400 font-bold py-1">
            [ACCESS DENIED] User &apos;visitor&apos; is not in the sudoers file. This incident will be reported to Rafif Nuha. 😉
          </p>
        );
        break;

      default:
        outputNode = (
          <p className="text-rose-400">
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

  return (
    <div className={`fixed inset-0 z-50 h-full w-full flex flex-col bg-[#030a05] text-[#00ff66] font-mono overflow-hidden select-none ${styles.crtScreen}`}>
      {/* Scanlines overlay effect */}
      <div className={styles.scanlines} />

      {/* Single Unified Compact Top Header */}
      <div className="flex items-center justify-between border-b border-emerald-900/80 bg-emerald-950/50 px-3 py-1.5 z-30 font-mono text-xs shrink-0">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-emerald-300 font-bold text-[11px] sm:text-xs">RAFIF NUHA OS v1.0 (TTY 1)</span>
        </div>

        {/* SINGLE EXIT GUI BUTTON */}
        <Link
          href="/"
          className="inline-flex items-center gap-1 border border-emerald-500/80 bg-black/80 px-2.5 py-0.5 text-emerald-300 hover:bg-emerald-500 hover:text-black transition-colors rounded text-xs font-bold shadow-[0_0_8px_rgba(16,185,129,0.2)]"
        >
          <span>←</span>
          <span>Exit to GUI</span>
        </Link>
      </div>

      {/* Main Terminal Buffer Screen */}
      <div
        className={`flex-1 overflow-y-auto px-3 sm:px-6 py-3 space-y-3 z-10 ${styles.terminalScrollbar}`}
        onClick={() => inputRef.current?.focus()}
      >
        {/* Compact ASCII Banner */}
        <pre className="text-[8px] xs:text-[10px] sm:text-xs leading-none text-emerald-400 font-mono whitespace-pre overflow-x-hidden py-0.5">
          {asciiBanner}
        </pre>
        <div className="border-b border-emerald-900/60 pb-2 text-xs space-y-0.5">
          <p className={styles.amberGlow}>Welcome to Rafif Nuha Interactive Terminal Shell.</p>
          <p className="text-emerald-300/80">Type <span className="text-white font-bold">&apos;help&apos;</span> or tap the quick buttons below to navigate.</p>
        </div>

        {/* Command Output Trajectory */}
        {history.map((item) => (
          <div key={item.id} className="space-y-1">
            <div className="flex items-center gap-2 text-xs">
              <span className="text-emerald-400 font-bold">rafif@portfolio:~$</span>
              <span className="text-white font-bold">{item.command}</span>
            </div>
            <div className="pl-2 sm:pl-3">{item.output}</div>
          </div>
        ))}

        {/* Active Input Line */}
        <div className="flex items-center gap-2 text-xs pt-1">
          <span className="text-emerald-400 font-bold whitespace-nowrap">rafif@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-white outline-none font-mono caret-emerald-400 min-w-0 text-xs"
            autoFocus
            spellCheck={false}
            autoCapitalize="off"
            autoComplete="off"
          />
        </div>
        <div ref={terminalEndRef} />
      </div>

      {/* Bottom Quick Action Buttons Bar */}
      <div className="border-t border-emerald-900/80 bg-black/95 px-3 py-1.5 z-30 flex items-center justify-between gap-2 shrink-0 overflow-x-auto">
        <div className="flex items-center gap-1.5 text-xs">
          <span className="text-neutral-500 text-[10px] hidden sm:inline mr-1">QUICK CMDS:</span>
          {["help", "projects", "whoami", "skills", "contact", "clear"].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommandExecute(cmd)}
              className="border border-emerald-800 bg-emerald-950/40 px-2 py-0.5 text-emerald-300 hover:bg-emerald-500 hover:text-black transition-colors rounded text-[11px] font-mono active:scale-95 whitespace-nowrap"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
