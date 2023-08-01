import { HotDealsCard } from '@/components/Molicules/Cards';
import SlickSlider from '@/components/Molicules/SlickSlider';
import { Box, Stack, Typography } from '@mui/material';

const cards = [
  {
    title: '"Fly with Excitement: 15% Off on International Flights!',
    descriptions:
      'Book now & enjoy 15% off int flights! Whether its a beach getaway, adventurous expedition, or cultural exploration, our exclusive offer makes travel dreams a reality. Dont miss this chance to create unforgettable experiences. Hurry, let your wanderlust soar!',
    image: '/assets/campaign_DFLY2023_hotdeal.jpg',
    discount: '15%',
    id: 'Cd1',
  },
  {
    title: '"Fly with Excitement: 15% Off on International Flights!',
    descriptions:
      'Book now & enjoy 15% off int flights! Whether its a beach getaway, adventurous expedition, or cultural exploration, our exclusive offer makes travel dreams a reality. Dont miss this chance to create unforgettable experiences. Hurry, let your wanderlust soar!',
    image: '/assets/campaign_DFLY2023_hotdeal.jpg',
    discount: '15%',
    id: 'Cd2',
  },
  {
    title: '"Fly with Excitement: 15% Off on International Flights!',
    descriptions:
      'Book now & enjoy 15% off int flights! Whether its a beach getaway, adventurous expedition, or cultural exploration, our exclusive offer makes travel dreams a reality. Dont miss this chance to create unforgettable experiences. Hurry, let your wanderlust soar!',
    image: '/assets/campaign_DFLY2023_hotdeal.jpg',
    discount: '15%',
    id: 'Cd3',
  },
  {
    title: '"Fly with Excitement: 15% Off on International Flights!',
    descriptions:
      'Book now & enjoy 15% off int flights! Whether its a beach getaway, adventurous expedition, or cultural exploration, our exclusive offer makes travel dreams a reality. Dont miss this chance to create unforgettable experiences. Hurry, let your wanderlust soar!',
    image: '/assets/campaign_DFLY2023_hotdeal.jpg',
    discount: '15%',
    id: 'Cd4',
  },
];

const HotDealSection = () => {
  return (
    <Box>
      <Box mb={1}>
        <Typography variant="h2">Hot Deals</Typography>
      </Box>
      <Stack>
        <SlickSlider desktopSlideToShow={2} slidesToScroll={1} slidesToShow={2}>
          {cards.map((card) => (
            <Box
              sx={{
                padding: '0 0 2rem 1rem',
              }}
              key={card?.id}
            >
              <HotDealsCard
                title={card?.title}
                descriptions={card?.descriptions}
                image={card?.image}
                discount={card?.discount}
              />
            </Box>
          ))}
        </SlickSlider>
      </Stack>
    </Box>
  );
};

export default HotDealSection;
