import type { StaticImageData } from "next/image";

import androidstudioLogo from "@/assets/images/tech/androidstudio.svg";
import claudeLogo from "@/assets/images/tech/claude.svg";
import claudecodeLogo from "@/assets/images/tech/claudecode.svg";
import dartLogo from "@/assets/images/tech/dart.svg";
import figmaLogo from "@/assets/images/tech/figma.svg";
import flutterLogo from "@/assets/images/tech/flutter.svg";
import geminiLogo from "@/assets/images/tech/gemini.svg";
import gitLogo from "@/assets/images/tech/git.svg";
import javascriptLogo from "@/assets/images/tech/javascript.svg";
import kotlinLogo from "@/assets/images/tech/kotlin.svg";
import mysqlLogo from "@/assets/images/tech/mysql.svg";
import nestjsLogo from "@/assets/images/tech/nestjs.svg";
import nextjsLogo from "@/assets/images/tech/nextjs.svg";
import nodejsLogo from "@/assets/images/tech/nodejs.svg";
import postgresqlLogo from "@/assets/images/tech/postgresql.svg";
import reactLogo from "@/assets/images/tech/react.svg";
import tailwindcssLogo from "@/assets/images/tech/tailwindcss.svg";
import typescriptLogo from "@/assets/images/tech/typescript.svg";

import type { TechContent } from "./types";

// Next.js types every "*.svg" import as `any`, and a project-level override
// does not stick (tried). This record is the one place that gets fixed.
const LOGOS: Readonly<Record<string, StaticImageData>> = {
  androidstudio: androidstudioLogo,
  claude: claudeLogo,
  claudecode: claudecodeLogo,
  dart: dartLogo,
  figma: figmaLogo,
  flutter: flutterLogo,
  gemini: geminiLogo,
  git: gitLogo,
  javascript: javascriptLogo,
  kotlin: kotlinLogo,
  mysql: mysqlLogo,
  nestjs: nestjsLogo,
  nextjs: nextjsLogo,
  nodejs: nodejsLogo,
  postgresql: postgresqlLogo,
  react: reactLogo,
  tailwindcss: tailwindcssLogo,
  typescript: typescriptLogo,
};

export const TECH = {
  header: {
    id: "stack",
    eyebrow: "Stack",
    heading: "The technologies I build with.",
    subhead:
      "Core languages, frameworks, and modern developer tooling across web and mobile development.",
  },
  groups: [
    {
      id: "frontend",
      title: "Frontend Development",
      descriptor: "Building responsive, modern, and accessible web interfaces.",
      items: [
        {
          name: "JavaScript",
          href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          logo: LOGOS.javascript,
        },
        {
          name: "TypeScript",
          href: "https://www.typescriptlang.org/",
          logo: LOGOS.typescript,
        },
        { name: "React", href: "https://react.dev/", logo: LOGOS.react },
        { name: "Next.js", href: "https://nextjs.org/", logo: LOGOS.nextjs },
        {
          name: "Tailwind CSS",
          href: "https://tailwindcss.com/",
          logo: LOGOS.tailwindcss,
        },
      ],
    },
    {
      id: "mobile",
      title: "Mobile Development",
      descriptor: "Cross-platform and native mobile application engineering.",
      items: [
        { name: "Flutter", href: "https://flutter.dev/", logo: LOGOS.flutter },
        { name: "Dart", href: "https://dart.dev/", logo: LOGOS.dart },
        { name: "Kotlin", href: "https://kotlinlang.org/", logo: LOGOS.kotlin },
        {
          name: "Android Studio",
          href: "https://developer.android.com/studio",
          logo: LOGOS.androidstudio,
        },
      ],
    },
    {
      id: "backend",
      title: "Backend & Database",
      descriptor: "Scalable backend services, REST APIs, and database structures.",
      items: [
        { name: "NestJS", href: "https://nestjs.com/", logo: LOGOS.nestjs },
        { name: "Node.js", href: "https://nodejs.org/en", logo: LOGOS.nodejs },
        {
          name: "PostgreSQL",
          href: "https://www.postgresql.org/",
          logo: LOGOS.postgresql,
        },
        {
          name: "MySQL",
          href: "https://www.mysql.com/",
          logo: LOGOS.mysql,
        },
      ],
    },
    {
      id: "ai-tooling",
      title: "AI-Assisted & Tooling",
      descriptor: "Accelerated development workflows, design, and version control.",
      items: [
        {
          name: "Claude Code",
          href: "https://claude.com/product/claude-code",
          logo: LOGOS.claudecode,
        },
        {
          name: "Gemini",
          href: "https://ai.google.dev/",
          logo: LOGOS.gemini,
        },
        { name: "Figma", href: "https://www.figma.com/", logo: LOGOS.figma },
        { name: "Git", href: "https://git-scm.com/", logo: LOGOS.git },
      ],
    },
  ],
} as const satisfies TechContent;
