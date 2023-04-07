// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const sliderApi = createApi({
    reducerPath: "sliderApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:3004/api/" }),
    endpoints: (builder) => ({
        addSlider: builder.mutation({
            query: (slide) => ({
                url: "slider",
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: slide,
            }),
        }),

        getSlider: builder.query({
            query: () => ({
                url: "slider",
                method: "GET"
            }),
        }),

        getSingleSlider: builder.query({
            query: (id) => ({
                url: `slider/${id}`,
                method: 'GET'
            }),
        }),

        deleteSlider: builder.mutation({
            query: (id) => ({
              url: `slider/${id}`,
              method: "DELETE",
            })
          }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetSliderQuery, useAddSliderMutation, useGetSingleSliderQuery, useDeleteSliderMutation } = sliderApi;
