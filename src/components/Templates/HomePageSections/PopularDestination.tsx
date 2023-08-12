'use client';

import { PopularDestinationCard } from '@/components/Molicules/Cards';
import SlickSlider from '@/components/Molicules/SlickSlider';
import { Typography, Box } from '@mui/material';
import { useGetTourListQuery } from '@/redux/features/tour/tourApi';

const PopularDestination = () => {
  const { data: tours, isError, isLoading } = useGetTourListQuery();
  return (
    <Box>
      <Box>
        <Typography variant="h2">Popular Destinations</Typography>
      </Box>
      <SlickSlider
        desktopSlideToShow={3}
        tabSlideToShow={2}
        slidesToScroll={1}
        slidesToShow={3}
      >
        {!isError &&
          !isLoading &&
          tours?.tours &&
          tours?.tours.map((tour) => (
            // eslint-disable-next-line no-underscore-dangle
            <Box key={tour?._id}>
              <PopularDestinationCard
                image={tour?.images[0]}
                title={tour?.title}
              />
            </Box>
          ))}
      </SlickSlider>
    </Box>
  );
};

export default PopularDestination;
