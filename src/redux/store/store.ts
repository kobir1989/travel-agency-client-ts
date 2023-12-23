import { configureStore } from '@reduxjs/toolkit';
import apiSlice from '@/redux/api/apiSlice';
import flightSearch from '@/redux/features/search/flightSearchSlice';
import hotelSearch from '@/redux/features/search/hotelSearchSlice';
import tourSearch from '@/redux/features/search/tourSearchSlice';
import hotelSlice from '@/redux/features/hotel/hotelSlice';

// create store
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    searchFlight: flightSearch,
    searchHotel: hotelSearch,
    searchTour: tourSearch,
    hotelSlice,
  },
  // Concatenate the default middleware with apiSlice middleware
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({ serializableCheck: false }).concat(
      apiSlice.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
