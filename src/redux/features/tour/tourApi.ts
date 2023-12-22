import apiSlice from '@/redux/api/apiSlice';
import { TourResponse } from '@/types/api-data-type';

export const tourApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTourList: builder.query<TourResponse, void>({
      query: () => '/tours',
    }),
  }),
});

export const { useGetTourListQuery } = tourApi;
