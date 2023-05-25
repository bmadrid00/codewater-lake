// import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const createReservation = createAsyncThunk(
//     'reservations/createReservation',
//     async (reservation, thunkAPI) => {
//         try {
//             const response = await axios.post('/api/reservations', reservation);
//             return response.data;

//         } catch (error) {
//             return thunkAPI.rejectWithValue({ error: error.message });
//         }
//     }
// )


// export const reservationSlice = createSlice({
//     name: "reservations",
//     initialState: [],
//     reducers: {
//         builder.addReservation: (state, action) => {
//             const newReservation = action.payload
//             state.reservations.push(newReservation)
//         }
//     },
//     extraReducers: (builder) => {
//     builder.addCase(createReservation.fulfilled, (state, action) => {
//         state.push(action.payload);
//     });
//     },
// });

// export const { addReservation } = reservationSlice.actions
// export default reservationSlice.reducer
