import type { CtaContent } from "./types";

// Every contact row keeps a real href — in the old site these links were
// commented out and the email was not clickable.
export const CTA = {
  id: "contact",
  eyebrow: "Contact",
  heading: "Got something you want built?",
  subhead:
    "Looking for a passionate Software Engineer or have an interesting project? Let's connect and discuss how I can contribute.",
  primary: {
    label: "Get in touch",
    href: "mailto:nirwanrasyidridlo@gmail.com",
  },
  secondary: {
    label: "Download CV",
    href: "https://drive.google.com/drive/folders/1sxOxUyxQDF1P0D3LR1hvhyDdEoKgrt5q",
  },
  contactsLead: "You'll also find me here.",
  contacts: [
    {
      id: "email",
      label: "Email",
      value: "nirwanrasyidridlo@gmail.com",
      href: "mailto:nirwanrasyidridlo@gmail.com",
      copyLabel: "Copy email address",
      copiedLabel: "Copied!",
    },
    {
      id: "phone",
      label: "Phone",
      value: "+62 895-2734-0406",
      href: "tel:+6289527340406",
      copyLabel: "Copy phone number",
      copiedLabel: "Copied!",
    },
  ],
} as const satisfies CtaContent;
