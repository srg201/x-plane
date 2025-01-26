"use client";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { HelicopterCard } from "@/components/helicopter-card";
import { Description, List, Title } from "@/data/project-hydrogen";
import { cn } from "@/lib/utils";
import React from "react";
import { Element } from "react-scroll";

interface Props {
  className?: string;
  data: any;
}

export const ProjectHydrogen: React.FC<Props> = ({ className, data }) => {
  console.log(data);
  return (
    <section className={cn("py-16", className)}>
      <Element name="hydrogen">
        <Container className="flex flex-col gap-7">
          <Heading as="h2">{data.data.title}</Heading>
          <p dangerouslySetInnerHTML={{ __html: data.data.description }} />
          <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xs:gap-2 sm:gap-4 lg:gap-7">
            {data.data.items.map((item: any) => (
              <HelicopterCard key={item.id} {...item} />
            ))}
          </div>
        </Container>
      </Element>
    </section>
  );
};
