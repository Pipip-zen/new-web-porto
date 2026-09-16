import Link from "next/link";
import { socialLinks } from "@/data/socialLinks";

function GithubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.08 1.83 2.82 1.3 3.5.99.11-.78.42-1.3.77-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.67 1.65.25 2.87.13 3.17.77.84 1.23 1.92 1.23 3.23 0 4.61-2.8 5.62-5.48 5.92.43.38.82 1.11.82 2.25v3.34c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[2]">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export function ContactPanel() {
  const getSocialIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case "github":
        return <GithubIcon />;
      case "instagram":
        return <InstagramIcon />;
      case "linkedin":
        return <LinkedinIcon />;
      default:
        return null;
    }
  };

  return (
    <section className="py-12 lg:py-16">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
        {/* Left Column: Email & Action Links */}
        <div className="lg:col-span-6 space-y-10">
          {/* Giant Email */}
          <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl lg:text-[4.8rem] font-bold tracking-tight text-white leading-tight break-all">
            rafif.nuha<br />
            @gmail.com
          </h1>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-8 font-mono text-sm sm:text-base">
            <a
              href="mailto:rafif.nuha@gmail.com"
              className="group inline-flex items-center gap-2 border-b border-neutral-400 pb-1 text-white transition-opacity hover:opacity-80"
            >
              <span>Contact Me</span>
              <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
            </a>

            <a
              href="/cv/CV_Muhammad%20Rafif%20Nuha%20Daniswara.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 border-b border-neutral-400 pb-1 text-white transition-opacity hover:opacity-80"
            >
              <span>Download CV</span>
              <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
            </a>
          </div>
        </div>

        {/* Right Column: Let's Get In Touch & Social Links */}
        <div className="lg:col-span-6 space-y-8 lg:pt-4">
          {/* Solid White Badge Tag */}
          <div>
            <div className="inline-block bg-white text-black px-4 py-2 sm:px-6 sm:py-3 font-mono text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Let&apos;s Get In Touch
            </div>
          </div>

          {/* Subtitle */}
          <p className="font-mono text-sm leading-relaxed text-neutral-300 sm:text-base max-w-md">
            Open to collaborations, opportunities, and meaningful conversations.
          </p>

          {/* Social Links Row */}
          <div className="pt-4 flex flex-wrap items-center gap-6 sm:gap-8 font-mono text-sm sm:text-base">
            {socialLinks.slice(0, 3).map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 text-white hover:text-neutral-300 transition-colors"
              >
                {getSocialIcon(item.label)}
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
