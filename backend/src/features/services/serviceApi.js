// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const serviceApi = createApi({
    reducerPath: "serviceApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:3004/api/" }),
    tagTypes: ["Service"],
    endpoints: (builder) => ({
        // all data show
        getData: builder.query({
            query: () => ({
                url: "service",
                method: "GET"
            }),
            // transformResponse: (res) => res.reverse(),
            providesTags: ["Service"] //refresh page
        }),

        // only single data
        getSingleData: builder.query({
            query: (id) => {
                // console.log("single -", id)
                return ({
                    url: `service/${id}`,
                    method: 'GET'
                })
            },
            invalidatesTags: ["Service"],
        }),

        // add data 
        addData: builder.mutation({
            query: (body) => ({
                url: "service",
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body,
            }),
            invalidatesTags: ["Service"] // invalid tag page getall data show
        }),

        // update data
        updateData: builder.mutation({
            query: (update) => {

                // console.log("Frendend update data -", update)
                return (
                    {
                        url: `service/${update._id}`,
                        method: "PUT",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: update,
                    }
                )
            },
            invalidatesTags: ["Service"]
        }),

        // delete data
        deleteData: builder.mutation({
            query: (id) => ({
                url: `service/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Service"]
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetDataQuery, useAddDataMutation, useGetSingleDataQuery, useDeleteDataMutation, useUpdateDataMutation } = serviceApi;
