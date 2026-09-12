import type { FaqContent } from "./types";

export const FAQ = {
  header: {
    id: "faq",
    eyebrow: "FAQ",
    heading: "Frequently Asked Questions.",
    subhead: "Quick answers about collaboration and my background. Anything else, feel free to reach out.",
  },
  groupName: "faq",
  items: [
    {
      id: "engagement-types",
      question: "What kind of opportunities are you open to?",
      answer:
        "I am actively open to internship programs, full-time junior software engineering roles, and freelance software development projects across full stack, mobile, and web.",
    },
    {
      id: "stack",
      question: "What technologies do you primarily build with?",
      answer:
        "My daily drivers are React, Next.js, and TypeScript with Tailwind CSS on the frontend; Nest.js and Node.js with PostgreSQL or MySQL on the backend; and Flutter for cross-platform mobile apps.",
    },
    {
      id: "ai",
      question: "How do you integrate AI into your workflow?",
      answer:
        "I use AI coding tools and other AI agents (such as Claude Code and Gemini) to accelerate prototyping, generate robust test scaffolding, and explore architectural patterns, while ensuring code quality, security, and manual verification.",
    },
    {
      id: "design",
      question: "Can you implement designs without a dedicated UI designer?",
      answer:
        "Yes. I can translate detailed Figma mockups into pixel-perfect, responsive code. When there is no designer, I build clean and accessible interfaces directly using Tailwind CSS and modern design systems.",
    },
    {
      id: "timezone",
      question: "Where are you based, and are you open to remote work?",
      answer:
        "I am based in Bandung, Indonesia — WIB (UTC+7). I am fully equipped for remote work, hybrid arrangements, or on-site opportunities in the Bandung area.",
    },
    {
      id: "getting-started",
      question: "How can someone reach out to start a conversation?",
      answer:
        "You can email me at nirwanrasyidridlo@gmail.com, message me via LinkedIn, or call/WhatsApp at +62 895-2734-0406. I typically respond within 24 hours.",
    },
  ],
} as const satisfies FaqContent;
