import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "booking",
  initialState: {
    checkIn: "",
    checkOut: "",
    rooms: 1,
  },
  reducers: {
    updateBooking(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateBooking } = formSlice.actions;
export default formSlice.reducer;
