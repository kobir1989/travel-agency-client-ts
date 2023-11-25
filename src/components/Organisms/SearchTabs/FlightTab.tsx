import RadioButtonGroup from '@/components/Atoms/RadioButtons';
import { Box, Grid } from '@mui/material';
import { setFlightType } from '@/redux/features/searchFlight/searhFlightSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store/store';
import Condition from '@/components/Atoms/Condition';
import Icons from '@/components/Atoms/Icons';
import {
  StyledH3,
  StyledH4,
  StyledIconButton,
  StyledSpan,
  gridItemWrapperStyles,
} from './styles';

const FlightTab = () => {
  const dispatch = useDispatch();
  const { flightType } = useSelector((state: RootState) => state.searchFlight);
  // flight type radio button onChange handler
  const handleFlightType = (event: React.SyntheticEvent<Element, Event>) => {
    dispatch(setFlightType((event.target as HTMLInputElement).value));
  };

  return (
    <Box>
      <RadioButtonGroup value={flightType} onChangeHandler={handleFlightType} />
      <Grid container spacing={2}>
        {/* flight from */}
        <Grid
          item
          lg={4}
          md={flightType === 'roundWay' ? 3.5 : 4}
          sm={6}
          xs={12}
        >
          <Box sx={gridItemWrapperStyles} position="relative">
            <StyledSpan>FROM</StyledSpan>
            <StyledH3 variant="h3">Dhaka</StyledH3>
            <StyledH4 variant="h4">DAC, Hazrat Shazalal Airport</StyledH4>
            {/* Swap The Value Flight from - to  */}
            <StyledIconButton>
              <Icons name="swap" size="1.2rem" />
            </StyledIconButton>
          </Box>
        </Grid>

        {/* flight To */}
        <Grid
          item
          lg={4}
          md={flightType === 'roundWay' ? 3.5 : 4}
          sm={6}
          xs={12}
        >
          <Box sx={gridItemWrapperStyles}>
            <StyledSpan>TO</StyledSpan>
            <StyledH3 variant="h3">Dhaka</StyledH3>
            <StyledH4 variant="h4">DAC, Hazrat Shazalal Airport</StyledH4>
          </Box>
        </Grid>
        {/* Journey Date */}
        <Grid
          item
          lg={flightType === 'roundWay' ? 2 : 4}
          md={flightType === 'roundWay' ? 2.5 : 4}
          sm={flightType === 'roundWay' ? 6 : 12}
          xs={flightType === 'roundWay' ? 6 : 12}
        >
          <Box sx={gridItemWrapperStyles}>
            <StyledSpan>JOURNEY DATE</StyledSpan>
            <StyledH3 variant="h3">25 Nov. 2023</StyledH3>
            <StyledH4 variant="h4">Thursday</StyledH4>
          </Box>
        </Grid>
        {/* Return date show when round way selectd */}
        <Condition condition={flightType === 'roundWay'}>
          <Grid item lg={2} md={2.5} sm={6} xs={6}>
            <Box sx={gridItemWrapperStyles}>
              <StyledSpan>RETURN DATE</StyledSpan>
              <StyledH3 variant="h3">29 Nov. 2023</StyledH3>
              <StyledH4 variant="h4">Wednesday</StyledH4>
            </Box>
          </Grid>
        </Condition>
      </Grid>
    </Box>
  );
};

export default FlightTab;
