import headshot from "@/assets/images/nirwan-headshot.jpg";

import type { HeroContent } from "./types";

export const HERO = {
  id: "hero",
  eyebrow: "Software Developer · Frontend & Full Stack · AI Engineer · Data Scientist",
  headlineLead: "Hi, I'm Nirwan",
  // Separate from headlineLead so it can sit in its own span — animated by
  // CSS, hidden from screen readers.
  wave: "👋",
  headlineClaim: "I build intuitive web & mobile apps.",
  subhead:
    "Software Developer with strong frontend specialization and full stack experience. Building modern web with React & Next.js, mobile apps with Flutter, and backend APIs with Nest.js. Leveraging AI-assisted development to ship clean, production-ready solutions.",
  primary: { label: "Get in touch", href: "#contact" },
  secondary: { label: "See my work", href: "#work" },
  location: "Bandung, Indonesia · WIB (UTC+7)",
  // Empty alt on purpose: the photo sits right beside the name in the <h1>,
  // and describing it would make a screen reader say the name twice.
  portrait: { src: headshot, alt: "" },
  // Hard limit: 32 characters per visible line — the typewriter clip is
  // text-length × 1ch and never wraps (white-space: pre), so a longer line
  // clips at the card edge on a 375px phone. One code point per terminal
  // cell: no emoji or wide glyphs here.
  terminal: {
    title: "nirwan@dev",
    lines: [
      { kind: "prompt", text: "find a frontend software dev" },
      { kind: "result", text: "Found 1 match: Nirwan Rasyid" },
      { kind: "branch", text: "React · Next.js · Flutter" },
      { kind: "branch", text: "Nest.js · PostgreSQL · MySQL" },
      { kind: "branch", text: "Ex-Intern PT LEN Industri" },
      { kind: "branch", text: "AI Engineer · Data Scientist" },
      { kind: "status", text: "Available for opportunities" },
      { kind: "prompt", text: "hire him", cursor: true },
    ],
  },
} as const satisfies HeroContent;
