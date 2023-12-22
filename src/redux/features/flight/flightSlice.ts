import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { format } from 'date-fns';
import {
  InitialStateType,
  OpenArrival,
  OpenDepart,
} from '@/types/redux-state-type';

// Initial State
const initialState: InitialStateType = {
  selectedDepartValue: 'Charles de Gaulle Airport',
  selectedArrival: 'Copenhagen Airport',
  departDate: format(new Date(), 'iiii MMM dd yyyy'),
  arrivalDate: format(new Date(), 'iiii MMM dd yyyy'),
  flightType: 'oneWay',
  isArrivalDateOpen: false,
  isDepartDateOpen: false,
  flightCategory: 'cheapest',
  stops: 0,
};

// Search Flight Slice
const searchFlightSlice = createSlice({
  name: 'searchFlight',
  initialState,
  reducers: {
    // get Selected departure value
    setSelectedDepartValue: (state, action: PayloadAction<string>) => {
      state.selectedDepartValue = action.payload;
    },
    // get Selected Arrival value
    setSelectedArrivalValue: (state, action: PayloadAction<string>) => {
      state.selectedArrival = action.payload;
    },
    // get Selected departure Date.
    setDepartDate: (state, action: PayloadAction<string>) => {
      state.departDate = action.payload;
    },
    // get Selected arrival Date.
    setArrivalDate: (state, action: PayloadAction<string>) => {
      state.arrivalDate = action.payload;
    },
    // departure Date dropdown.
    setOpenDepartDate: (state, action: PayloadAction<OpenDepart>) => {
      state.isDepartDateOpen = action.payload;
    },
    // arrival Date dropdown.
    setOpenArrivalDate: (state, action: PayloadAction<OpenArrival>) => {
      state.isArrivalDateOpen = action.payload;
    },
    // get Selected flight type.
    setFlightType: (state, action: PayloadAction<string>) => {
      state.flightType = action.payload;
    },
    // filter flight ctegory
    setFlightCategory: (state, action: PayloadAction<string>) => {
      state.flightCategory = action.payload;
    },
    // filter flight stops
    setFlightStops: (state, action: PayloadAction<number>) => {
      state.stops = action.payload;
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
  setFlightCategory,
  setFlightStops,
} = searchFlightSlice.actions;
export default searchFlightSlice.reducer;
