export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Design Direction",
    items: ["Editorial systems", "Art direction", "Interaction restraint", "Spatial composition"]
  },
  {
    category: "Frontend",
    items: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    category: "Product Thinking",
    items: ["Rapid prototyping", "Narrative UX", "Design systems", "Content structure"]
  }
];
