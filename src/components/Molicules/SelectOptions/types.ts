// options object types
export interface OptionsType {
  location: string;
  airport: string;
  code: string;
  id: string;
}
// selected value type
export interface SelectedValueType {
  title: string;
  subtitle: string;
}

// SelectButton component props
export interface SelectButtonProps {
  selectedValue: SelectedValueType;
  label: string;
}

// SlectOptions component props
export interface SlectOptionsProps {
  options: OptionsType[];
  onOptionSelect(option: SelectedValueType): void;
}
