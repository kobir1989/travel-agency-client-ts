import { Container, Skeleton, Box, Grid, LinearProgress } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

const Loading = () => {
  return (
    <>
      <Box sx={{ width: '100%' }}>
        <LinearProgress />
      </Box>
      <Container maxWidth="lg" sx={{ mt: '8rem', mb: '3rem' }}>
        <Box mb="5rem">
          <Skeleton variant="rounded" width="100%" height={200} />
        </Box>
        <Grid container spacing={2}>
          {Array.from({ length: 2 })
            .fill(0)
            .map(() => (
              <Grid item xs={12} md={6} key={uuidv4()}>
                <Skeleton variant="rounded" width="100%" height={200} />
              </Grid>
            ))}
        </Grid>
        <Grid container spacing={2} mt={2} key={uuidv4()}>
          {Array.from({ length: 3 })
            .fill(0)
            .map(() => (
              <Grid item xs={12} md={4}>
                <Skeleton variant="rounded" width="100%" height={300} />
              </Grid>
            ))}
        </Grid>
        <Grid container spacing={2} mt={2} key={uuidv4()}>
          {Array.from({ length: 3 })
            .fill(0)
            .map(() => (
              <Grid item xs={12} md={4}>
                <Skeleton variant="rounded" width="100%" height={350} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  );
};

export default Loading;
