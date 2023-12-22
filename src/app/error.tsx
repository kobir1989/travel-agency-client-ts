'use client';

import Icons from '@/components/Atoms/Icons';
import { Container, Box, Typography, Button, styled } from '@mui/material';

const ErrorText = styled(Typography)(({ theme }) => ({
  color: theme.palette.error.light,
  display: 'flex',
  alignItems: 'center',
  gap: '0.2rem',
}));

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: '12rem',
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <ErrorText variant="h3" fontSize="2rem">
          <Icons name="sadIcon" size="3rem" /> OOPS!
        </ErrorText>
        <ErrorText variant="h3" fontSize="1.2rem">
          Something went wrong!
        </ErrorText>
        <ErrorText variant="h3" fontSize="1.2rem">
          {error.message}
        </ErrorText>
        <Box>
          <Button
            variant="contained"
            onClick={reset}
            sx={(theme) => ({ background: theme.palette.error.light })}
          >
            Reload
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Error;
