// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const sliderApi = createApi({
    reducerPath: "sliderApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:3004/api/" }),
    tagTypes: ["Slider"],
    endpoints: (builder) => ({
        // all data show
        getSlider: builder.query({
            query: () => ({
                url: "slider",
                method: "GET"
            }),
            // transformResponse: (res) => res.reverse(),
            providesTags: ["Slider"] //refresh page
        }),

        // add data 
        addSlider: builder.mutation({
            query: (slide) => ({
                url: "slider",
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: slide,
            }),
            invalidatesTags: ["Slider"] // invalid tag page getall data show
        }),

        // only single data
        getSingleSlider: builder.query({
            query: (id) => {
                console.log("single id-", id)
                return ({
                    url: `slider/${id}`,
                    method: 'GET'
                })
            },
            invalidatesTags: ["Slider"],
        }),

        // update data
        updateSlider: builder.mutation({
            query: ({ id, ...updt }) => {

                console.log("update data -", updt)
                console.log("update id -", id)
                return (
                    {
                        url: `slider/${id}`,
                        method: "PUT",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: updt,
                    }
                )
            },
            invalidatesTags: ["Slider"]
        }),

        // delete data
        deleteSlider: builder.mutation({
            query: (id) => ({
                url: `slider/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Slider"]
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetSliderQuery, useAddSliderMutation, useGetSingleSliderQuery, useDeleteSliderMutation, useUpdateSliderMutation } = sliderApi;
