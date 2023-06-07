import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: 0
}

export const cabinIDSlice = createSlice({
    name: "cabinID",
    initialState,
    reducers: {
        assignCabin: (state, action) => {
        const currentCabin = action.payload;
        state.id = currentCabin;
        },
    },
    providesTags: ["cabinID"],
    });

export const { assignCabin } = cabinIDSlice.actions
export default cabinIDSlice.reducer
