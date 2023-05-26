import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cabins: []
}

export const cabinSlice = createSlice({
    name: "slice",
    initialState,
    reducers: {
        addCabin: (state, action) => {
            const newCabin = action.payload
            state.cabins.push(newCabin)
        }
    },
})

export const { cabinAction } = cabinSlice.actions
export default cabinSlice.reducer
