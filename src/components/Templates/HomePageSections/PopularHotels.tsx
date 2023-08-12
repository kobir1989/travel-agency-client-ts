'use client';

import { PopularHotelCard } from '@/components/Molicules/Cards';
import SlickSlider from '@/components/Molicules/SlickSlider';
import { useGetHotelsListQuery } from '@/redux/features/hotel/hotelApi';
import { Box, Typography } from '@mui/material';

const PopularHotels = () => {
  const { data: hotels, isError, isLoading } = useGetHotelsListQuery();

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
        {!isLoading &&
          !isError &&
          hotels?.hotels.map((hotel) => (
            // eslint-disable-next-line no-underscore-dangle
            <Box key={hotel?._id}>
              <PopularHotelCard
                title={hotel?.name}
                subTitle={hotel?.description}
                image={hotel?.images[0]}
              />
            </Box>
          ))}
      </SlickSlider>
    </Box>
  );
};

export default PopularHotels;
