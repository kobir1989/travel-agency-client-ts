import SelectOptions from '@/components/Molicules/SelectOptions';
import { Box } from '@mui/material';

const SelectDepart = [
  {
    location: 'Dhaka, Bangladesh',
    airport: ' Hazrat Shahjalal International Airport',
    code: 'DAC',
    id: 'A1',
  },
  {
    location: 'Dhilli, India',
    airport: 'Dhili airport',
    code: 'DHL',
    id: 'A2',
  },
];

const Home = () => {
  return (
    <main>
      <Box>
        <video
          style={{
            height: '100vh',
            width: '100%',
            objectFit: 'cover',
            zIndex: -1,
          }}
          src="/assets/video.mp4"
          autoPlay
          muted
          loop
          preload="metadata"
        />
      </Box>
      <Box p={5}>
        <SelectOptions departFrom={SelectDepart} />
      </Box>
    </main>
  );
};
export default Home;
