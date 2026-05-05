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
  role: string;
  client: string;
  clientLabel?: string;
  demoUrl?: string;
  githubUrl?: string;
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
    slug: "kashflow",
    displayIndex: "01",
    title: "Kashflow",
    year: "2026",
    category: "Web App",
    role: "Fullstack Developer",
    client: "Competition",
    clientLabel: "Context",
    demoUrl: "https://kashflow.my.id",
    githubUrl: "https://github.com/Pipip-zen/kasflow",
    location: "Indonesia",
    image: "/projects/kashflow-image.png",
    summary: "A modern cash-collection web app for groups, with automated billing, live payment tracking, and a cleaner admin flow.",
    description: "Collective cash management application. Send automatic invoices via email. Monitor cash inflows in real time.",
    featured: true,
    services: ["Web app", "AI integration", "UI UX design"],
    stack: ["React JS", "Tailwind CSS", "Supabase", "AI integration"],
    metrics: [
      { label: "Invoice flow", value: "Auto email" },
      { label: "Cash tracking", value: "Real time" },
      { label: "Build year", value: "2026" }
    ],
    challenge: "Make collective cash collection easier to manage while keeping billing, payment tracking, and reminders simple for organizers and members.",
    solution: "Built a web app that centralizes recurring cash billing, automates invoice emails, and surfaces live payment status in one clear dashboard.",
    outcome: "The project turned a manual group-finance workflow into a faster and more transparent digital system suitable for competition presentation.",
    process: [
      {
        title: "Flow mapping",
        description: "Mapped the full billing cycle from invoice creation to payment confirmation so every user action had a clear next step."
      },
      {
        title: "System dashboard",
        description: "Designed a monitoring view that keeps incoming cash, unpaid members, and invoice status readable at a glance."
      },
      {
        title: "Integrated payment (experimental)",
        description: "Explored an early payment integration flow to reduce manual confirmation steps and make future transactions more seamless."
      },
      {
        title: "Automation layer",
        description: "Connected recurring billing logic with email delivery so organizers could notify members without manual follow-up."
      }
    ]
  },
  {
    slug: "craftlab-simulation",
    displayIndex: "02",
    title: "Craftlab Simulation",
    year: "2025",
    category: "VR Experience",
    role: "VR Simulation Developer",
    client: "Final course project",
    clientLabel: "Context",
    demoUrl: "https://daniswara99.met.student.pens.ac.id/vr/index.html",
    githubUrl: "https://github.com/arguspermono/VR_RAKIT-PC",
    location: "Indonesia",
    image: "/projects/craftlab-image.png",
    summary: "A 3D VR simulation for computer assembly, designed to make hardware-learning more interactive and spatial.",
    description: "A web-based VR simulation for assembling computer components in a 3D environment, built with Three.js and Babylon.js as a final course project.",
    featured: true,
    services: ["VR games", "Three.js", "Babylon.js"],
    stack: ["React JS", "Three.js", "Babylon.js", "WebXR"],
    metrics: [
      { label: "Platform", value: "Web VR" },
      { label: "Libraries", value: "3D focused" },
      { label: "Build year", value: "2025" }
    ],
    challenge: "Create a browser-based VR simulation that helps users understand computer assembly through immersive 3D interaction without making the flow confusing.",
    solution: "Built a structured simulation using Three.js and Babylon.js, with spatial object placement, guided interaction, and a web-delivered VR environment.",
    outcome: "The project delivered an interactive prototype for learning computer assembly in VR and translated technical course work into a more engaging educational experience.",
    process: [
      {
        title: "Simulation mapping",
        description: "Mapped each assembly step so users could move through the computer-building process in a clear and logical order."
      },
      {
        title: "3D interaction design",
        description: "Designed object interactions and placement behavior to make picking, positioning, and understanding components feel more intuitive."
      },
      {
        title: "Web VR delivery",
        description: "Optimized the simulation for browser-based VR playback so it remained accessible without requiring a native installation."
      }
    ]
  },
  {
    slug: "invoice-generator",
    displayIndex: "03",
    title: "Invoice Generator",
    year: "2025",
    category: "Web App",
    role: "Fullstack Developer",
    client: "Personal project",
    clientLabel: "Context",
    demoUrl: "https://invoice-generator-khaki-nu.vercel.app/",
    githubUrl: "https://github.com/Pipip-zen/invoice-generator",
    location: "Indonesia",
    image: "/projects/invoice-images.png",
    summary: "A streamlined invoice dashboard for creating bills, monitoring payments, and understanding revenue performance faster.",
    description: "Manage invoices, track payments, and visualize your revenue — all in one clean dashboard.",
    featured: false,
    services: ["Dashboard UI", "Data visualization", "Fullstack development"],
    stack: ["React + Vite", "Tailwind CSS", "Supabase", "Recharts", "React Hook Form", "Vercel"],
    metrics: [
      { label: "Invoices", value: "Managed" },
      { label: "Payments", value: "Tracked" },
      { label: "Revenue", value: "Visualized" }
    ],
    challenge: "Design an invoice workflow that keeps billing, payment status, and revenue tracking simple without turning the dashboard into a cluttered admin tool.",
    solution: "Built a clean dashboard structure with Supabase-backed data, form handling for invoice management, and charts that make revenue trends easier to read.",
    outcome: "The project turned invoice administration into a more organized, visual, and accessible workflow for day-to-day financial tracking.",
    process: [
      {
        title: "Dashboard structure",
        description: "Organized the interface around invoices, payment tracking, and revenue overview so users could find the main actions quickly."
      },
      {
        title: "Form workflow",
        description: "Used structured form handling to make invoice creation and updates more reliable and easier to maintain."
      },
      {
        title: "Revenue visibility",
        description: "Added chart-based summaries to help users read payment activity and revenue performance at a glance."
      }
    ]
  },
  {
    slug: "concrete-signal",
    displayIndex: "04",
    title: "Kinetic Type",
    year: "2024",
    category: "Typography / Motion",
    role: "UI Engineer",
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
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
