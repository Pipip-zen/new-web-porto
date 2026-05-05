export type ProjectMetric = {
  label: string;
  value: string;
};

export type ProjectProcessStep = {
  title: string;
  description: string;
};

export type Project = {
  slug: string;
  displayIndex: string;
  title: string;
  year: string;
  category: string;
  client: string;
  location: string;
  image: string;
  summary: string;
  description: string;
  featured: boolean;
  services: string[];
  stack: string[];
  metrics: ProjectMetric[];
  challenge: string;
  solution: string;
  outcome: string;
  process: ProjectProcessStep[];
};

export const projects: Project[] = [
  {
    slug: "obsidian-house",
    displayIndex: "01",
    title: "Monolith Archive",
    year: "2025",
    category: "Architecture / Archive",
    client: "Obscura Labs",
    location: "Bandung",
    image: "/projects/monolith-archive.svg",
    summary: "A digital repository exploring structurally minimal architectural forms.",
    description: "A document-led archive framework focused on form, negative space, and disciplined metadata.",
    featured: true,
    services: ["Creative direction", "Information architecture", "Frontend engineering"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    metrics: [
      { label: "Sections", value: "14" },
      { label: "Editorial modules", value: "09" },
      { label: "Launch window", value: "3 weeks" }
    ],
    challenge: "Translate dense architectural material into a restrained digital experience without falling into gallery-site cliches.",
    solution: "Used asymmetrical content framing, hairline structure, and text-first modules to make process notes feel as important as the final photography.",
    outcome: "The launch created a clearer hierarchy between archive, projects, and commissions while preserving the studio's severe visual language.",
    process: [
      {
        title: "Index as threshold",
        description: "Built the homepage like an entrance plaque: title first, then coordinates, then work."
      },
      {
        title: "Project rhythm",
        description: "Alternated dense metadata blocks with large fields of empty space to preserve editorial tension."
      },
      {
        title: "Detail architecture",
        description: "Turned project pages into modular case studies with challenge, system, material, and outcome frames."
      }
    ]
  },
  {
    slug: "axis-nine",
    displayIndex: "02",
    title: "Void Framework",
    year: "2024",
    category: "System Design",
    client: "Axis / 09",
    location: "Singapore",
    image: "/projects/void-framework.svg",
    summary: "A strict component library based on negative space and measured interaction.",
    description: "An experimental UI library that treats empty space as structural material and interface rhythm as system logic.",
    featured: true,
    services: ["Identity web translation", "Design system", "Frontend build"],
    stack: ["Next.js", "TypeScript", "MD-driven content"],
    metrics: [
      { label: "Projects indexed", value: "21" },
      { label: "Responsive breakpoints", value: "04" },
      { label: "Motion states", value: "Subtle only" }
    ],
    challenge: "Preserve the studio's austere print identity while making browsing intuitive on mobile.",
    solution: "Used fixed structural navigation, compact technical labels, and a bottom nav pattern that mirrors plan annotations.",
    outcome: "The portfolio now reads as a coherent archive across desktop, tablet, and mobile without compromising its severe tone.",
    process: [
      {
        title: "System before decoration",
        description: "Defined spacing, linework, and label behavior before drawing any hero compositions."
      },
      {
        title: "Adaptive asymmetry",
        description: "Collapsed split layouts into stacked mobile sequences while keeping the editorial rhythm intact."
      },
      {
        title: "Controlled motion",
        description: "Applied motion only to entrances and content swaps, never as flourish."
      }
    ]
  },
  {
    slug: "concrete-signal",
    displayIndex: "03",
    title: "Kinetic Type",
    year: "2024",
    category: "Typography / Motion",
    client: "Concrete Signal",
    location: "Tokyo",
    image: "/projects/kinetic-type.svg",
    summary: "A generative typographic environment focused on structural letterforms and motion cadence.",
    description: "A motion-driven poster and archive system where typography behaves like a mechanism rather than static text.",
    featured: false,
    services: ["Archive mapping", "Prototype", "UI implementation"],
    stack: ["Next.js", "TypeScript", "Content modeling"],
    metrics: [
      { label: "Issues mapped", value: "32" },
      { label: "Archive views", value: "05" },
      { label: "Filter states", value: "18" }
    ],
    challenge: "Make a dense archive readable without diluting the publication's hard-edged presence.",
    solution: "Created a grid of numbered entries, strict labeling, and lightweight filter states with clear metadata priorities.",
    outcome: "Editors can publish new issues quickly while readers move through the archive using architectural, not algorithmic, cues.",
    process: [
      {
        title: "Archive audit",
        description: "Grouped all entries by issue, theme, and medium to reduce overlap before building the interface."
      },
      {
        title: "Metadata hierarchy",
        description: "Prioritized date, issue number, and topic before excerpt length or thumbnail treatment."
      },
      {
        title: "Filter economy",
        description: "Designed filters to feel like notation rather than app chrome."
      }
    ]
  },
  {
    slug: "void-terminal",
    displayIndex: "04",
    title: "Concrete Signal",
    year: "2023",
    category: "Environment / System",
    client: "Void Terminal",
    location: "Seoul",
    image: "/projects/concrete-signal.svg",
    summary: "A launch environment staged as a severe digital threshold with one primary action path.",
    description: "A sparse microsite that uses silence, timing, and architectural framing to focus attention on the core event.",
    featured: false,
    services: ["Microsite concept", "Motion direction", "Frontend build"],
    stack: ["Next.js", "Framer Motion", "Tailwind CSS"],
    metrics: [
      { label: "Build time", value: "10 days" },
      { label: "Event cities", value: "03" },
      { label: "Primary CTA", value: "Single path" }
    ],
    challenge: "Build anticipation with almost no visual ornament and only one meaningful action path.",
    solution: "Relied on typography scale, sequencing, and delayed content reveals rather than media-heavy spectacle.",
    outcome: "The site concentrated attention on attendance conversion while staying aligned with the installation's raw aesthetic.",
    process: [
      {
        title: "Threshold pacing",
        description: "Structured the sequence like an approach corridor: wait, reveal, then instruction."
      },
      {
        title: "Single-action clarity",
        description: "Every module pointed back to attendance information or event context."
      },
      {
        title: "Monochrome discipline",
        description: "Avoided visual effects that would cheapen the event's physical atmosphere."
      }
    ]
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
