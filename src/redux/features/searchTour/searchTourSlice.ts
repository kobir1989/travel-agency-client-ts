import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  selectedTour: {
    city: 'Gulmarg',
    country: 'Kashmir',
  },
  isLocationsOptionsOpen: false,
};

const searchTourSlice = createSlice({
  initialState,
  name: 'searchTour',
  reducers: {
    setLocation: (state, action: PayloadAction<any>) => {
      state.selectedTour = action.payload;
    },
    setOpenLocationOptions: (state) => {
      state.isLocationsOptionsOpen = true;
    },
    setCloseLocationOptions: (state) => {
      state.isLocationsOptionsOpen = false;
    },
  },
});
export const { setLocation, setCloseLocationOptions, setOpenLocationOptions } =
  searchTourSlice.actions;
export default searchTourSlice.reducer;
