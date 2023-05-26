import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { codeLakeApi } from './apiSlice';
import cabinsReducer from './cabinSlice';

export const store = configureStore({
    reducer: {
        cabins: cabinsReducer,
        [codeLakeApi.reducerPath]: codeLakeApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(codeLakeApi.middleware)
})

setupListeners(store.dispatch)
  