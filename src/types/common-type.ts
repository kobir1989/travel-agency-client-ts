export interface ChildrenType {
  children: React.ReactNode;
}
// Booking Form Props type
export interface BookingStateType {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
  city: string;
  country: string;
  nid: string;
  passport: string;
}
export interface FormProps extends BookingStateType {
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onSubmit(e: React.SyntheticEvent<HTMLFormElement, SubmitEvent>): void;
}
