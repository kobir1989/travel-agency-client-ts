import { configureStore } from '@reduxjs/toolkit';
import apiSlice from '@/redux/api/apiSlice';
import flightSlice from '@/redux/features/flight/flightSlice';
import hotelSlice from '@/redux/features/hotel/hotelSlice';
import tourSlice from '@/redux/features/tour/tourSlice';

// create store
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    searchFlight: flightSlice,
    searchHotel: hotelSlice,
    searchTour: tourSlice,
  },
  // Concatenate the default middleware with apiSlice middleware
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({ serializableCheck: false }).concat(
      apiSlice.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
