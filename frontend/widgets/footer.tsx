import { Container } from "@/components/container";
import { LogoPath } from "@/data/logo";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer className={cn("py-8", className)}>
      <Container className="flex justify-between items-center flex-wrap gap-7">
        <Image
          src={LogoPath}
          alt="Logo"
          width={100}
          height={70}
          className="object-contain"
        />
        <small>
          © {new Date().getFullYear()} XPlane Labs. All rights reserved.
        </small>
      </Container>
    </footer>
  );
};
