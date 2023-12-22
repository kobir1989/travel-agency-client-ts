'use client';

import { PopularHotelCard } from '@/components/Molicules/Cards';
import SlickSlider from '@/components/Molicules/SlickSlider';
import { HotelsResponse } from '@/types/api-data-type';
import { Box, Typography } from '@mui/material';

const PopularHotels = ({ hotels }: HotelsResponse) => {
  return (
    <Box pb={8}>
      <Box>
        <Typography variant="h2">Popular Hotels & Resorts</Typography>
      </Box>
      <SlickSlider
        desktopSlideToShow={4}
        mobileSlideToShow={2}
        tabSlideToShow={2}
        slidesToShow={4}
        slidesToScroll={1}
      >
        {hotels.map((hotel) => (
          <Box key={hotel?._id}>
            <PopularHotelCard
              title={hotel?.name}
              subTitle={hotel?.description}
              image={hotel?.images[0]}
              id={hotel?._id}
            />
          </Box>
        ))}
      </SlickSlider>
    </Box>
  );
};

export default PopularHotels;
