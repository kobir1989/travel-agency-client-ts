import apiSlice from '@/redux/api/apiSlice';
import { FlightsResponse } from '@/redux/features/flight/types';

export const flightApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFlights: builder.query<FlightsResponse, void>({
      query: () => 'flights',
    }),
  }),
});

export const { useGetFlightsQuery } = flightApi;
