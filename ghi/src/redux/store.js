import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { codeLakeApi } from "./apiSlice";
import cabinIDReducer from "./cabinIDSlice";

export const store = configureStore({
    reducer: {
        [codeLakeApi.reducerPath]: codeLakeApi.reducer,
        cabinID: cabinIDReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(codeLakeApi.middleware),
});

setupListeners(store.dispatch);
