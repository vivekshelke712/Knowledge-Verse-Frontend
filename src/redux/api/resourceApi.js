// resourceApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const resourceApi = createApi({
  reducerPath: "resourceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/resources",
  }),
  tagTypes: ["Resource"],
  endpoints: (builder) => ({
    getResources: builder.query({
      query: (userId) => {
        return {
          url: `/getUserResources/${userId}`,
          method: "GET",
        };
      },
      transformResponse: (data) => data.result,
      providesTags: ["Resource"],
    }),
    addResource: builder.mutation({
      query: ({ userId, resource }) => ({
        url: `/resources`,
        method: "POST",
        body: resource,
      }),
      invalidatesTags: ["Resource"],
    }),
    updateResource: builder.mutation({
      query: ({ userId, resourceId, updatedData }) => ({
        url: `/resources/${userId}/${resourceId}`,
        method: "PUT",
        body: updatedData,
      }),
      invalidatesTags: ["Resource"],
    }),
    deleteResource: builder.mutation({
      query: ({ userId, resourceId }) => ({
        url: `/resources/${userId}/${resourceId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Resource"],
    }),
  }),
});

export const {
  useGetResourcesQuery,
  useAddResourceMutation,
  useUpdateResourceMutation,
  useDeleteResourceMutation,
} = resourceApi;
