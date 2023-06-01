import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { codeLakeApi } from './apiSlice';
import cabinsReducer from './cabinSlice';
// import reservationsReducer from './redux/reservationsSlice';
import { reservationsApi } from './apiSlice';

export const store = configureStore({
    reducer: {
        cabins: cabinsReducer,
        [codeLakeApi.reducerPath]: codeLakeApi.reducer,
        // [reservationsApi.reducerPath]: codeLakeApi.reducer
        // reservations: reservationsReducer,
        // [codeLakeApi.reducerPath]: codeLakeApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(codeLakeApi.middleware)
            // .concat(reservationsApi.middleware),
})

setupListeners(store.dispatch)
  