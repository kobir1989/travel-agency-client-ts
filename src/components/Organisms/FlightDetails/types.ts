interface ColumnTitles {
  colOne: string;
  colTwo: string;
  colThree: string;
}

interface ColumnValues {
  valueOne: string;
  valueTwo: string;
  valueThree: string;
}

export interface DetailsTabProps {
  columnTitle: ColumnTitles;
  columnValue: ColumnValues;
}
