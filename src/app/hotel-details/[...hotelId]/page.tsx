import {
  HotelInfo,
  Policy,
  RoomDetails,
} from '@/components/Templates/HotelDetailsPageSections';
import { Container } from '@mui/material';

const HotelDetailsPage = () => {
  return (
    <main style={{ margin: '8rem 0' }}>
      <Container
        maxWidth="lg"
        sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
      >
        <HotelInfo />
        <RoomDetails />
        <Policy />
      </Container>
    </main>
  );
};

export default HotelDetailsPage;
