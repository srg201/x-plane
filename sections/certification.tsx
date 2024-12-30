"use client";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Description, Title } from "@/data/about-us";
import { List } from "@/data/certification";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { Element } from "react-scroll";

interface Props {
  className?: string;
}

export const Certification: React.FC<Props> = ({ className }) => {
  return (
    <section className={cn("py-16", className)}>
      <Element name="certification">
        <Container className="flex flex-col gap-7">
          <Heading as="h2">{Title}</Heading>
          <p>{Description}</p>
          <div className="grid grid-cols-2 gap-7 mt-4 items-center">
            {List.map((item) => (
              <Image
                key={item.id}
                src={item.img}
                alt="Logo"
                width={1000}
                height={500}
                className="w-full h-auto object-contain"
              />
            ))}
          </div>
        </Container>
      </Element>
    </section>
  );
};
