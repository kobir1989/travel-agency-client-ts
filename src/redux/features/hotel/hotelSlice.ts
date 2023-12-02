import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { format } from 'date-fns';
import { HotelSearch } from '@/types/redux-state-type';

// Initial Hotel search State
const initialState: HotelSearch = {
  selectedlocation: 'France',
  checkInDate: format(new Date(), 'iiii MMM dd yyyy'),
  checkOutDate: format(new Date(), 'iiii MMM dd yyyy'),
  isCheckInCalanderOpen: false,
  isCheckOutCalanderOpen: false,
};

// Search Hotel Slice
const hotelSlice = createSlice({
  name: 'searchHotel',
  initialState,
  reducers: {
    setSelectedlocation: (state, action: PayloadAction<string>) => {
      state.selectedlocation = action.payload;
    },
    setCheckIn: (state, action: PayloadAction<string>) => {
      state.checkInDate = action.payload;
    },
    setCheckOut: (state, action: PayloadAction<string>) => {
      state.checkOutDate = action.payload;
    },

    setOpenCheckOutCalander: (state, action: PayloadAction<boolean>) => {
      state.isCheckOutCalanderOpen = action.payload;
    },
    setOpenCheckInCalander: (state, action: PayloadAction<boolean>) => {
      state.isCheckInCalanderOpen = action.payload;
    },
  },
});
export const {
  setCheckIn,
  setCheckOut,
  setSelectedlocation,
  setOpenCheckInCalander,
  setOpenCheckOutCalander,
} = hotelSlice.actions;
export default hotelSlice.reducer;
