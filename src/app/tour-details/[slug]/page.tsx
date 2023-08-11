import {
  TourPreview,
  TourDetails,
} from '@/components/Templates/TourDetailsPageSections';
import { Container, Stack } from '@mui/material';

const TourDetailsPage = () => {
  return (
    <main>
      <Container maxWidth="lg" sx={{ mt: '8rem', mb: '5rem' }}>
        <Stack gap={3}>
          <TourPreview />
          <TourDetails />
        </Stack>
      </Container>
    </main>
  );
};

export default TourDetailsPage;
