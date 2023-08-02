import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { RadioButtonGroupProps } from './types';

const RadioButtonGroup = ({
  value,
  onChangeHandler,
}: RadioButtonGroupProps) => {
  return (
    <RadioGroup
      row
      name="row-radio-buttons-group"
      onChange={onChangeHandler}
      value={value}
    >
      <FormControlLabel control={<Radio />} label="One Way" value="oneWay" />
      <FormControlLabel
        control={<Radio />}
        value="roundWay"
        label="Round Way"
      />
    </RadioGroup>
  );
};

export default RadioButtonGroup;
