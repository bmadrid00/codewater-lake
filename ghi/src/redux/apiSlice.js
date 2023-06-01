import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const codeLakeApi = createApi({
    reducerPath: 'cabinApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_HOST
    }),
    endpoints: (builder) => ({
        getCabins: builder.query({
            query: () => '/api/cabins/'
        }),
        getCabinById: builder.query({
            query: (cabin_id) => `/api/cabins/${cabin_id}`
        }),
// # ########################---Reservations---#######################
        getReservations: builder.query({
            query: () => ({
                url: `/api/reservations/`,
                credentials: 'incude'
            }),
            providesTags: ['ReservationsList']
        }),
        getUserReservations: builder.query({
            query: () => ({
                url: `/api/reservations/mine`,
                credentials: 'include'
            }),
            providesTags: ['UserReservations']
        }),
        createReservation: builder.mutation({
            query:(body) => ({
                url: `/api/reservations/`,
                method: 'POST',
                body,
                credentials: 'include'
            }),
            invalidatesTags: ['ReservationsList', 'UserReservations']
        }),
// #########################--Users--###################################
        getAccount: builder.query({
            query: () => ({
                url: '/token',
                credentials: 'include',
            }),
            transformResponse: (response) => response?.account || null,
            providesTags: ['Account']
        }),
        editAccount: builder.mutation({
            query: (body) => {
                return {
                    url: `/api/users`,
                    method: 'PUT',
                    body,
                    credentials: 'include'
                }
            },
            invalidatesTags: ['Account']
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
        }),
        signup: builder.mutation({
            query: (body) => {
                return {
                    url: '/api/users',
                    method: 'POST',
                    body,
                    credentials: 'include'
                }
            },
        }),
    }),
});

export const {
    useGetCabinsQuery,
    useGetCabinByIdQuery,
    useGetReservationsQuery,
    useGetUserReservationsQuery,
    useCreateReservationMutation,
    useGetAccountQuery,
    useLogoutMutation,
    useLoginMutation,
    useEditAccountMutation,
    useSignupMutation
} = codeLakeApi
