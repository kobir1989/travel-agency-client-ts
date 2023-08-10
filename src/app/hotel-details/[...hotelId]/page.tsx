import {
  HotelInfo,
  Policy,
  PricingSummary,
  RoomDetails,
} from '@/components/Templates/HotelDetailsPageSections';
import { Container, Grid, Stack } from '@mui/material';

const HotelDetailsPage = () => {
  return (
    <main style={{ margin: '8rem 0' }}>
      <Container maxWidth="lg">
        <HotelInfo />
        <Grid container spacing={3} mt={2}>
          <Grid item lg={9} md={8} sm={12} xs={12}>
            <Stack gap={3}>
              <RoomDetails />
              <Policy />
            </Stack>
          </Grid>
          <Grid item lg={3} md={4} sm={12} xs={12}>
            <PricingSummary />
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

export default HotelDetailsPage;
