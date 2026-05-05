export type ExperienceItem = {
  period: string;
  role: string;
  studio: string;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    period: "2023 — Present",
    role: "Lead Frontend Designer",
    studio: "Null Axis Studio",
    description: "Build high-contrast portfolio systems, campaign landings, and spatial brand experiences for cultural and design clients."
  },
  {
    period: "2021 — 2023",
    role: "Senior UI Engineer",
    studio: "Frame Condition",
    description: "Translated editorial concepts into modular product interfaces with a strong focus on responsive behavior and typographic precision."
  },
  {
    period: "2019 — 2021",
    role: "Independent Designer / Developer",
    studio: "Self-initiated",
    description: "Designed and shipped portfolio websites, visual archives, and launch microsites for architects, artists, and material-led brands."
  }
];
