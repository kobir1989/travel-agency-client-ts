import { HotelInfo } from '@/components/Templates/HotelDetailsPageSections';
import { Container } from '@mui/material';

const HotelDetailsPage = () => {
  return (
    <main style={{ margin: '7rem 0' }}>
      <Container maxWidth="lg">
        <HotelInfo />
      </Container>
    </main>
  );
};

export default HotelDetailsPage;
