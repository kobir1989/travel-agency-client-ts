'use client';

import { HotDealsCard } from '@/components/Molicules/Cards';
import SlickSlider from '@/components/Molicules/SlickSlider';
import { useGetTourListQuery } from '@/redux/features/tour/tourApi';
import { Box, Stack, Typography } from '@mui/material';

const HotDealSection = () => {
  const { data: tours, isLoading, isError } = useGetTourListQuery();
  return (
    <Box>
      <Box mb={1}>
        <Typography variant="h2">Hot Deals</Typography>
      </Box>
      <Stack>
        <SlickSlider
          desktopSlideToShow={2}
          tabSlideToShow={1}
          slidesToScroll={1}
          slidesToShow={2}
        >
          {!isError &&
            !isLoading &&
            tours?.tours.map((tour) => (
              <Box
                sx={{
                  padding: '0 0 2rem 1rem',
                }}
                // eslint-disable-next-line no-underscore-dangle
                key={tour?._id}
              >
                <HotDealsCard
                  title={tour?.title}
                  descriptions={tour?.description}
                  image={tour?.images[0]}
                  discount={tour?.discount}
                />
              </Box>
            ))}
        </SlickSlider>
      </Stack>
    </Box>
  );
};

export default HotDealSection;
