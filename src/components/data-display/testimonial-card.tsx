import { ArrowUpRight } from "lucide-react";

import { Avatar } from "@/components/primitives/avatar";
import { Button } from "@/components/primitives/button";
import { Card } from "@/components/primitives/card";
import { Icon } from "@/components/primitives/icon";
import { Link } from "@/components/primitives/link";
import { Text } from "@/components/primitives/text";
import type { Testimonial } from "@/content/types";

export type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { name, title, quote, avatar, href, linkLabel } = testimonial;

  return (
    // p-6 over the surface's p-8: DESIGN.md's testimonial card is the same
    // surface at smaller padding, and twMerge lets the later class win.
    <Card
      surface="muted"
      as="figure"
      className="flex h-full flex-col gap-4 p-6"
    >
      {/* figcaption may legally be the first or last child; first puts the
          name row on top. Sitting inside the <figure> is what ties the name
          to the quote for screen readers, not just visually. */}
      <figcaption className="flex items-center gap-3">
        <Avatar source={avatar} />
        <span className="flex flex-col">
          {/* span, not title-sm's default h4 — a person's name is not a heading. */}
          <Text as="span" variant="title-sm">
            {name}
          </Text>
          {/* tone="body" (gray-700), never muted: muted's gray-500 measures
              4.41:1 on this grey card — under the 4.5:1 minimum. */}
          <Text as="span" variant="body-sm" tone="body">
            {title}
          </Text>
        </span>
      </figcaption>
      <Text as="blockquote" variant="body-md">
        {quote}
      </Text>
      {href ? (
        <Button
          variant="text-link"
          asChild
          className="mt-auto inline-flex items-center gap-1.5 self-start py-2"
        >
          <Link href={href} variant="unstyled">
            {linkLabel ?? "View on LinkedIn"}
            <Icon icon={ArrowUpRight} />
          </Link>
        </Button>
      ) : null}
    </Card>
  );
}
