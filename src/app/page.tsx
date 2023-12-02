import { Container, Box } from '@mui/material';
import { getHotDeals } from '@/services/api';
import {
  HotDealSection,
  PopularDestination,
  PopularHotels,
  Search,
} from '@/components/Templates/Home';

const searchContainerStyles = {
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
};

const Home = async () => {
  const hotDeals = await getHotDeals();

  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4rem',
      }}
    >
      {/* Hero With search Section */}
      <Box sx={searchContainerStyles}>
        <Container maxWidth="lg">
          <Search />
        </Container>
      </Box>
      {/* Hot deal Section  */}
      <Container maxWidth="lg">
        <HotDealSection hotDeals={hotDeals} />
      </Container>
      {/* Popular Destination section */}
      <Container maxWidth="lg">
        <PopularDestination />
      </Container>
      {/* Popular Hotels section */}
      <Container maxWidth="lg">
        <PopularHotels />
      </Container>
    </section>
  );
};
export default Home;
