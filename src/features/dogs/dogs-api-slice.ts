import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const DOGS_API_KEY =
  "live_CscK5bR8qTKySI2N6tSXVcZ042NmxIqBzVueFTiL5D4cRYgEa5NAcCKGyNkSfrCA";

interface Breed {
  id: string;
  name: string;
  image: {
    url: string;
  };
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.thedogapi.com/v1",
    prepareHeaders(headers) {
      headers.set("x-api-key", DOGS_API_KEY);
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchBreeds: builder.query<Breed[], number | void>({
        query(limit = 10) {
          return `/breeds?limit=${limit}`;
        },
      }),
    };
  },
});

export const { useFetchBreedsQuery } = apiSlice;
