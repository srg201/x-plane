import axios from "axios";

const StrapiApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_URL,
  fetchOptions: {
    cache: "no-store",
  },
  // params: {
  //   cache: "no-store",
  // },
});

export default StrapiApi;
