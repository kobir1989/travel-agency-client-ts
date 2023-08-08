export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export interface TabLabel {
  id: string;
  label: string;
  icon?: string;
}

export interface TabComponents {
  id: string;
  component: React.ReactNode;
}

export interface MuiTabsProps {
  tabLabels: TabLabel[];
  tabComponents: TabComponents[];
  tabsStyles?: object;
  onHandleChange(event: React.SyntheticEvent, newValue: number): void;
  value: number;
  isCenter: boolean;
}
