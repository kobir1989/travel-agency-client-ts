export interface MuiDatePickerProps {
  isReturn: boolean;
  minDate: string;
  maxDate: string;
  value: string;
  onGetDateValue(newValue: string | null): void;
}
