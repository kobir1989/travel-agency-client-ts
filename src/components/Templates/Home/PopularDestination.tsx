'use client';

import { PopularDestinationCard } from '@/components/Molicules/Cards';
import SlickSlider from '@/components/Molicules/SlickSlider';
import { TourResponse } from '@/types/api-data-type';
import { Typography, Box } from '@mui/material';

const PopularDestination = ({ tours }: TourResponse) => {
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
        {tours.map((tour) => (
          <Box key={tour?._id}>
            <PopularDestinationCard
              image={tour?.images[0]}
              title={tour?.title}
              id={tour?._id}
            />
          </Box>
        ))}
      </SlickSlider>
    </Box>
  );
};

export default PopularDestination;
