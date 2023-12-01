import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SearchTour {
  tourLocation: string;
}

// Search Tour Initial State
const initialState: SearchTour = {
  tourLocation: 'France',
};

const tourSlice = createSlice({
  name: 'searchTour',
  initialState,
  reducers: {
    setSelectedLocation: (state, action: PayloadAction<string>) => {
      state.tourLocation = action.payload;
    },
  },
});
export const { setSelectedLocation } = tourSlice.actions;
export default tourSlice.reducer;
