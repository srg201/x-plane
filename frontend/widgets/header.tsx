"use client";
import { Container } from "@/components/container";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { menu } from "@/data/menu";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

interface Props {
  className?: string;
}

const MobileMenu = () => {
  const [open, setOpen] = useState(false) 
  return (
    <div className="flex gap-2 items-center lg:hidden">
      <ThemeToggle />

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <Menu className="stroke-primary" size={30} />
        </SheetTrigger>
        <SheetContent className="w-full">
          <SheetHeader className="space-y-7">
            <SheetTitle></SheetTitle>
            <nav>
              <ul className="flex flex-col gap-4 items-start">
                {menu.map(({ id, title, path }) => (
                  <li key={id} >
                    <ScrollLink
                      className="text-xl hover:text-primary transition-colors duration-500 cursor-pointer"
                      to={path}
                      smooth
                      spy
                      offset={-100}
                      onClick={() => setOpen(false)}
                    >
                      {title}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <Button asChild>
                <ScrollLink spy smooth to="contact" className="cursor-pointer">
                  Contact Us
                </ScrollLink>
              </Button>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

const DesktopMenu = () => {
  return (
    <>
      <nav className="hidden lg:block">
        <ul className="flex gap-4 items-center">
          {menu.map(({ id, title, path }) => (
            <li key={id}>
              <ScrollLink
                className="text-sm hover:text-primary transition-colors duration-500 cursor-pointer"
                to={path}
                smooth
                spy
                offset={-100}
              >
                {title}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="items-center gap-4 hidden lg:flex">
        <Button asChild>
          <ScrollLink spy smooth to="contact" className="cursor-pointer">
            Contact Us
          </ScrollLink>
        </Button>
        <ThemeToggle />
      </div>
    </>
  );
};

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header
      className={cn(
        "py-4 border-b sticky top-0 z-50 left-0 bg-background",
        className
      )}
    >
      <Container className="flex items-center justify-between relative">
        <ScrollLink
          spy
          smooth
          offset={-300}
          to="hero"
          className="cursor-pointer text-2xl tracking-tighter text-pretty text-primary"
        >
          XPLANE LABS
        </ScrollLink>
        <DesktopMenu />
        <MobileMenu />
      </Container>
    </header>
  );
};
