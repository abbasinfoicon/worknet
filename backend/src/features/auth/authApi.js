// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:3004/api/" }),
    endpoints: (builder) => ({
        addUser: builder.mutation({
            query: (user) => ({
                url: "register",
                method: "POST",
                body: user,
                file:user.img,
                headers: {
                    'Content-Type': 'application/json'
                }
            }),
        }),

        getUser: builder.query({
            query: () => ({
                url: "register",
                method: "GET"
            }),
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useAddUserMutation, useGetUserQuery } = authApi;
