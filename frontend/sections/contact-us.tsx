"use client";
import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { cn } from "@/lib/utils";
import React from "react";
import { Element } from "react-scroll";

interface Props {
  className?: string;
}

export const ContactUs: React.FC<Props> = ({ className }) => {
  return (
    <section className={cn("py-16", className)}>
      <Element name="contact">
        <Container className="flex flex-col gap-7">
          <Heading as="h2">Contact Us</Heading>
          <p>Fill out the form and get answers quickly</p>
          <ContactForm />
        </Container>
      </Element>
    </section>
  );
};
