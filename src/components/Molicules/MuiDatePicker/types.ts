import { Dayjs } from 'dayjs';

export interface MuiDatePickerProps {
  value: Dayjs | null;
  minDate: Dayjs | null;
  lable: string;
  onDateValue(newValue: any): void;
}
