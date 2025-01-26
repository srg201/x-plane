import { cn } from "@/lib/utils";
import React, { JSX } from "react";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
}

const headingStyles: Record<string, string> = {
  h1: "text-3xl sm:text-5xl lg:text-7xl leading-snug font-bold tracking-tighter",
  h2: "text-4xl sm:text-5xl leading-snug font-bold tracking-tighter",
  h3: "text-3xl sm:text-4xl leading-snug font-bold tracking-tighter",
  h4: "text-2xl sm:text-3xl leading-snug font-bold tracking-tighter",
  h5: "text-xl sm:text-2xl leading-snug font-bold tracking-tighter",
  h6: "text-lg sm:text-xl leading-snug font-bold tracking-tighter",
};

export const Heading: React.FC<Props> = ({
  as: Tag = "h1",
  className,
  children
}) => {
  return <Tag dangerouslySetInnerHTML={{ __html: children as string }} className={cn(headingStyles[Tag], className)} />;
};
