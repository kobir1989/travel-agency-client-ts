import apiSlice from '@/redux/api/apiSlice';
import { HotelsResponse } from '@/types/api-data-type';

export const hotelApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getHotelsList: builder.query<HotelsResponse, void>({
      query: () => '/hotels-list',
    }),
  }),
});

export const { useGetHotelsListQuery } = hotelApi;
