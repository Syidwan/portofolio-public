import type { FooterContent } from "./types";

export const FOOTER = {
  landmarkLabel: "Site footer",
  brand: {
    wordmark: "nirwan_rasyid",
    tagline: "Software Engineer · AI Engineer · Data Engineer.",
    location: "Bandung, Indonesia · WIB (UTC+7)",
  },
  columns: [
    {
      id: "sections",
      heading: "Sections",
      // This column holds the only links to #services and #stack anywhere on
      // the site — remove a row and that section becomes unreachable
      // (check-anchors fails).
      links: [
        { label: "Services", href: "#services" },
        { label: "Work", href: "#work" },
        { label: "About", href: "#about" },
        { label: "Stack", href: "#stack" },
        { label: "Experience", href: "#experience" },
        { label: "Certifications", href: "#testimonials" },
        { label: "FAQ", href: "#faq" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      id: "connect",
      heading: "Connect",
      links: [
        { label: "Email", href: "mailto:nirwanrasyidridlo@gmail.com" },
        { label: "Phone", href: "tel:+6289527340406" },
        { label: "GitHub", href: "https://github.com/Syidwan" },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/nirwan-rasyid-88b97a233/",
        },
      ],
    },
    {
      id: "resources",
      heading: "Resources",
      links: [
        {
          label: "Download CV",
          href: "https://drive.google.com/file/d/1fHypZtg2r1VU8wJ-wDZlZbuH4c51iRmd/view?usp=sharing",
        },
        {
          label: "Source code",
          href: "https://github.com/Syidwan/portofolio",
        },
        { label: "llms.txt", href: "/llms.txt" },
        {
          label: "Figma template (v1)",
          href: "https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop",
        },
      ],
    },
  ],
  copyright: {
    symbol: "©",
    owner: "Nirwan Rasyid Ridlo",
    separator: "·",
    segments: [
      "Designed and ",
      { text: "coded", href: "https://github.com/Syidwan/portofolio" },
      " in Bandung, Indonesia.",
    ],
  },
} as const satisfies FooterContent;
