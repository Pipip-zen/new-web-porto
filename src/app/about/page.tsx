"use client";

import Image from "next/image";
import { experience } from "@/data/experience";

export default function AboutPage() {
  return (
    <div className="py-12 space-y-16">
      {/* Title */}
      <h1 className="font-mono text-3xl sm:text-5xl font-bold tracking-tight text-white">
        The Things Behind the Code
      </h1>

      {/* 2-Column Layout */}
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-start">
        {/* Left Column */}
        <div className="lg:col-span-6 space-y-6">
          {/* Image 1 with Hover Tooltip */}
          <div className="group relative overflow-hidden border border-neutral-800 bg-[#0d0d0d]">
            <Image
              src="/abouts/about1.png"
              alt="Working space"
              width={800}
              height={1000}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Hover Overlay Text */}
            <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 text-center">
              <span className="font-mono text-sm sm:text-base font-semibold text-white border border-white/80 px-4 py-2 bg-black/80">
                working at working space
              </span>
            </div>
          </div>

          {/* How I Work Box */}
          <div className="border border-neutral-800 bg-black p-6 sm:p-8 text-center space-y-3">
            <h2 className="font-mono text-lg font-bold text-white uppercase tracking-wider">
              How I Work
            </h2>
            <p className="font-mono text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-lg mx-auto">
              I am always learning, always improving, and ready to collaborate on projects that matter. My focus is on building solutions that are reliable, scalable, and user-friendly across both product and infrastructure work.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-6 space-y-6">
          {/* Who Am I? Box */}
          <div className="border border-neutral-800 bg-black p-6 sm:p-8 text-center space-y-3">
            <h2 className="font-mono text-lg font-bold text-white uppercase tracking-wider">
              Who Am I?
            </h2>
            <p className="font-mono text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-lg mx-auto">
              A Multimedia Engineering student who builds things across web development, network infrastructure, and immersive media.
            </p>
          </div>

          {/* Image 2 with Hover Tooltip */}
          <div className="group relative overflow-hidden border border-neutral-800 bg-[#0d0d0d]">
            <Image
              src="/abouts/about2.png"
              alt="Rafif Nuha"
              width={800}
              height={1000}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Hover Overlay Text */}
            <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 text-center">
              <span className="font-mono text-sm sm:text-base font-semibold text-white border border-white/80 px-4 py-2 bg-black/80">
                My name is Rafif Nuha
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Let's build something meaningful + Slanted TTD Signature */}
      <div className="flex flex-col items-end text-right space-y-3 pt-6 pr-4 sm:pr-8">
        <p className="font-mono text-lg font-medium text-white">
          Let&apos;s build something meaningful.
        </p>
        <div className="pt-2">
          <Image
            src="/abouts/ttd.png"
            alt="Signature"
            width={140}
            height={100}
            className="h-20 sm:h-24 w-auto object-contain invert brightness-200 transform -rotate-12 transition-transform duration-300 hover:-rotate-6"
          />
        </div>
      </div>

      {/* Journey Experience Section */}
      <div className="pt-12 space-y-8">
        <h2 className="font-mono text-sm text-neutral-400 tracking-wider">
          Journey Experience
        </h2>

        <div className="border-t border-neutral-800">
          {experience.map((item) => (
            <div
              key={item.organization}
              className="border-b border-neutral-800 py-8 grid gap-6 lg:grid-cols-12 lg:items-start"
            >
              <div className="lg:col-span-4 font-mono text-xs text-neutral-400 space-y-1">
                <p className="text-white font-semibold">{item.period}</p>
                <p>{item.location}</p>
              </div>
              <div className="lg:col-span-8 space-y-2">
                <h3 className="font-mono text-xl sm:text-2xl font-bold text-white">
                  {item.organization}
                </h3>
                <p className="font-mono text-xs text-neutral-400 italic">
                  {item.role}
                </p>
                <p className="font-mono text-sm text-neutral-300 leading-relaxed pt-2">
                  {item.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
