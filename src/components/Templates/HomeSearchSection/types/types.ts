import { SelectedValueType } from '@/components/Molicules/SelectOptions/types/types';

export interface GridItemProps {
  onHandleClick(): void;
  column: number;
  isPopupOpen: boolean;
  selectedValue: SelectedValueType;
  label: string;
  children: React.ReactNode;
  positionRight?: '0' | 'unset';
  onSwapValue?(): void;
}
