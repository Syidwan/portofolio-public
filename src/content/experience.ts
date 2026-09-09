import type { StaticImageData } from "next/image";

import lenLogo from "@/assets/images/companies/len.png";
import raffidLogo from "@/assets/images/companies/raffid.svg";
import raphoncellLogo from "@/assets/images/companies/raphoncell.svg";

import type { ExperienceContent } from "./types";

// Same "*.svg" typing fix as tech.ts.
const LOGOS: Readonly<Record<string, StaticImageData>> = {
  len: lenLogo,
  raphoncell: raphoncellLogo,
  raffid: raffidLogo,
};

// No duration strings stored — they are computed from these dates on every
// build, so they never go stale.
export const EXPERIENCE = {
  header: {
    id: "experience",
    eyebrow: "Experience",
    heading: "Work & Internship Journey.",
    subhead:
      "Professional internship at state enterprise, freelance client development, and technical troubleshooting.",
  },
  roles: [
    {
      id: "raphoncell",
      company: "RAphonecell Electronics",
      position: "Freelance Web Developer",
      logo: LOGOS.raphoncell,
      startISO: "2026-01",
      endISO: "2026-04",
      bullets: [
        "Developed Ostace POS — a management and point-of-sale web application to digitize sales, repair-service tracking, and inventory operations.",
        "Built the web dashboard with React and Next.js, and backend services using Nest.js and PostgreSQL.",
        "Delivered full-featured operational workflows from database schema design to responsive user interfaces.",
        "Leveraged AI-assisted development tools (Claude Code, Gemini, ChatGPT) to accelerate prototyping and delivery while maintaining clean code standards.",
      ],
    },
    {
      id: "len",
      company: "PT LEN Industri (Persero)",
      position: "Software Engineer Intern",
      logo: LOGOS.len,
      startISO: "2025-09",
      endISO: "2025-12",
      bullets: [
        "Completed a 4-month internship placed within the Portfolio Optimization division, focused on designing and building software and mobile prototypes.",
        "Designed and developed an analytics dashboard prototype for monitoring and visualizing company assets.",
        "Built the prototype for an electric motorcycle tracking and monitoring mobile application using Flutter.",
        "Collaborated with cross-functional teams to translate monitoring requirements into functional, user-friendly interfaces.",
      ],
    },
    {
      id: "raffid",
      company: "Raffid Cellular",
      position: "Counter Staff & Electronics Repair Technician",
      logo: LOGOS.raffid,
      startISO: "2024-01",
      endISO: "2024-02",
      bullets: [
        "Managed sales operations and provided repair services for electronics, including phones, tablets, and laptops.",
        "Gained hands-on experience in diagnosing and fixing hardware and software issues, enhancing technical troubleshooting skills.",
      ],
    },
  ],
} as const satisfies ExperienceContent;
