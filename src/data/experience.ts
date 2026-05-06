export type ExperienceItem = {
  period: string;
  organization: string;
  role: string;
  location: string;
  summary: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    period: "2024 \u2013 Present",
    organization: "Electronic Engineering Polytechnic Institute of Surabaya",
    role: "Undergraduate in Multimedia Engineering Technology",
    location: "Surabaya, Indonesia",
    summary:
      "Focused on full-stack development, network systems, and immersive media while building a multidisciplinary technical foundation.",
    highlights: ["Full Stack Development", "Network Systems", "Immersive Media", "Software Engineering"]
  },
  {
    period: "January 2023 \u2013 March 2023",
    organization: "PT. Educa Sisfomedia Indonesia",
    role: "Intern Front-End Developer",
    location: "Salatiga, Indonesia",
    summary:
      "Developed a business website for a local UMKM as the final internship project, with a focus on clean UI and responsive design.",
    highlights: ["Frontend Development", "UI/UX Design"]
  },
  {
    period: "2021 \u2013 2024",
    organization: "Ihsanul Fikri Vocational High School",
    role: "Computer & Network Engineering",
    location: "Magelang, Indonesia",
    summary:
      "Specialized in computer and network systems, and achieved 2nd place in the city-level Web Technology competition (LKS) in 2023.",
    highlights: ["Computer Systems", "Network Administrator"]
  }
];
