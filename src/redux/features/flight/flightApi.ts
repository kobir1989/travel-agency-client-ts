import apiSlice from '@/redux/api/apiSlice';
import { FlightsResponse } from '@/types/api-data-type';

export const flightApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFlights: builder.query<FlightsResponse, void>({
      query: () => 'flights',
    }),
  }),
});

export const { useGetFlightsQuery } = flightApi;
