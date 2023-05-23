import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const codeLakeApi = createApi({
    reducerPath: 'cabinApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_HOST
    }),
    endpoints: (builder) => ({
        getCabins: builder.query({
            query: () => '/api/cabins'
        }),
        getReservationsByUser: builder.query({
            query: (user_id) => `/api/users/${user_id}/reservations/`,
            providesTags: ['User']
        }),
        getAccount: builder.query({
            query: () => ({
                url: '/token',
                credentials: 'include',
            }),
            transformResponse: (response) => response?.account || null,
            providesTags: ['Account']
        }),
        logout: builder.mutation({
            query: () => ({
                url: '/token',
                method: 'DELETE',
                credentials: 'include'
            }),
            invalidatesTags: ['Account']
        }),
        login: builder.mutation({
            query: ({username, password}) => {
                const body = new FormData()
                body.append('username', username)
                body.append('password', password)
                return {
                    url: '/token',
                    method: 'POST',
                    body,
                    credentials: 'include'
                }
            },
            invalidatesTags: ['Account']
        })
    })
})

export const {
    useGetCabinsQuery,
    useGetReservationsByUserQuery,
    useGetAccountQuery,
    useLogoutMutation,
    useLoginMutation,
} = codeLakeApi
