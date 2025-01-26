import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Heading } from "./heading";
import { Card, CardFooter, CardHeader } from "./ui/card";
import { getStrapiMedia } from "@/lib/utils";

interface Props {
  className?: string;
  image: any;
  name: string;
  id: number;
}

export const HelicopterCard: React.FC<Props> = ({
  className,
  image,
  name,
  id,
}) => {
  return (
    <Link href={`/${id}`}>
      <Card className={className}>
        <CardHeader>
          <img
            src={getStrapiMedia(image.url)}
            alt={name}
            width={1000}
            height={500}
            className="w-full h-56 object-cover rounded-lg"
          />
        </CardHeader>
        <CardFooter className="flex justify-between">
          <Heading as="h5">{name}</Heading>
          {/* <Button>Read More</Button> */}
        </CardFooter>
      </Card>
    </Link>
  );
};
