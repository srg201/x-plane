"use client";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { HeroDescription, HeroTitle } from "@/data/hero";
import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect } from "react";
import { Element, Link } from "react-scroll";

interface Props {
  className?: string;
}

export const Hero: React.FC<Props> = ({ className }) => {
  const { theme } = useTheme();

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <section
      className={cn(
        'py-16 lg:py-56 bg-[url("/hero-bg.jpg")] bg-cover bg-fixed bg-no-repeat relative before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-black/60',
        className
      )}
    >
      <Element name="hero">
        <Container className="flex flex-col gap-7 text-center items-center relative z-[2] text-white">
          <Heading>{HeroTitle}</Heading>
          <p
            className="max-w-xl text-sm md:text-base text-white"
            dangerouslySetInnerHTML={{ __html: HeroDescription }}
          />
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
