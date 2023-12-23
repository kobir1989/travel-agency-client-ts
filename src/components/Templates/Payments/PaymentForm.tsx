'use client';

import NextImage from '@/components/Atoms/NextImage';
import {
  Stack,
  TextField,
  styled,
  Box,
  Button,
  Typography,
} from '@mui/material';

const StyledFrom = styled('form')({
  display: 'flex',
  gap: '1rem',
  flexDirection: 'column',
});

const PaymentForm = () => {
  return (
    <Box
      sx={{
        maxWidth: '600px',
        margin: 'auto',
        background: '#FFF',
        padding: '1.5rem',
        borderRadius: '8px',
        boxShadow: '5px 2px 10px rgba(28,60,107,.1)',
      }}
    >
      <Box mb={4}>
        <Typography variant="h3">Choose Payment Method</Typography>
        <Box mt={2}>
          <NextImage
            alt="visa"
            height={50}
            width={150}
            imgUrl="/assets/visa.png"
            styles={{ borderRadius: '8px' }}
          />
        </Box>
      </Box>
      <StyledFrom>
        <Stack gap={2}>
          <TextField placeholder="Card Holder Name" type="text" />
          <TextField placeholder="Card Number" type="number" />
        </Stack>
        {/* Card Details  */}
        <Stack direction="row" gap={2} width="100%">
          <Box sx={{ width: 'calc(100% / 3)' }}>
            <TextField
              sx={{ width: '100%' }}
              type="number"
              placeholder="Month"
            />
          </Box>
          <Box sx={{ width: 'calc(100% / 3)' }}>
            <TextField
              sx={{ width: '100%' }}
              type="number"
              placeholder="
          Year"
            />
          </Box>
          <Box sx={{ width: 'calc(100% / 3)' }}>
            <TextField sx={{ width: '100%' }} type="number" placeholder="CVV" />
          </Box>
        </Stack>
        {/* Pay Button */}
        <Box mt={2}>
          <Button
            type="submit"
            variant="contained"
            sx={{ width: '100%', padding: '0.7rem 0' }}
          >
            PAY NOW
          </Button>
        </Box>
      </StyledFrom>
    </Box>
  );
};

export default PaymentForm;
