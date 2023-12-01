import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { format } from 'date-fns';
import { InitialStateType, OpenArrival, OpenDepart } from './types';

// Initial State
const initialState: InitialStateType = {
  selectedDepartValue: 'Charles de Gaulle Airport',
  selectedArrival: 'Copenhagen Airport',
  departDate: format(new Date(), 'iiii MMM dd yyyy'),
  arrivalDate: format(new Date(), 'iiii MMM dd yyyy'),
  flightType: 'oneWay',
  isArrivalDateOpen: false,
  isDepartDateOpen: false,
};

// Search Flight Slice
const searchFlightSlice = createSlice({
  name: 'searchFlight',
  initialState,
  reducers: {
    setSelectedDepartValue: (state, action: PayloadAction<string>) => {
      state.selectedDepartValue = action.payload;
    },
    setSelectedArrivalValue: (state, action: PayloadAction<string>) => {
      state.selectedArrival = action.payload;
    },
    setDepartDate: (state, action: PayloadAction<string>) => {
      state.departDate = action.payload;
    },
    setArrivalDate: (state, action: PayloadAction<string>) => {
      state.arrivalDate = action.payload;
    },
    setOpenDepartDate: (state, action: PayloadAction<OpenDepart>) => {
      state.isDepartDateOpen = action.payload;
    },
    setOpenArrivalDate: (state, action: PayloadAction<OpenArrival>) => {
      state.isArrivalDateOpen = action.payload;
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
  setOpenArrivalDate,
  setOpenDepartDate,
  setSelectedArrivalValue,
  setFlightType,
} = searchFlightSlice.actions;
export default searchFlightSlice.reducer;
