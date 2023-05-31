import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const codeLakeApi = createApi({
    reducerPath: 'cabinApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_HOST
    }),
    // tagTypes:['blahblahlist?']
    endpoints: (builder) => ({
        getCabins: builder.query({
            query: () => `/api/cabins`
        }),
        getCabinById: builder.query({
            query: (cabin_id) => `/api/cabins/${cabin_id}`
        }),
        getReservationsByUser: builder.query({
            query: (user_id) => `/api/reservations/mine`,
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
// # ########################---Reservations---#######################
        getReservations: builder.query({
            query: () => `/api/reservations/`,
            providesTags: ['ReservationsList']
        }),
        bookReservation: builder.mutation({
            query:(reservation) => ({
                url: `/api/users/reservations/`,
                method: 'POST',
                credentials: 'include'
            }),
            invalidatesTags: ['ReservationsList']
        }),
        getReservationsByCabin: builder.query({
            query: (cabin_id => `/api/reservations/`)
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
    useGetCabinByIdQuery,
    useGetReservationsByUserQuery,
    useGetReservationsQuery,
    useBookReservationMutation,
    useGetReservationsByCabinQuery,
    useGetAccountQuery,
    useLogoutMutation,
    useLoginMutation,
} = codeLakeApi
