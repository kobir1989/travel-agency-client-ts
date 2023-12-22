'use client';

import { DynamicObjectType } from '@/types/common-type';
import { useState, ChangeEvent } from 'react';

/**
 * @useForm custom hook
 * @param initialState
 * @param submitCallback
 * @param errorValidator
 * @returns {fromValue} - form value state.
 * @returns {errors} - object
 * @returns {fromValue}
 * @returns {handleChange} - onChange handler
 * @returns {handleSubmit} - onSubmit handler
 */
const useForm = (
  initialState: DynamicObjectType,
  submitCallback: (value: DynamicObjectType) => void,
  errorValidator: (inputValue: DynamicObjectType) => DynamicObjectType,
) => {
  const [formValues, setFormValues] = useState(initialState);
  const [errors, setErrors] = useState<DynamicObjectType>({});

  // onChange Handler
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (value !== '') {
      setErrors({ ...errors, [name]: '' });
    }
  };

  // onSubmit Handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // validate input value
    const validationError: DynamicObjectType = errorValidator(formValues);
    if (Object.keys(validationError).length > 0) {
      setErrors(validationError);
      return;
    }
    // submit input value
    submitCallback(formValues);

    // rest input value after successfull submition
    setFormValues(initialState);
  };

  return {
    formValues,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
