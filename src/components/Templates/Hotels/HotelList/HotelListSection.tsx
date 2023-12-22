'use client';

import { HotelsCard } from '@/components/Molicules/Cards';
import { Stack } from '@mui/material';
import { useGetHotelsListQuery } from '@/redux/features/hotel/hotelApi';
import PaginationButtons from '@/components/Molicules/PaginationButtons';

const HotelListSection = () => {
  const { data: hotels, isLoading, isError } = useGetHotelsListQuery();
  return (
    <Stack gap={3}>
      {!isError &&
        !isLoading &&
        hotels?.hotels.map((hotel) => (
          <HotelsCard
            // eslint-disable-next-line no-underscore-dangle
            key={hotel?._id}
            city={hotel?.city}
            country={hotel?.country}
            discount={hotel?.discount}
            facilities={hotel?.facilities}
            // eslint-disable-next-line no-underscore-dangle
            id={hotel?._id}
            image={hotel?.images[0]}
            name={hotel?.name}
            price={hotel?.price}
            ratings={hotel?.ratings}
          />
        ))}
      {!isError && !isLoading && <PaginationButtons count={10} />}
    </Stack>
  );
};

export default HotelListSection;
