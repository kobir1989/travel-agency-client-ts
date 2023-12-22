'use client';

import {
  TextField,
  Stack,
  FormLabel,
  styled,
  Button,
  FormControl,
} from '@mui/material';
import { FormProps } from '@/types/common-type';

const RadioButton = styled('input')({
  position: 'absolute',
  opacity: '0',
  zIndex: -1,
});

const GenderLabel = styled('label')(({ checked }: { checked: string }) => ({
  border: '1px solid #D1D1D1',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '0.87rem',
  fontWeight: '500',
  background: checked === 'true' ? '#1c3c6b' : '#FFF',
  color: checked === 'true' ? '#FFF' : '#52606D',
  '&:hover': {
    background: '#1c3c6b',
    color: '#FFF',
  },
}));

const InputWrapperStack = styled(Stack)(({ theme }) => ({
  flexDirection: 'column',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
  },
}));

const StyledTextfield = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&:hover .MuiOutlinedInput-input': {
      borderColor: theme.palette.secondary.main,
    },
  },
}));

const BookingFrom = ({
  firstName,
  lastName,
  email,
  phone,
  gender,
  city,
  country,
  nid,
  passport,
  onChange,
  onSubmit,
  errors,
}: FormProps) => {
  return (
    <form onSubmit={onSubmit}>
      <FormControl sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {/* Gender start  */}
        <Stack gap={1}>
          <FormLabel sx={{ fontWeight: 600 }}>Select Title</FormLabel>
          <Stack direction="row" gap={2}>
            <GenderLabel checked={gender === 'mr.' ? 'true' : 'false'}>
              <RadioButton
                type="radio"
                name="gender"
                required
                value="mr."
                checked={gender === 'mr.'}
                onChange={onChange}
              />
              MR.
            </GenderLabel>

            <GenderLabel checked={gender === 'ms.' ? 'true' : 'false'}>
              <RadioButton
                type="radio"
                name="gender"
                required
                value="ms."
                checked={gender === 'ms.'}
                onChange={onChange}
              />
              MS.
            </GenderLabel>
            <GenderLabel checked={gender === 'mrs.' ? 'true' : 'false'}>
              <RadioButton
                type="radio"
                name="gender"
                required
                value="mrs."
                checked={gender === 'mrs.'}
                onChange={onChange}
              />
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
          <StyledTextfield
            name="firstName"
            placeholder="First Name*"
            fullWidth
            value={firstName}
            onChange={onChange}
            error={!!errors.firstName}
            helperText={errors?.firstName}
          />
          <StyledTextfield
            name="lastName"
            placeholder="Last Name*"
            fullWidth
            value={lastName}
            onChange={onChange}
            error={!!errors.lastName}
            helperText={errors?.lastName}
          />
        </InputWrapperStack>
        {/* Name ends */}

        {/* Country & City Start */}
        <InputWrapperStack gap={4}>
          <StyledTextfield
            name="country"
            placeholder="Country*"
            fullWidth
            value={country}
            onChange={onChange}
            error={!!errors.country}
            helperText={errors?.country}
          />
          <StyledTextfield
            placeholder="City*"
            name="city"
            fullWidth
            value={city}
            onChange={onChange}
            error={!!errors.city}
            helperText={errors?.city}
          />
        </InputWrapperStack>
        {/* Country & City ends */}

        {/* Password & ID  start */}
        <InputWrapperStack gap={4}>
          <StyledTextfield
            name="passport"
            placeholder="Passport*"
            fullWidth
            value={passport}
            onChange={onChange}
            error={!!errors.passport}
            helperText={errors?.passport}
          />
          <StyledTextfield
            name="nid"
            type="number"
            placeholder="NID*"
            fullWidth
            value={nid}
            onChange={onChange}
            error={!!errors.nid}
            helperText={errors?.nid}
          />
        </InputWrapperStack>
        {/* Password & ID  ends */}
        <FormLabel sx={{ mb: '-1rem', fontWeight: 600 }}>
          Contract Details
        </FormLabel>
        {/* Mobile & email  start */}
        <InputWrapperStack gap={4}>
          <StyledTextfield
            name="phone"
            placeholder="Mobile*"
            type="number"
            fullWidth
            value={phone}
            onChange={onChange}
            error={!!errors.phone}
            helperText={errors?.phone}
          />
          <StyledTextfield
            name="email"
            type="email"
            placeholder="Email*"
            fullWidth
            value={email}
            onChange={onChange}
            error={!!errors.email}
            helperText={errors?.email}
          />
        </InputWrapperStack>
        {/* Mobile & email  ends */}

        {/* Submit Button */}
        <Button variant="secondary" type="submit">
          Confirm Booking
        </Button>
      </FormControl>
    </form>
  );
};

export default BookingFrom;
