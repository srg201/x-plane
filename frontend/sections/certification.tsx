"use client";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Description, List, Title } from "@/data/certification";
import { cn, getStrapiMedia } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";
import { Element } from "react-scroll";

interface Props {
  className?: string;
  data?: any;
}

export const Certification: React.FC<Props> = ({ className, data }) => {
  console.log("certification data", data);
  return (
    <section className={cn("py-16", className)}>
      <Element name="certification">
        <Container className="flex flex-col gap-7">
          <Heading as="h2">{data?.data?.title}</Heading>
          <ReactMarkdown className={"markdown"}>
            {data?.data?.subtitle}
          </ReactMarkdown>
          <div className="grid grid-cols-2 gap-7 mt-4 items-center">
            {data?.data?.items?.map((item: any) => {
              if (item.link) {
                return (
                  <Link
                    href={item.link}
                    key={item.id}
                    target="_blank"
                    className=" border h-full flex items-center justify-center"
                  >
                    <img
                      src={getStrapiMedia(item.logo.url)}
                      alt="Logo"
                      width={1000}
                      height={500}
                      className="w-full h-auto object-contain"
                    />
                  </Link>
                );
              }

              return (
                <img
                  src={getStrapiMedia(item.logo.url)}
                  alt="Logo"
                  width={1000}
                  height={500}
                  className="w-full h-auto object-contain border flex items-center justify-center"
                  key={item.id}
                />
              );
            })}
          </div>
        </Container>
      </Element>
    </section>
  );
};
