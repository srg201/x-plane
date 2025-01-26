"use client";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { HeroDescription, HeroTitle } from "@/data/hero";
import { cn, getStrapiMedia } from "@/lib/utils";
import { ArrowDown } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect } from "react";
import { Element, Link } from "react-scroll";
import ReactMarkdown from "react-markdown";

interface Props {
  className?: string;
  data: any;
}

export const Hero: React.FC<Props> = ({ className, data }) => {
  const { theme } = useTheme();

  useEffect(() => {
    console.log(theme);
    console.log(data);
  }, [theme]);

  const backgroundImage = getStrapiMedia(data?.data?.backgroundImage?.url);

  return (
    <section
      className={cn(
        "py-16 lg:py-56 bg-cover bg-fixed bg-center bg-no-repeat relative before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-black/60",
        className
      )}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
      }}
    >
      <Element name="hero">
        <Container className="flex flex-col gap-7 text-center items-center relative z-[2] text-white">
          <Heading>{data.data.title}</Heading>
          <ReactMarkdown className="max-w-xl text-sm md:text-base text-white markdown">
            {data.data.subtitle}
          </ReactMarkdown>
          <Button asChild className="rounded-full w-11 h-11">
            <Link
              spy
              smooth
              to="hydrogen"
              className="cursor-pointer"
              offset={-100}
            >
              <ArrowDown />
            </Link>
          </Button>
        </Container>
      </Element>
    </section>
  );
};
