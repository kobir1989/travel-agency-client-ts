'use client';

import SectionContainer from '@/components/Atoms/SectionContainer';
import BookingFrom from '@/components/Organisms/BookingForm/BookingFrom';
import useForm from '@/hooks/useForm';
import { bookingInputValidator } from '@/utils/validators';
import { initialState } from '@/constants/bookingInitialValue';
import { DynamicObjectType } from '@/types/common-type';

const TourBookingForm = () => {
  const handleTourBookingData = (value: DynamicObjectType) => {
    // eslint-disable-next-line no-console
    console.log(value);
  };
  const { errors, formValues, handleChange, handleSubmit } = useForm(
    initialState,
    handleTourBookingData,
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

export default TourBookingForm;
