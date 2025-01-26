"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
  const router = useRouter();
  return (
    <Button variant={"outline"} className="mb-4" onClick={() => router.back()}>
      <ArrowLeft className="w-4 h-4" />
      Back
    </Button>
  );
};

export default BackButton;
