import { configureStore } from '@reduxjs/toolkit';
import apiSlice from '@/redux/api/apiSlice';

// create store
export const store = configureStore({
  reducer: {},
  // Concatenate the default middleware with apiSlice middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      serializableCheck: false,
    }).concat(apiSlice.middleware), // Adding the middleware from apiSlice
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
