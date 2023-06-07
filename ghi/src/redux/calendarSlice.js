import { createSlice } from '@reduxjs/toolkit';

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        dateRange: null,
    },
    reducers: {
        setDateRange: (state, action) => {
            state.dateRange = action.payload;
        },
        
    },
});

export const { setDateRange } = calendarSlice.actions;
export default calendarSlice.reducer;
