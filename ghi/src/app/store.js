import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { codeLakeApi } from './apiSlice';
import cabinsReducer from './cabinSlice';
import reservationReducer from './reservationSlice';

export const store = configureStore({
    reducer: {
        cabins: cabinsReducer,
        [codeLakeApi.reducerPath]: codeLakeApi.reducer,
        reservations: reservationReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(codeLakeApi.middleware)
})

setupListeners(store.dispatch)
