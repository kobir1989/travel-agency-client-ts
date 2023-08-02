import { Dayjs } from 'dayjs';

export interface MuiDatePickerProps {
  value: Dayjs | null;
  minDate: Dayjs | null;
  lable: string;
  onClose(): void;
  onDateValue(newValue: any): void;
}
