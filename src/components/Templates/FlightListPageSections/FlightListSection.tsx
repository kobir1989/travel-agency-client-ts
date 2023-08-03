import { FlightCard } from '@/components/Molicules/Cards';
import { Container } from '@mui/material';

const FlightListSection = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: '3rem' }}>
      <FlightCard />
    </Container>
  );
};

export default FlightListSection;
