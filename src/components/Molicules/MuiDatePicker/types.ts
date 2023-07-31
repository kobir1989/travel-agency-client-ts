import { Dayjs } from 'dayjs';

export interface MuiDatePickerProps {
  isReturn: boolean;
  value: Dayjs | null;
  minDate: Dayjs | null;
  onDateValue(newValue: any): void;
}
