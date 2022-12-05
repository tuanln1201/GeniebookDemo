import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bankApi = createApi({
  reducerPath: "bankApi",
  tagTypes: [],
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_API_URL}` }),
  endpoints: (builder) => ({
    getBankInformation: builder.query({
      query: () => `/bank`,
    }),
    createDonate: builder.mutation({
      query: (data) => ({
        url: `/card`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetBankInformationQuery, useCreateDonateMutation } = bankApi;
