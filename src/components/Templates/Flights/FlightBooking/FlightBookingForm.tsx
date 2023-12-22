'use client';

import BookingFrom from '@/components/Organisms/BookingForm/BookingFrom';
import SectionContainer from '@/components/Atoms/SectionContainer';
import useForm from '@/hooks/useForm';
import { initialState } from '@/constants/bookingInitialValue';
import { bookingInputValidator } from '@/utils/validators';

const FlightBookingForm = () => {
  // will send the booking data to server later.
  const handleBookingValue = (value: Record<string, string>) => {
    // eslint-disable-next-line no-console
    console.log(value);
  };

  const { errors, formValues, handleChange, handleSubmit } = useForm(
    initialState,
    handleBookingValue,
    bookingInputValidator,
  );

  return (
    <SectionContainer>
      <BookingFrom
        firstName={formValues.firstName}
        lastName={formValues.lastName}
        city={formValues.city}
        country={formValues.country}
        phone={formValues.phone}
        email={formValues.email}
        passport={formValues.passport}
        nid={formValues.nid}
        gender={formValues.gender}
        onChange={handleChange}
        onSubmit={handleSubmit}
        errors={errors}
      />
    </SectionContainer>
  );
};

export default FlightBookingForm;
