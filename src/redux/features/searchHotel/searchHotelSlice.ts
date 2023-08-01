import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import dayjs, { Dayjs } from 'dayjs';
import { OpenOptionsPopup } from './types';

const initialState = {
  selectedlocation: {
    title: 'Gulmarg',
    subtitle: 'Kashmir',
  },
  checkIn: dayjs(new Date()),
  checkOut: dayjs(new Date()).add(1, 'week'),
  roomCount: 1,
  guests: 2,
  openOptionsPopup: {
    isLocationOptionsOpen: false,
    isCheckInCalanderOpen: false,
    isCheckOutCalanderOpen: false,
    isRoomOptionsOpen: false,
  },
};

const searchHotelSlice = createSlice({
  name: 'searchHotel',
  initialState,
  reducers: {
    setSelectedlocation: (state, action: PayloadAction<any>) => {
      state.selectedlocation = action.payload;
    },
    setCheckIn: (state, action: PayloadAction<Dayjs>) => {
      state.checkIn = action.payload;
    },
    setCheckOut: (state, action: PayloadAction<Dayjs>) => {
      state.checkOut = action.payload;
    },
    setOpenOptionsPopup: (state, action: PayloadAction<OpenOptionsPopup>) => {
      state.openOptionsPopup = action.payload;
    },
    closeOptionPopups: (state) => {
      state.openOptionsPopup = {
        isLocationOptionsOpen: false,
        isCheckInCalanderOpen: false,
        isCheckOutCalanderOpen: false,
        isRoomOptionsOpen: false,
      };
    },
    setAddRoom: (state) => {
      if (state.roomCount >= 5) {
        return;
      }
      state.roomCount += 1;
    },
    setSubtractRoom: (state) => {
      if (state.roomCount <= 1) {
        return;
      }
      state.roomCount -= 1;
    },
    setAddGuests: (state) => {
      state.guests = state.roomCount * 2;
    },
    setSubtractGuests: (state) => {
      if (state.guests <= 1) {
        return;
      }
      state.guests -= 1;
    },
  },
});
export const {
  setCheckIn,
  setCheckOut,
  setSelectedlocation,
  setOpenOptionsPopup,
  closeOptionPopups,
  setAddRoom,
  setSubtractRoom,
  setAddGuests,
  setSubtractGuests,
} = searchHotelSlice.actions;
export default searchHotelSlice.reducer;
