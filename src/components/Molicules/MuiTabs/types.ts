export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export interface TabLabel {
  id: string;
  label: string;
}

export interface TabComponents {
  id: string;
  component: React.ReactNode;
}

export interface MuiTabsProps {
  tabLabels: TabLabel[];
  tabComponents: TabComponents[];
}
