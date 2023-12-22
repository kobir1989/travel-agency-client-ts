'use client';

import BookingFrom from '@/components/Organisms/BookingForm/BookingFrom';
import SectionContainer from '@/components/Atoms/SectionContainer';
import useForm from '@/hooks/useForm';

const FlightBookingForm = () => {
  // Initial Form Value
  const initialState = {
    firstName: '',
    lastName: '',
    country: '',
    city: '',
    passport: '',
    nid: '',
    phone: '',
    email: '',
    gender: '',
  };
  const { formValues, handleChange, handleSubmit } = useForm(initialState);
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
      />
    </SectionContainer>
  );
};

export default FlightBookingForm;
