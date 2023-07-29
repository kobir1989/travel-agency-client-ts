import { Box } from '@mui/material';

const Home = () => {
  return (
    <main>
      <Box>
        <video
          style={{ height: '100vh', width: '100%', objectFit: 'cover' }}
          src="/assets/video.mp4"
          autoPlay
          muted
          loop
          preload="metadata"
        />
      </Box>
    </main>
  );
};
export default Home;
