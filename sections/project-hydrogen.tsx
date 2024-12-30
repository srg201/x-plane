'use client';
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { HelicopterCard } from "@/components/helicopter-card";
import { Description, List, Title } from "@/data/project-hydrogen";
import { cn } from "@/lib/utils";
import React from "react";
import { Element } from "react-scroll";

interface Props {
  className?: string;
}

export const ProjectHydrogen: React.FC<Props> = ({ className }) => {
  return (
    <section className={cn("py-16", className)}>
      <Element name="hydrogen">
        <Container className="flex flex-col gap-7">
          <Heading as="h2">{Title}</Heading>
          <p dangerouslySetInnerHTML={{ __html: Description }}/>
          <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xs:gap-2 sm:gap-4 lg:gap-7">
            {List.map(item => <HelicopterCard key={item.id} {...item} />)}
          </div>
        </Container>
      </Element>
    </section>
  );
};
