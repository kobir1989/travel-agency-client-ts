import { Container, Box } from '@mui/material';
import {
  HotDealSection,
  PopularDestination,
  PopularHotels,
  SearchSection,
} from '@/components/Templates/HomePageSections';

const Home = () => {
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4rem',
      }}
    >
      <Box
        sx={{
          backgroundImage: `url('/assets/cover2.jpg')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          imageRendering: 'auto',
          '@media (max-width: 600px)': {
            paddingTop: '4rem',
          },
        }}
      >
        <Container maxWidth="lg">
          <SearchSection />
        </Container>
      </Box>
      <Container maxWidth="lg">
        <HotDealSection />
      </Container>
      <Container maxWidth="lg">
        <PopularDestination />
      </Container>
      <Container maxWidth="lg">
        <PopularHotels />
      </Container>
    </section>
  );
};
export default Home;
