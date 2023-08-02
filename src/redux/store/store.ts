import { configureStore } from '@reduxjs/toolkit';
import apiSlice from '@/redux/api/apiSlice';
import searhFlightSlice from '@/redux/features/searchFlight/searhFlightSlice';
import searchHotelSlice from '@/redux/features/searchHotel/searchHotelSlice';
import searchTourSlice from '@/redux/features/searchTour/searchTourSlice';

// create store
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    searchFlight: searhFlightSlice,
    searchHotel: searchHotelSlice,
    searchTour: searchTourSlice,
  },
  // Concatenate the default middleware with apiSlice middleware
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({ serializableCheck: false }).concat(
      apiSlice.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
