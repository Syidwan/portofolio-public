import type { TestimonialsContent } from "./types";

export const TESTIMONIALS = {
  header: {
    id: "testimonials",
    eyebrow: "Certifications",
    heading: "Certifications & Recognized Learning.",
    subhead:
      "Formal internship completion, competition awards, and industry-recognized technical certifications.",
  },
  items: [
    {
      id: "len-cert",
      name: "PT LEN Industri (Persero)",
      title: "On The Job Training Certificate (Grade A) · Dec 2025",
      quote:
        "Awarded Grade A for completing a 4-month internship in the Portfolio Optimization Division, delivering enterprise asset optimization dashboards and EV fleet tracking mobile prototypes across DEFEND ID holding companies.",
      avatar: { initials: "LEN", tone: "violet" },
      href: "https://www.linkedin.com/in/nirwan-rasyid-88b97a233/details/certifications/",
      linkLabel: "View on LinkedIn",
    },
    {
      id: "mos-excel-cert",
      name: "PTIPD UIN SGD Bandung & Lumina Eka Optima",
      title: "Training ICT: Microsoft Office Specialist (Excel) · Nov 2025",
      quote:
        "Completed intensive competency training and certification preparation in advanced spreadsheet modeling, data analysis formulas, pivot tables, and structured reporting workflows.",
      avatar: { initials: "MOS", tone: "emerald" },
      href: "https://www.linkedin.com/in/nirwan-rasyid-88b97a233/details/certifications/",
      linkLabel: "View on LinkedIn",
    },
    {
      id: "uiux-award",
      name: "IT FAIR XIV — HIMA Teknik Informatika UIN SGD",
      title: "3rd Place, UI/UX Competition · 2025",
      quote:
        "Recognized with 3rd Place in the UI/UX Design Competition at IT FAIR XIV for crafting user-centered, accessible interface prototypes backed by structured user research and interactive design systems.",
      avatar: { initials: "UI", tone: "pink" },
      href: "https://www.linkedin.com/in/nirwan-rasyid-88b97a233/details/certifications/",
      linkLabel: "View on LinkedIn",
    },
    {
      id: "oracle-sql-cert",
      name: "Oracle Academy",
      title: "Database Programming with SQL · Oct 2024",
      quote:
        "Completed rigorous training in relational database concepts, complex SQL query composition, DDL/DML operations, constraints, transactions, and data integrity standards.",
      avatar: { initials: "OR", tone: "orange" },
      href: "https://www.linkedin.com/in/nirwan-rasyid-88b97a233/details/certifications/",
      linkLabel: "View on LinkedIn",
    },
    {
      id: "oracle-design-cert",
      name: "Oracle Academy",
      title: "Database Design · Sep 2024",
      quote:
        "Mastered entity-relationship modeling (ERD), database normalization (1NF–3NF), relational schema architecture, and enterprise data modeling best practices.",
      avatar: { initials: "DB", tone: "violet" },
      href: "https://www.linkedin.com/in/nirwan-rasyid-88b97a233/details/certifications/",
      linkLabel: "View on LinkedIn",
    },
    {
      id: "dicoding-revou-cert",
      name: "Dicoding Indonesia & RevoU",
      title: "Web, JavaScript, Java & Software Engineering · 2024",
      quote:
        "Completed foundational software engineering certifications including Belajar Dasar Pemrograman Web (Sep 2024), Pemrograman JavaScript (Sep 2024), Pemrograman Dengan Java (May 2024), and RevoU Intro to Software Engineering (Jun 2024).",
      avatar: { initials: "SE", tone: "emerald" },
      href: "https://www.linkedin.com/in/nirwan-rasyid-88b97a233/details/certifications/",
      linkLabel: "View on LinkedIn",
    },
  ],
} as const satisfies TestimonialsContent;
