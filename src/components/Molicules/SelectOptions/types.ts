export interface SelectDepart {
  location: string;
  airport: string;
  code: string;
  id: string;
}

export interface SlectOptionsProps {
  departFrom: SelectDepart[];
}
