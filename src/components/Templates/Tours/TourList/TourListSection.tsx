'use client';

import { TourCard } from '@/components/Molicules/Cards';
import { Stack } from '@mui/material';
import { useGetTourListQuery } from '@/redux/features/tour/tourApi';

const TourListSection = () => {
  const { data: tourList, isLoading, isError } = useGetTourListQuery();
  return (
    <Stack gap={3}>
      {!isError &&
        !isLoading &&
        tourList?.tours.map((tour) => (
          <TourCard
            title={tour?.title}
            location={tour?.location}
            newPrice={tour?.newPrice}
            // eslint-disable-next-line no-underscore-dangle
            id={tour?._id}
            image={tour?.images[2]}
            groupSize={tour?.groupSize}
            startDate={tour?.startDate}
            // eslint-disable-next-line no-underscore-dangle
            key={tour?._id}
            oldPrice={tour?.oldPrice}
            discount={tour?.discount}
          />
        ))}
    </Stack>
  );
};

export default TourListSection;
