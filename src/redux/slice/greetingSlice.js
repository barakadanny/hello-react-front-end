import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchGreetings = createAsyncThunk(
  'greeting/fetchGreetings',
  async () => {
    const response = await fetch('http://127.0.0.1:3000/api/v1/greetings/random');
    const data = await response.json();
    return data;
  },
);

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: { message: '' },
  reducers: {},

  extraReducers: {
    [fetchGreetings.fulfilled]: (state, action) => {
      state.message = action.payload.message; // eslint-disable-line no-param-reassign
    },
  },
});

export const { fetchGreeting } = greetingSlice.actions;

export default greetingSlice.reducer;
