/** *
 * @function isValidEmail
 * @param {email}
 * @return {boolean}
 */

export const isValidEmail = (email: string): boolean => {
  // Regular expression pattern for email validation
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (pattern.test(email.toLowerCase())) {
    return true;
  }
  return false;
};
/**
 * Validates input fields for booking information.
 * @param {Record<string, string>} input - Object containing input field values.
 * @returns {Record<string, string>} - Object containing error messages for invalid fields.
 */
export const bookingInputValidator = (
  input: Record<string, string>,
): Record<string, string> => {
  const errorObj: Record<string, string> = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const key in input) {
    if (input[key] === '') {
      errorObj[key] = `${key} should not be empty!`;
    }
  }
  if (input.email && !isValidEmail(input.email)) {
    errorObj.email = 'Invalid Email!';
  }
  if (input.phone && input.phone.length < 10) {
    errorObj.phone = 'Invalid Phone number!';
  }
  if (input.passport && input.passport.length < 9) {
    errorObj.passport = 'Invalid Passport number!';
  }
  if (input.nid && input.nid.length < 10) {
    errorObj.nid = 'Invalid NID number!';
  }
  return errorObj;
};
