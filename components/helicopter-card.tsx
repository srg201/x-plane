import Image from "next/image";
import React from "react";
import { Heading } from "./heading";
import { Card, CardFooter, CardHeader } from "./ui/card";

interface Props {
  className?: string;
  img: string;
  title: string;
}

export const HelicopterCard: React.FC<Props> = ({ className, img, title }) => {
  return (
    <Card className={className}>
      <CardHeader>
        <Image
          src={img}
          alt={title}
          width={1000}
          height={500}
          className="w-full h-auto object-contain rounded-lg"
        />
      </CardHeader>
      <CardFooter className="flex justify-between">
        <Heading as="h5">{title}</Heading>
        {/* <Button>Read</Button> */}
      </CardFooter>
    </Card>
  );
};
