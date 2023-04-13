// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const jobApi = createApi({
    reducerPath: "jobApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:3004/api/" }),
    tagTypes: ["Job"],
    endpoints: (builder) => ({
        // all data show
        getJob: builder.query({
            query: () => ({
                url: "job",
                method: "GET"
            }),
            // transformResponse: (res) => res.reverse(),
            providesTags: ["Job"] //refresh page
        }),

        // only single data
        getSingleJob: builder.query({
            query: (id) => {
                // console.log("single -", id)
                return ({
                    url: `job/${id}`,
                    method: 'GET'
                })
            },
            invalidatesTags: ["Job"],
        }),

        // add data 
        addJob: builder.mutation({
            query: (body) => ({
                url: "job",
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body,
            }),
            invalidatesTags: ["Job"] // invalid tag page getall data show
        }),

        // update data
        updateJob: builder.mutation({
            query: (update) => {

                // console.log("update data -", update)
                return (
                    {
                        url: `job/${update._id}`,
                        method: "PUT",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: update,
                    }
                )
            },
            invalidatesTags: ["Job"]
        }),

        // delete data
        deleteJob: builder.mutation({
            query: (id) => ({
                url: `job/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Job"]
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetJobQuery, useAddJobMutation, useGetSingleJobQuery, useDeleteJobMutation, useUpdateJobMutation } = jobApi;
