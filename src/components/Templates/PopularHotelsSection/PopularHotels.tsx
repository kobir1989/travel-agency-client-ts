import { PopularHotelCard } from '@/components/Molicules/Cards';
import SlickSlider from '@/components/Molicules/SlickSlider';
import { Box, Typography } from '@mui/material';

const PopularHotels = () => {
  return (
    <Box>
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
        <Box>
          <PopularHotelCard title="dfdff" subTitle="fdfdffd" />
        </Box>
        <Box>
          <PopularHotelCard title="dfdff" subTitle="fdfdffd" />
        </Box>
        <Box>
          <PopularHotelCard title="dfdff" subTitle="fdfdffd" />
        </Box>
        <Box>
          <PopularHotelCard title="dfdff" subTitle="fdfdffd" />
        </Box>
        <Box>
          <PopularHotelCard title="dfdff" subTitle="fdfdffd" />
        </Box>
      </SlickSlider>
    </Box>
  );
};

export default PopularHotels;
