"use client";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Description, List, Title } from "@/data/about-us";
import { getAboutUsData } from "@/lib/actions";
import { cn, getStrapiMedia } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";
import { Element } from "react-scroll";

interface Props {
  className?: string;
  data?: any;
}

export const AboutUs: React.FC<Props> = ({ className, data }) => {
  console.log("about us data", data);
  return (
    <section className={cn("py-16", className)}>
      <Element name="about">
        <Container className="flex flex-col gap-7">
          <Heading as="h2">{data?.data?.title}</Heading>
          <ReactMarkdown className={"markdown"}>
            {data?.data?.subtitle}
          </ReactMarkdown>
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-7 items-center content-end justify-center content-center">
            {data?.data?.items?.map(({ id, image, name, role }: any) => (
              <li key={id} className="flex flex-col items-center gap-4 h-full">
                <div className="w-full h-36">
                  {image && (
                    <img
                      src={getStrapiMedia(image.url)}
                      alt={name}
                      width={300}
                      height={300}
                      className="rounded-lg w-full h-36 object-contain pointer-events-none"
                    />
                  )}
                </div>
                <p className="text-lg font-bold text-center">{name}</p>
                <p className="text-sm text-muted-foreground text-center leading-normal">
                  {role}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </Element>
    </section>
  );
};
