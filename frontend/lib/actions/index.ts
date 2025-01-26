"use server";
import StrapiApi from "@/api";
import { unstable_noStore } from "next/cache";

export const getMainSectionData = async () => {
  // unstable_noStore();
  try {
    const { data } = await StrapiApi.get("/api/main-section", {
      params: {
        populate: "*",
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getProjectHydrogenData = async () => {
  // unstable_noStore();
  const { data } = await StrapiApi.get("/api/project-hydrogen", {
    params: {
      populate: ["items", "items.image", "items.chart"],
    },
  });
  return data;
};

export const getHelicopterData = async (id: number) => {
  // unstable_noStore();
  try {
    const { data } = await StrapiApi.get("/api/project-hydrogen", {
      params: {
        populate: ["items", "items.image", "items.chart"],
      },
    });
    return data?.data?.items?.filter((item: any) => item.id === id)[0];
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch helicopter data");
  }
};

export const getAircraftDesignAndCertificationData = async () => {
  // unstable_noStore();
  const { data } = await StrapiApi.get(
    "/api/aircraft-design-and-certification",
    {
      params: {
        populate: ["items", "items.logo"],
      },
    }
  );
  return data;
};

export const getAboutUsData = async () => {
  // unstable_noStore();
  const { data } = await StrapiApi.get("/api/about-us", {
    params: {
      populate: ["items", "items.image"],
    },
  });
  return data;
};
