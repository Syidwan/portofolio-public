import nirwanPhoto from "@/assets/images/nirwan-body.jpg";

import type { AboutContent } from "./types";

export const ABOUT = {
  header: {
    id: "about",
    eyebrow: "About",
    heading: "Building software with care, curiosity, and modern workflows.",
  },
  photo: {
    src: nirwanPhoto,
    alt: "Nirwan Rasyid Ridlo",
  },
  paragraphs: [
    [
      "I'm a Software Engineer based in Bandung, Indonesia, with strong full stack and mobile application capabilities. I enjoy turning complex problem statements into functional, responsive, and visually appealing applications that solve real-world problems.",
    ],
    [
      "Currently pursuing my Informatics Engineering degree at UIN Sunan Gunung Djati Bandung (maintaining a 3.76 GPA), my journey combines solid academic foundations with intensive practical experience — from engineering software prototypes at PT LEN Industri (Persero) to building counter management systems as a freelance software developer at RAphonecell Electronics.",
    ],
    [
      "My core tech stack centers around modern TypeScript ecosystems: React, Next.js, and Tailwind CSS on the web, Nest.js and Node.js for backend APIs, and Flutter for cross-platform mobile apps. I prioritize clean code structure, responsive design, and intuitive user experiences.",
    ],
    [
      "I embrace an AI-assisted development workflow, utilizing tools like Claude Code, Gemini, and Antigravity to accelerate the software lifecycle — from initial prototyping to production-ready implementation, while maintaining architectural standards and thorough review.",
    ],
    [
      "When I'm not coding, you'll find me exploring emerging developer tooling, refining user interfaces, or contributing to projects on ",
      { text: "GitHub", href: "https://github.com/Syidwan" },
      " and connecting with fellow developers on ",
      {
        text: "LinkedIn",
        href: "https://www.linkedin.com/in/nirwan-rasyid-88b97a233/",
      },
      ".",
    ],
  ],
  quickBitsLead: "A few quick bits:",
  quickBits: [
    "Informatics Engineering student at UIN Sunan Gunung Djati (GPA: 3.76)",
    "Software Engineer Intern at PT LEN Industri (Persero)",
    "Passionate about responsive UI/UX and performant web architecture",
    "Based in Bandung, Indonesia (WIB)",
    "Proficient with React, Next.js, Flutter & Nest.js",
    "Comfortable in AI-assisted development workflows",
  ],
  closing:
    "I'm always open to discussing new opportunities, internship roles, and software collaborations. Feel free to reach out!",
} as const satisfies AboutContent;
