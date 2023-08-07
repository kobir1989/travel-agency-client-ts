'use client';

import {
  Box,
  TextField,
  FormControl,
  Stack,
  FormLabel,
  styled,
  Button,
} from '@mui/material';

const RadioButton = styled('input')({
  display: 'none',
});

const GenderLabel = styled('label')({
  border: '1px solid #D1D1D1',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '0.87rem',
  fontWeight: '500',
  '&:hover': {
    background: '#F0F0F0',
  },
});

const StyledTextfield = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.secondary.main,
    },
    '&:hover .MuiOutlinedInput-input': {
      borderColor: theme.palette.secondary.main,
    },
  },
}));

const BookingFrom = () => {
  return (
    <Box
      sx={(theme) => ({
        background: theme.palette.info.light,
        borderRadius: '6px',
        boxShadow: '0 4px 24px 0 rgba(34,41,47,.1)',
        padding: '1.5rem 1.2rem',
      })}
    >
      <FormControl sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {/* Gender start  */}
        <Stack gap={1}>
          <FormLabel sx={{ fontWeight: 600 }}>Select Title</FormLabel>
          <Stack direction="row" gap={2}>
            <GenderLabel>
              <RadioButton type="radio" name="gender" />
              MR.
            </GenderLabel>

            <GenderLabel>
              <RadioButton type="radio" name="gender" />
              MS.
            </GenderLabel>
            <GenderLabel>
              <RadioButton type="radio" name="gender" />
              MRS.
            </GenderLabel>
          </Stack>
        </Stack>
        {/* Gender ends  */}

        {/* Name start */}
        <FormLabel sx={{ mb: '-1rem', fontWeight: 600 }}>
          Personal Information
        </FormLabel>
        <Stack direction="row" gap={4} width="100%">
          <StyledTextfield placeholder="First Name" fullWidth />
          <StyledTextfield placeholder="Last Name" fullWidth />
        </Stack>
        {/* Name ends */}

        {/* Country & City Start */}
        <Stack direction="row" gap={4}>
          <StyledTextfield placeholder="Country" fullWidth />
          <StyledTextfield placeholder="City" fullWidth />
        </Stack>
        {/* Country & City ends */}

        {/* Password & ID  start */}
        <Stack direction="row" gap={4}>
          <StyledTextfield placeholder="Passport" fullWidth />
          <StyledTextfield placeholder="NID (*Optional)" fullWidth />
        </Stack>
        {/* Password & ID  ends */}
        <FormLabel sx={{ mb: '-1rem', fontWeight: 600 }}>
          Contract Details
        </FormLabel>
        {/* Mobile & email  start */}
        <Stack direction="row" gap={4}>
          <StyledTextfield placeholder="Mobile" fullWidth />
          <StyledTextfield placeholder="Email" fullWidth />
        </Stack>
        {/* Mobile & email  ends */}

        {/* Submit Button */}
        <Button variant="secondary">Submit</Button>
      </FormControl>
    </Box>
  );
};

export default BookingFrom;
