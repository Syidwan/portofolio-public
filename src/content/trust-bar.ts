import lenLogo from "@/assets/images/clients/len.png";
import uinLogo from "@/assets/images/clients/uin-bandung.png";

import type { TrustBarContent } from "./types";

export const TRUST_BAR = {
  intro: "Organizations & institutions I've worked and learned with",
  marks: [
    {
      name: "PT LEN Industri (Persero)",
      href: "https://www.len.co.id",
      logo: lenLogo,
      size: "lg",
    },
    {
      name: "UIN Sunan Gunung Djati Bandung",
      href: "https://uinsgd.ac.id",
      logo: uinLogo,
      size: "lg",
    },
  ],
} as const satisfies TrustBarContent;
