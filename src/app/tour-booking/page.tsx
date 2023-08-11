import { PriceDetailsCard } from '@/components/Molicules/Cards';
import {
  TourBookingForm,
  ReviewTourBooking,
} from '@/components/Templates/TourBookingPageSections';
import { Container, Stack, Grid } from '@mui/material';

const TourBookingPage = () => {
  return (
    <main>
      <Container maxWidth="lg" sx={{ mt: '8rem', mb: '5rem' }}>
        <Grid container spacing={3}>
          <Grid item lg={8} md={7} sm={12} xs={12}>
            <Stack gap={3}>
              <ReviewTourBooking />
              <TourBookingForm />
            </Stack>
          </Grid>
          <Grid item lg={4} md={5} sm={12} xs={12}>
            <PriceDetailsCard />
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

export default TourBookingPage;
