import SearchWidget from '@/components/Atoms/widgets/SearchWidget';
import { Box } from '@mui/material';

const Home = () => {
  return (
    <main>
      <Box mt={4} ml={4}>
        <SearchWidget
          title="Cox bazar"
          tags="CITY/HOTEL"
          subTitle="Bangladesh"
        />
      </Box>
    </main>
  );
};
export default Home;
