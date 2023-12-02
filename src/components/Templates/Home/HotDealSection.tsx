'use client';

import { HotDealsCard } from '@/components/Molicules/Cards';
import SlickSlider from '@/components/Molicules/SlickSlider';
import { Box, Stack, Typography } from '@mui/material';
import { TourResponse } from '@/types/api-data-type';

const HotDealSection = ({ hotDeals }: { hotDeals: TourResponse }) => {
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
          {hotDeals?.tours.map((tour) => (
            <Box
              sx={{
                padding: '0 0 2rem 1rem',
              }}
              key={tour?._id}
            >
              <HotDealsCard
                title={tour?.title}
                descriptions={tour?.description}
                image={tour?.images[0]}
                discount={tour?.discount}
                id={tour?._id}
              />
            </Box>
          ))}
        </SlickSlider>
      </Stack>
    </Box>
  );
};

export default HotDealSection;
