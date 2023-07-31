import { configureStore } from '@reduxjs/toolkit';
import apiSlice from '@/redux/api/apiSlice';
import searhFlightSlice from '@/redux/features/searchFlight/searhFlightSlice';

// create store
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    searchFlight: searhFlightSlice,
  },
  // Concatenate the default middleware with apiSlice middleware
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({ serializableCheck: false }).concat(
      apiSlice.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
