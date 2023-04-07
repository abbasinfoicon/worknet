// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const cmsPage = createApi({
    reducerPath: "cmsPage",
    baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:3004/api/" }),
    endpoints: (builder) => ({
        addPage: builder.mutation({
            query: (page) => ({
                url: "page",
                method: "POST",
                body: page,
                headers: {
                    'Content-Type': 'application/json'
                }
            }),
        }),

        getPage: builder.query({
            query: () => ({
                url: "page",
                method: "GET"
            }),
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPageQuery, useAddPageMutation } = cmsPage;
