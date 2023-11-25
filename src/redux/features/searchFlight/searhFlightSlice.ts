import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import dayjs, { Dayjs } from 'dayjs';
import { OptionsListPopup } from './types';

const initialState = {
  selectedDepartValue: {
    city: 'Dhaka, Bangladesh',
    airport: 'Shazalal int Airport',
  },
  selectedArrival: {
    city: 'Delhi, India',
    airport: 'Delhi Airport',
  },
  departDate: dayjs(new Date()),
  arrivalDate: dayjs(new Date()).add(1, 'week'),
  flightType: 'oneWay',

  openOptionsPopup: {
    isDepartOptionsOpen: false,
    isArrivalOptionsOpen: false,
    isArrivalDateOpen: false,
    isDepartDateOpen: false,
  },
};

const searchFlightSlice = createSlice({
  name: 'searchFlight',
  initialState,
  reducers: {
    setSelectedDepartValue: (state, action: PayloadAction<any>) => {
      state.selectedDepartValue = action.payload;
    },
    setSelectedArrivalValue: (state, action: PayloadAction<any>) => {
      state.selectedArrival = action.payload;
    },
    setDepartDate: (state, action: PayloadAction<Dayjs>) => {
      state.departDate = action.payload;
    },
    setArrivalDate: (state, action: PayloadAction<Dayjs>) => {
      state.arrivalDate = action.payload;
    },
    setOpenOptionsBox: (state, action: PayloadAction<OptionsListPopup>) => {
      state.openOptionsPopup = action.payload;
    },
    setFlightType: (state, action: PayloadAction<string>) => {
      state.flightType = action.payload;
    },
  },
});
export const {
  setSelectedDepartValue,
  setArrivalDate,
  setDepartDate,
  setOpenOptionsBox,
  setSelectedArrivalValue,
  setFlightType,
} = searchFlightSlice.actions;
export default searchFlightSlice.reducer;
