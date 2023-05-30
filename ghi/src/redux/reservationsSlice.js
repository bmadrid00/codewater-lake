import {createSlice } from '@reduxjs/toolkit';


const initialState = {
    reservations: [{
        cabin: "cabin_id",
        id: 1,
        start_date: "2023-05-20",
        end_date: "2023-05-30"
    }]
};


export const reservationsSlice = createSlice({
    name: "reservation",
    initialState,
    reducers: {
        bookReservation: (state, action) => {
            state.reservations.push(action.payload)
        }
    },
});

export const { bookReservation } = reservationsSlice.actions;
export default reservationsSlice.reducer;
