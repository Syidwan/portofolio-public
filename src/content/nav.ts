import type { NavContent } from "./types";

export const NAV = {
  // "/#hero", not "/": next/link ignores a click on the route you are already
  // on, so "/" would never scroll. The leading slash also keeps the link
  // working from the 404 page.
  wordmark: { label: "nirwan_rasyid", href: "/#hero" },
  landmarkLabel: "Main",
  // Five links is the ceiling — six start wrapping on tablet widths. Stack,
  // FAQ and Contact are left out here but stay in the footer, which keeps
  // every section linked (check-anchors verifies this).
  links: [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Certifications", href: "#testimonials" },
  ],
  cv: {
    label: "Download CV",
    href: "https://drive.google.com/file/d/1fHypZtg2r1VU8wJ-wDZlZbuH4c51iRmd/view?usp=sharing",
  },
  cta: { label: "Let's talk", href: "#contact" },
  menuOpenLabel: "Open menu",
  menuCloseLabel: "Close menu",
  menuTitle: "Navigation menu",
} as const satisfies NavContent;
