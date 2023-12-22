'use client';

import { useState, ChangeEvent } from 'react';

// interface UseFormProps {
//   initialState: Record<string, string>;
//   // submitCallback?(data: T): void;
//   // validationCallback?(data: T): Record<string, string>;
// }

const useForm = (initialState: Record<string, string>) => {
  const [formValues, setFormValues] = useState(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // onChange Handler
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(formValues);
    // const validationErrors = validationCallback(formValues);
    // setErrors({ ...validationErrors, ...errors });
    // if (Object.keys(validationErrors).length === 0) {
    //   submitCallback(formValues);
    // }
  };

  // useEffect(() => {
  //   // if there are any response errors, update the error state.
  //   if (isError) {
  //     setErrors((prev) => ({
  //       ...prev,
  //       email: 'Invalid credentials',
  //       password: 'Invalid credentials',
  //     }));
  //   }
  //   // if success, navigate to '/user' and reset form
  //   if (isSuccess) {
  //     setFormValues(initialState);
  //     navigate('/');
  //   }
  // }, [initialState, isError, isSuccess]);

  return {
    formValues,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
