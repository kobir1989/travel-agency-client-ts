import PageContainer from '@/components/Atoms/PageContainer';
import { PriceDetailsCard } from '@/components/Molicules/Cards';
import {
  SelectedFlightPreview,
  FlightBookingForm,
} from '@/components/Templates/Flights/FlightBooking';
import { Grid, Stack } from '@mui/material';

const FlightBooking = () => {
  return (
    <PageContainer>
      <Grid container spacing={3}>
        <Grid item lg={8} md={7} sm={12} xs={12}>
          <Stack gap={3}>
            <SelectedFlightPreview />
            <FlightBookingForm />
          </Stack>
        </Grid>
        <Grid item lg={4} md={5} sm={12} xs={12}>
          <PriceDetailsCard />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default FlightBooking;
