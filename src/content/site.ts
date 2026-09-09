import type { SiteContent } from "./types";

export const SITE = {
  wordmark: "nirwan_rasyid",
  name: "Nirwan Rasyid Ridlo",
  // Rendered verbatim into the OG image and JSON-LD. Keep it short or the OG
  // line wraps.
  jobTitle: "Software Engineer · AI Engineer · Data Scientist",
  url: "https://nirwanrasyidridlo.vercel.app",
  title:
    "Nirwan Rasyid Ridlo — Software Engineer · AI Engineer · Data Scientist in Bandung, Indonesia",
  titleTemplate: "%s | Nirwan Rasyid Ridlo",
  description:
    "Software Engineer, AI Engineer, and Data Scientist based in Bandung, Indonesia. Skilled in React, Next.js, Flutter, Nest.js, Python, and AI-assisted workflows.",
  keywords: [
    "Nirwan Rasyid Ridlo",
    "Software Engineer",
    "Full Stack Developer",
    "AI Engineer",
    "Data Scientist",
    "React Developer",
    "Next.js Developer",
    "Flutter Developer",
    "Web Developer Bandung",
    "AI Assisted Developer",
  ],
  ogTitle: "Nirwan Rasyid Ridlo — Software Engineer",
  ogDescription:
    "Software Engineer based in Bandung, Indonesia. Specializing in responsive web, mobile applications, and AI-assisted development.",
  ogImageAlt: "Nirwan Rasyid Ridlo, software engineer — nirwan_rasyid",
  twitterTitle: "Nirwan Rasyid Ridlo — Software Engineer",
  twitterDescription:
    "Software Engineer (React, Next.js, Flutter & AI tools) in Bandung, Indonesia.",
  twitterHandle: "@nirwanrasyid",
  locale: "id_ID",
  themeColor: "white",
  locationLabel: "Bandung, Indonesia · WIB (UTC+7)",
  locality: "Bandung",
  region: "Jawa Barat",
  countryCode: "ID",
  timeZone: "Asia/Jakarta",
  email: "nirwanrasyidridlo@gmail.com",
  emailHref: "mailto:nirwanrasyidridlo@gmail.com",
  phoneLabel: "+62 895-2734-0406",
  // Written by hand, not derived from phoneLabel — a string replace only swaps
  // the first match and once left a space in the number.
  phoneHref: "tel:+6289527340406",
  cv: {
    label: "Download CV",
    href: "https://drive.google.com/file/d/1fHypZtg2r1VU8wJ-wDZlZbuH4c51iRmd/view?usp=sharing",
  },
  // One record read by both hero and footer, so they can never disagree.
  availability: { available: true, label: "Available for new opportunities" },
  social: [
    { label: "GitHub", href: "https://github.com/Syidwan", icon: "github" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/nirwan-rasyid-88b97a233/",
      icon: "linkedin",
    },
  ],
  repoUrl: "https://github.com/Syidwan/portofolio",
  figmaTemplateUrl:
    "https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop",
  skipLinkLabel: "Skip to main content",
  mainLandmarkLabel: "Main content",
  notFound: {
    title: "Page not found",
    heading: "That page doesn't exist.",
    body: "The whole site lives on a single page, so there is not much to get lost in. The link below takes you back to it.",
    link: { label: "Back to the homepage", href: "/" },
  },
  errorPage: {
    title: "Something went wrong",
    heading: "Something went wrong.",
    body: "An unexpected error stopped this page from rendering. Trying again usually fixes it. If it keeps happening, email nirwanrasyidridlo@gmail.com and tell me what you were doing.",
    retryLabel: "Try again",
    link: { label: "Back to the homepage", href: "/" },
    digestLabel: "Error reference",
  },
} as const satisfies SiteContent;
