import type { TestimonialsContent } from "./types";

export const TESTIMONIALS = {
  header: {
    id: "testimonials",
    eyebrow: "Certifications",
    heading: "Certifications & Recognized Learning.",
    subhead:
      "Formal internship completion, industry certifications, and coursework achievements.",
  },
  items: [
    {
      id: "len-cert",
      name: "PT LEN Industri (Persero)",
      title: "Internship Certificate · Dec 2025",
      quote:
        "Completed a 4-month professional internship in the Portfolio Optimization Division, successfully delivering frontend prototypes for asset monitoring dashboards and electric motorcycle tracking systems.",
      avatar: { initials: "LEN", tone: "violet" },
      href: "https://www.linkedin.com/in/nirwan-rasyid-88b97a233/details/certifications/",
      linkLabel: "View on LinkedIn",
    },
    {
      id: "cisco-cert",
      name: "Cisco Networking Academy",
      title: "NDG Linux Essentials · Jul 2024",
      quote:
        "Demonstrated understanding of Linux operating system architecture, command-line management, user administration, file systems, and open source development workflows.",
      avatar: { initials: "CS", tone: "emerald" },
      href: "https://www.linkedin.com/in/nirwan-rasyid-88b97a233/details/certifications/",
      linkLabel: "View on LinkedIn",
    },
    {
      id: "oracle-cert",
      name: "Oracle Academy",
      title: "Database Programming with SQL · Oct 2024",
      quote:
        "Completed rigorous training in relational database concepts, SQL query composition, schema creation, data manipulation, constraints, and data integrity standards.",
      avatar: { initials: "OR", tone: "orange" },
      href: "https://www.linkedin.com/in/nirwan-rasyid-88b97a233/details/certifications/",
      linkLabel: "View on LinkedIn",
    },
  ],
} as const satisfies TestimonialsContent;
