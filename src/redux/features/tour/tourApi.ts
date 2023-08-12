import apiSlice from '@/redux/api/apiSlice';
import { TourResponse } from '@/redux/features/tour/types';

export const tourApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTourList: builder.query<TourResponse, void>({
      query: () => '/tours',
    }),
  }),
});

export const { useGetTourListQuery } = tourApi;
