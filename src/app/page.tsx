import {
  HotDealSection,
  PopularDestination,
  PopularHotels,
} from '@/components/Templates/Home';
import { Container, Box } from '@mui/material';
import HomeSearchSection from '@/components/Templates/SearchSection';

const Home = () => {
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4rem',
        marginBottom: '5rem',
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
          <HomeSearchSection />
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
    </main>
  );
};
export default Home;
