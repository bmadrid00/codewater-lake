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
                url: `/api/reservations/`
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
        editReservation: builder.mutation({
            query:({ reservationId, ...body }) => ({
                url: `/api/reservations/${reservationId}`,
                method: 'PUT',
                body,
                credentials: 'include'
            }),
            invalidatesTags: ['ReservationsList', 'UserReservations']
        }),
        deleteReservation: builder.mutation({
            query: (reservation_id) => ({
                url: `/api/reservations/${reservation_id}`,
                method: 'DELETE',
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
            invalidatesTags: ['Account']
        }),
        deleteAccount: builder.mutation({
            query: () => ({
                url: `/api/users`,
                method: 'DELETE',
                credentials: 'include'
            }),
            invalidatesTags: ['Account']
        }),
        // ################################# Reviews ####################################
        createReview: builder.mutation({
            query: (body) => ({
                url: `/api/reviews`,
                method: 'POST',
                body,
                credentials: 'include'
            })
        }),
        getReviews: builder.query({
            query: () => ({
                url: `/api/reviews/`
            }),
        }),
        getReviewsByCabin: builder.query({
            query: (cabin_id) => `/api/cabins/${cabin_id}/reviews`
        })
    }),
});

export const {
    useGetCabinsQuery,
    useGetCabinByIdQuery,
    useGetReservationsQuery,
    useGetUserReservationsQuery,
    useCreateReservationMutation,
    useEditReservationMutation,
    useDeleteReservationMutation,
    useGetAccountQuery,
    useLogoutMutation,
    useLoginMutation,
    useEditAccountMutation,
    useSignupMutation,
    useDeleteAccountMutation,
    useCreateReviewMutation,
    useGetReviewsQuery,
    useGetReviewsByCabinQuery
} = codeLakeApi
