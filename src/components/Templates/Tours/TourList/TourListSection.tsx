'use client';

import { TourCard } from '@/components/Molicules/Cards';
import { Stack } from '@mui/material';
import { useGetTourListQuery } from '@/redux/features/tour/tourApi';
import PaginationButtons from '@/components/Molicules/PaginationButtons';

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
            id={tour?._id}
            image={tour?.images[2]}
            groupSize={tour?.groupSize}
            startDate={tour?.startDate}
            key={tour?._id}
            oldPrice={tour?.oldPrice}
            discount={tour?.discount}
          />
        ))}
      {!isError && !isLoading && <PaginationButtons count={10} />}
    </Stack>
  );
};

export default TourListSection;
