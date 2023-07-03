import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    tagTypes: ['Heroes'],
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => '/users',
            providesTags: ['Users']
        }),
        createUsers: builder.mutation({
            query: hero => ({
                url: '/users',
                method: 'POST',
                body: hero
            }),
            invalidatesTags: ['Users']
        }),
        deleteUsers: builder.mutation({
            query: id => ({
                url: `/users/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Users']
        })
    })
})

export const { useGetUsersQuery, useCreateUsersMutation, useDeleteUserMutation } = apiSlice;