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

// Define a generic options type
export interface OptionType {
  [key: string]: string;
  location: string;
  id: string;
}

// Define a generic component props
export interface OptionsListProps {
  options: OptionType[];
  onOptionSelect(option: OptionType): void;
  placeholder: string;
  titleKey: keyof OptionType; // The key to be used for the title (e.g., 'location' or 'airport')
  subtitleKey: keyof OptionType; // The key to be used for the subtitle (e.g., 'hotel' or 'airport')
}
