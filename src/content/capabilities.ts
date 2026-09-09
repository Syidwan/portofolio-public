import type { CapabilitiesContent } from "./types";

// `icon` is a string, not a component — importing icon components here would
// pull the whole content layer into the browser bundle. The name-to-icon map
// lives in src/components/primitives/icon.tsx.
export const CAPABILITIES = {
  header: {
    id: "services",
    eyebrow: "Services",
    heading: "What I bring to the table.",
    subhead:
      "Frontend engineering, full stack development, or cross-platform mobile applications.",
  },
  items: [
    {
      id: "frontend",
      icon: "layers",
      title: "Modern Frontend Engineering",
      body: "Responsive, performant, and accessible interfaces built with React, Next.js, and Tailwind CSS. From analytics dashboards to interactive web apps, crafted with smooth animations and clean component architecture.",
    },
    {
      id: "fullstack",
      icon: "bot",
      title: "Full Stack & Cross-Platform Mobile",
      body: "Complete product delivery: Nest.js and Node.js backend services backed by PostgreSQL or MySQL, paired with cross-platform mobile apps built with Flutter, real-time APIs, and intuitive user experiences.",
    },
    {
      id: "ai",
      icon: "pen-tool",
      title: "AI-Assisted Accelerated Delivery",
      body: "Comfortable working in an AI-assisted development workflow (Claude Code, Gemini, Antigravity) to accelerate prototyping, test coverage, and production-ready implementation while maintaining high code quality.",
    },
  ],
} as const satisfies CapabilitiesContent;
