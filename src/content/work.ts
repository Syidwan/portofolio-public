import lenInternShot from "@/assets/images/work/len-intern.png";
import ostaceShot from "@/assets/images/work/ostace.png";
import pawShot from "@/assets/images/work/paw.png";

import type { WorkContent } from "./types";

// Screenshot alt text never repeats the project name — the card's heading sits
// right below the image, and a screen reader would say the name twice.
export const WORK = {
  header: {
    id: "work",
    eyebrow: "Work",
    heading: "Featured Projects.",
    subhead:
      "Selected web and mobile applications built across freelance, enterprise internship, and academic work.",
  },
  // Ostace is first and featured: true, so the band renders it full-width.
  projects: [
    {
      id: "ostace",
      name: "Ostace POS",
      domain: "ostace-pos.vercel.app",
      href: "https://ostace-pos.vercel.app",
      featured: true,
      description:
        "Point of Sale (POS) and inventory management system designed for RAphonecell Electronics, digitizing counter operations, repair tracking, and daily transaction workflows.",
      role: "Freelance web developer — built the responsive web dashboard and counter service workflow.",
      stack: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Nest.js",
        "PostgreSQL",
      ],
      screenshot: {
        src: ostaceShot,
        alt: "Point of sale dashboard showing transaction summary, inventory list, and management panel.",
      },
      linkLabel: "Visit ostace-pos.vercel.app",
    },
    {
      id: "len-intern",
      name: "SiHemat — EV Fleet Tracking App",
      domain: "mockup-intern-project.vercel.app",
      href: "https://mockup-intern-project.vercel.app",
      featured: false,
      description:
        "Real-time EV motorcycle fleet tracking mobile application prototype (SiHemat) built for PT LEN Industri (Persero), featuring live GPS telemetry, route replay, safety monitoring, and corporate fleet compliance.",
      role: "Software Engineer & Mobile Intern — developed the Flutter mobile application prototype and interactive showcase web mockup.",
      stack: [
        "Flutter",
        "Dart",
        "Mobile",
        "Google Maps",
        "Firebase",
        "Next.js",
        "TypeScript",
      ],
      screenshot: {
        src: lenInternShot,
        alt: "SiHemat mobile app overview showing live EV motorbike GPS tracking and fleet monitoring interface.",
      },
      linkLabel: "Visit mockup-intern-project.vercel.app",
    },
    {
      id: "paw-project",
      name: "PAW Web Application",
      domain: "paw-kappa.vercel.app",
      href: "https://paw-kappa.vercel.app",
      featured: false,
      description:
        "Web application development project for academic coursework at UIN Sunan Gunung Djati Bandung, implementing modern component design and structured layout.",
      role: "Software Engineer — building modular UI components, page layouts, and interactive user flows.",
      stack: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Vercel",
      ],
      screenshot: {
        src: pawShot,
        alt: "Web application interface displaying structured data and interactive UI elements.",
      },
      linkLabel: "Visit paw-kappa.vercel.app",
    },
  ],
} as const satisfies WorkContent;
