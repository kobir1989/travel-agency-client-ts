import { HotelsCard } from '@/components/Molicules/Cards';
import { Container, Stack } from '@mui/material';

const TourListSection = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: '2rem' }}>
      <Stack>
        <HotelsCard />
      </Stack>
    </Container>
  );
};

export default TourListSection;
