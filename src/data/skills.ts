export type SkillLevel = "Confident" | "Familiar";

export type SkillItem = {
  name: string;
  level: SkillLevel;
};

export type SkillGroup = {
  category: string;
  items: SkillItem[];
};

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      { name: "HTML / CSS", level: "Confident" },
      { name: "Tailwind CSS", level: "Confident" },
      { name: "React / Vue JS", level: "Familiar" },
      { name: "Flutter", level: "Familiar" }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "PHP / Laravel", level: "Confident" },
      { name: "Python", level: "Familiar" }
    ]
  },
  {
    category: "Creative & Vision",
    items: [
      { name: "Three.js & WebGL", level: "Confident" },
      { name: "Babylon.js", level: "Confident" },
      { name: "OpenCV", level: "Familiar" },
      { name: "Figma", level: "Familiar" }
    ]
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "Git / GitHub", level: "Confident" },
      { name: "AWS / Vercel", level: "Confident" },
      { name: "Docker", level: "Familiar" }
    ]
  }
];
