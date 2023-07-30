import Condition from '@/components/Atoms/Condition';
import {
  SelectOptions,
  SelectButton,
} from '@/components/Molicules/SelectOptions';
import { SelectedValueType } from '@/components/Molicules/SelectOptions/types';
import RadioButtonGroup from '@/components/Templates/HomeSearchSection/FlightTabComponents/RadioButtonGroup';
import { Box, ClickAwayListener, Grid, styled } from '@mui/material';
import { useState } from 'react';

const departOptions = [
  {
    location: 'Dhaka, Bangladesh',
    airport: 'Shazalal int Airport',
    code: 'DAC',
    id: 'op1',
  },
  {
    location: 'Delhi, India',
    airport: 'Delhi Airport',
    code: 'DEL',
    id: 'op3',
  },
];

const arrivalOptions = [
  {
    location: 'Kopenhagen, Denmark',
    airport: 'Copenhagen Airport, Kastrup',
    code: 'CPH',
    id: 'op2',
  },
];

const StyledOptionsWrapper = styled(Box)({
  position: 'absolute',
  top: '100%',
  zIndex: 20,
});

// initial open option box state
const initialValue = {
  isOpenDepartOptions: false,
  isOpenArrivalOptions: false,
  isOpenArrivalDate: false,
  isOpenDepartDate: false,
};
const FlightTab = () => {
  const [openOptions, setOpenOptions] = useState(initialValue);
  const [selectedDepartValue, setSelectedDepartValue] =
    useState<SelectedValueType>({
      title: 'Dhaka, Bangladesh',
      subtitle: 'Shazalal int Airport',
    });
  const [selectedArrivalalue, setSelectedArrivalValue] =
    useState<SelectedValueType>({
      title: 'Delhi, India',
      subtitle: 'Delhi Airport',
    });

  // close option on outside click
  const handleCloseSelect = () => {
    setOpenOptions(initialValue);
  };
  // handle select departure option
  const handleSelectDepartOption = (option: SelectedValueType) => {
    setSelectedDepartValue(option);
    // close options after select
    handleCloseSelect();
  };
  // handle select arrival options
  const handleSelectArrivalOption = (option: SelectedValueType) => {
    setSelectedArrivalValue(option);
    // close options after select
    handleCloseSelect();
  };

  return (
    <ClickAwayListener onClickAway={handleCloseSelect}>
      <Box>
        <RadioButtonGroup />
        <Grid container spacing={1}>
          {/* depart from  */}
          <Grid
            item
            lg={4}
            onClick={() =>
              setOpenOptions({
                isOpenDepartOptions: true,
                isOpenArrivalOptions: false,
                isOpenArrivalDate: false,
                isOpenDepartDate: false,
              })
            }
          >
            <SelectButton selectedValue={selectedDepartValue} label="FROM" />
            <Condition condition={openOptions.isOpenDepartOptions}>
              <StyledOptionsWrapper>
                <SelectOptions
                  options={departOptions}
                  onOptionSelect={handleSelectDepartOption}
                />
              </StyledOptionsWrapper>
            </Condition>
          </Grid>
          {/* arrival to */}
          <Grid
            item
            lg={4}
            onClick={() =>
              setOpenOptions({
                isOpenDepartOptions: false,
                isOpenArrivalOptions: true,
                isOpenArrivalDate: false,
                isOpenDepartDate: false,
              })
            }
          >
            <SelectButton selectedValue={selectedArrivalalue} label="TO" />
            <Condition condition={openOptions.isOpenArrivalOptions}>
              <StyledOptionsWrapper>
                <SelectOptions
                  options={arrivalOptions}
                  onOptionSelect={handleSelectArrivalOption}
                />
              </StyledOptionsWrapper>
            </Condition>
          </Grid>
          {/* depart date */}
          <Grid item lg={2} position="relative">
            {/* <SelectButton title="From" subTitle="DAC" label="DIPARTURE DATE" /> */}
          </Grid>
          {/* arrival date */}
          <Grid item lg={2}>
            {/* <SelectButton title="From" subTitle="DAC" label="DIPARTURE DATE" /> */}
          </Grid>
        </Grid>
      </Box>
    </ClickAwayListener>
  );
};

export default FlightTab;
