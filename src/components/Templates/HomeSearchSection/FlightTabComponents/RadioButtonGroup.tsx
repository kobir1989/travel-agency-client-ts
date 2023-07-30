import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const RadioButtonGroup = () => {
  return (
    <RadioGroup row name="row-radio-buttons-group">
      <FormControlLabel value="oneWay" control={<Radio />} label="One Way" />
      <FormControlLabel
        value="roundWay"
        control={<Radio />}
        label="Round Way"
      />
    </RadioGroup>
  );
};

export default RadioButtonGroup;
