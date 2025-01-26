import React from "react";
import { Container } from "@/components/container";
import { getHelicopterData } from "@/lib/actions";
import { getStrapiMedia } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import { Heading } from "@/components/heading";
import BackButton from "./_components/back-button";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const heliData = await getHelicopterData(Number(id));
  console.log("heliData", heliData);

  return (
    <Container className="py-6">
      <BackButton />
      <div className="flex flex-col gap-8">
        <Heading as="h1">{heliData.name}</Heading>
        <div className="relative w-full aspect-video h-full">
          <img
            src={getStrapiMedia(heliData.image.url)}
            alt={heliData.title}
            className="object-cover h-full w-full rounded-lg"
          />
        </div>
        <ReactMarkdown className="text-lg markdown flex flex-col gap-4">
          {heliData.description}
        </ReactMarkdown>
        {heliData.chart && (
          <div className="relative w-full aspect-video">
            <img
              src={getStrapiMedia(heliData.chart.url)}
              alt={heliData.title}
              className="object-contain bg-white p-4 rounded-lg"
            />
          </div>
        )}
      </div>
    </Container>
  );
}
