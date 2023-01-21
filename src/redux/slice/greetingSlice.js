import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchGreetings = createAsyncThunk(
    "greeting/fetchGreetings",
    async () => {
        const response = await fetch("/api/greeting");
        const data = await response.json();
        return data;
    }
);

const greetingSlice = createSlice({
    name: "greeting",
    initialState: { message: "" },
    reducers: {},
    
    extraReducers: {
        [fetchGreetings.fulfilled]: (state, action) => {
            state.message = action.payload.message;
        }
    }
});

export const { fetchGreeting } = greetingSlice.actions;

export default greetingSlice.reducer;
