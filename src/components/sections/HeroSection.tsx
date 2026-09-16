"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const titles = [
  "Fullstack Developer",
  "UI/UX Designer",
  "Mobile Developer",
  "DevOps"
];

export function HeroSection() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = titles[currentTitleIndex];

    const typingSpeed = isDeleting ? 45 : 85;
    const pauseDelay = 2200;

    let timer: NodeJS.Timeout;

    if (!isDeleting && currentText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), pauseDelay);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    } else {
      timer = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting
            ? fullText.substring(0, prev.length - 1)
            : fullText.substring(0, prev.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitleIndex]);

  return (
    <section className="pt-12 pb-16 lg:pt-16 lg:pb-24">
      {/* Top Hero Section */}
      <div className="space-y-6">
        {/* Fixed Height Container to Prevent Layout Shift (Page Bouncing) */}
        <div className="h-12 sm:h-16 md:h-[4.5rem] flex items-center justify-start">
          <div className="inline-flex items-center justify-start bg-white text-black px-4 py-2 sm:px-6 sm:py-2.5 font-mono text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight whitespace-nowrap transition-all duration-300 ease-out">
            <span>{currentText || "\u00A0"}</span>
            <span className="animate-pulse ml-1 inline-block w-[3px] h-[0.75em] bg-black align-middle" />
          </div>
        </div>

        {/* Bio Description */}
        <p className="max-w-md font-mono text-sm leading-relaxed text-neutral-300 sm:text-base">
          I craft digital products and interfaces that feel intuitive, perform seamlessly, and leave a lasting impression.
        </p>

        {/* Links: View Archive & Terminal Mode */}
        <div className="pt-2 flex flex-wrap items-center gap-6">
          <Link
            href="/works"
            className="group inline-flex items-center gap-2 border-b border-neutral-400 pb-1 font-mono text-sm tracking-wider text-white transition-opacity hover:opacity-80"
          >
            <span>View Archive</span>
            <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
          </Link>

          <Link
            href="/terminal"
            className="group inline-flex items-center gap-2 border border-emerald-500/60 bg-emerald-950/30 px-3.5 py-1.5 font-mono text-xs sm:text-sm tracking-wider text-emerald-400 hover:bg-emerald-500 hover:text-black transition-all duration-200 shadow-[0_0_15px_rgba(16,185,129,0.15)]"
          >
            <span className="text-emerald-500 group-hover:text-black font-bold">&gt;_</span>
            <span>Terminal Mode</span>
          </Link>
        </div>
      </div>

      {/* Massive Right-Aligned Name Typography */}
      <div className="mt-16 sm:mt-24 lg:mt-32 text-right">
        <h1 className="font-sans text-[3.8rem] font-extrabold uppercase leading-none tracking-tight text-white sm:text-[6.5rem] md:text-[8.5rem] lg:text-[10.5rem] xl:text-[12rem] text-right">
          RAFIF NUHA
        </h1>
      </div>
    </section>
  );
}
