import HotDealSection from '@/components/Templates/HomeHotDealsSection';
import HomeSearchSection from '@/components/Templates/HomeSearchSection';
import PopularDestination from '@/components/Templates/PopularDestinationSection';
import PopularHotels from '@/components/Templates/PopularHotelsSection';
import { Container, Box } from '@mui/material';

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
          backgroundImage: `url('/assets/cover.avif')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          imageRendering: 'auto',
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
