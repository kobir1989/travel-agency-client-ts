'use client';

import {
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

const InputWrapperStack = styled(Stack)(({ theme }) => ({
  flexDirection: 'column',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
  },
}));

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
    <FormControl sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {/* Gender start  */}
      <Stack gap={1}>
        <FormLabel sx={{ fontWeight: 600 }}>Select Title</FormLabel>
        <Stack direction="row" gap={2}>
          <GenderLabel>
            <RadioButton type="radio" name="gender" required />
            MR.
          </GenderLabel>

          <GenderLabel>
            <RadioButton type="radio" name="gender" required />
            MS.
          </GenderLabel>
          <GenderLabel>
            <RadioButton type="radio" name="gender" required />
            MRS.
          </GenderLabel>
        </Stack>
      </Stack>
      {/* Gender ends  */}

      {/* Name start */}
      <FormLabel sx={{ mb: '-1rem', fontWeight: 600 }}>
        Personal Information
      </FormLabel>
      <InputWrapperStack gap={4} width="100%">
        <StyledTextfield placeholder="First Name" fullWidth required />
        <StyledTextfield placeholder="Last Name" fullWidth required />
      </InputWrapperStack>
      {/* Name ends */}

      {/* Country & City Start */}
      <InputWrapperStack gap={4}>
        <StyledTextfield placeholder="Country" fullWidth required />
        <StyledTextfield placeholder="City" fullWidth required />
      </InputWrapperStack>
      {/* Country & City ends */}

      {/* Password & ID  start */}
      <InputWrapperStack gap={4}>
        <StyledTextfield placeholder="Passport" fullWidth required />
        <StyledTextfield placeholder="NID (*Optional)" fullWidth />
      </InputWrapperStack>
      {/* Password & ID  ends */}
      <FormLabel sx={{ mb: '-1rem', fontWeight: 600 }}>
        Contract Details
      </FormLabel>
      {/* Mobile & email  start */}
      <InputWrapperStack gap={4}>
        <StyledTextfield placeholder="Mobile" fullWidth required />
        <StyledTextfield placeholder="Email" fullWidth required />
      </InputWrapperStack>
      {/* Mobile & email  ends */}

      {/* Submit Button */}
      <Button variant="secondary" type="submit">
        Confirm Booking
      </Button>
    </FormControl>
  );
};

export default BookingFrom;
