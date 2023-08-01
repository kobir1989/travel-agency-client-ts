import { PopularDestinationCard } from '@/components/Molicules/Cards';
import SlickSlider from '@/components/Molicules/SlickSlider';
import { Typography, Box } from '@mui/material';

const PopularDestination = () => {
  return (
    <Box>
      <Box>
        <Typography variant="h2">Popular Destinations</Typography>
      </Box>
      <SlickSlider desktopSlideToShow={3} slidesToScroll={1} slidesToShow={3}>
        <Box>
          <PopularDestinationCard />
        </Box>
        <Box>
          <PopularDestinationCard />
        </Box>
        <Box>
          <PopularDestinationCard />
        </Box>
        <Box>
          <PopularDestinationCard />
        </Box>
        <Box>
          <PopularDestinationCard />
        </Box>
        <Box>
          <PopularDestinationCard />
        </Box>
      </SlickSlider>
    </Box>
  );
};

export default PopularDestination;
