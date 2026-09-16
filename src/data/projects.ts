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
    location: "Surabaya",
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
    location: "Surabaya",
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
    slug: "clipmeet",
    displayIndex: "03",
    title: "ClipMeet",
    year: "2026",
    category: "Web App",
    role: "Fullstack Developer",
    client: "Personal project",
    clientLabel: "Context",
    githubUrl: "https://github.com/Pipip-zen/clipmeet-demo",
    location: "Surabaya",
    image: "/projects/clipmeet-image.png",
    summary: "Real-time video meeting, recording, and clipping web application powered by React, WebRTC, Socket.IO, and FFmpeg.",
    description: "Web application for real-time video recording and clipping. Record live meetings and clip video highlights seamlessly.",
    featured: true,
    services: ["Web App", "Real-time Media", "Video Processing"],
    stack: ["React (Vite)", "Node.js (Express)", "Socket.IO", "WebRTC", "FFmpeg"],
    metrics: [
      { label: "Live recording", value: "WebRTC" },
      { label: "Video clipping", value: "FFmpeg" },
      { label: "Build year", value: "2026" }
    ],
    challenge: "Build a browser-based video meeting tool capable of recording live streams and clipping video highlights on the server without quality degradation.",
    solution: "Developed a React frontend connected via Socket.IO and WebRTC with a Node.js backend utilizing FFmpeg to process and slice webm recording clips on demand.",
    outcome: "Delivered an interactive web app that lets participants join live meetings, record session video, and generate highlight clips instantly.",
    process: [
      {
        title: "Real-time communication",
        description: "Established WebRTC and Socket.IO video streaming between meeting participants."
      },
      {
        title: "Stream recording",
        description: "Implemented MediaRecorder API on client to capture live stream video blobs."
      },
      {
        title: "FFmpeg clipping pipeline",
        description: "Integrated server-side FFmpeg processing for automated highlight clip extraction."
      }
    ]
  },
  {
    slug: "catetin",
    displayIndex: "04",
    title: "Catetin",
    year: "2026",
    category: "Mobile App",
    role: "Mobile App Developer",
    client: "Personal project",
    clientLabel: "Context",
    githubUrl: "https://github.com/Pipip-zen/money-tracker-flutter",
    location: "Surabaya",
    image: "/projects/catetin-image.png",
    summary: "Mobile expense and routine transaction tracking app built with Flutter for intuitive personal finance management.",
    description: "Personal finance and routine transaction tracking mobile application. Record income, expenses, and manage budgets effortlessly.",
    featured: true,
    services: ["Mobile App", "Flutter Development", "UI UX Design"],
    stack: ["Flutter", "Dart", "Provider", "SQLite"],
    metrics: [
      { label: "Platform", value: "Mobile (Flutter)" },
      { label: "Transactions", value: "Tracked" },
      { label: "Build year", value: "2026" }
    ],
    challenge: "Design a clean mobile financial tracker that simplifies logging recurring transactions and expenses without complicated navigation.",
    solution: "Built a cross-platform mobile app using Flutter with clean form inputs, category tags, recurring transaction scheduling, and clear expense summaries.",
    outcome: "Created a sleek mobile finance companion that allows users to record daily income and expenses in seconds.",
    process: [
      {
        title: "UI & Form design",
        description: "Designed an accessible mobile form layout for quick transaction entry and categorization."
      },
      {
        title: "Recurring scheduler",
        description: "Implemented automated logic for daily, weekly, and monthly routine transaction tracking."
      },
      {
        title: "Local storage persistence",
        description: "Used local device storage to ensure fast, offline-first data management."
      }
    ]
  },
  {
    slug: "invoice-generator",
    displayIndex: "05",
    title: "Invoice Generator",
    year: "2025",
    category: "Web App",
    role: "Fullstack Developer",
    client: "Personal project",
    clientLabel: "Context",
    demoUrl: "https://invoice-generator-khaki-nu.vercel.app/",
    githubUrl: "https://github.com/Pipip-zen/invoice-generator",
    location: "Surabaya",
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
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
