import Condition from '@/components/Atoms/Condition';
import Icons from '@/components/Atoms/Icons';
import { SelectButton } from '@/components/Molicules/SelectOptions';
import { GridItemProps } from '@/components/Templates/HomeSearchSection/types/types';
import { Grid, styled, Box, IconButton } from '@mui/material';

const StyledOptionsWrapper = styled(Box)(({ theme, right }) => ({
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100vw',
  height: '100vh',
  zIndex: 100,
  [theme.breakpoints.up('sm')]: {
    position: 'absolute',
    top: '110%',
    left: right === '0' ? 'unset' : '0',
    zIndex: 20,
    width: right === '0' ? 'unset' : '100%',
    height: 'unset',
  },
}));

const SwapButtonWrapper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: '-1.5rem',
  left: '50%',
  transform: 'translate(-50%,0)',
  boxShadow:
    'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
  borderRadius: '50%',
  background: theme.palette.info.light,
  zIndex: 50,
  [theme.breakpoints.up('sm')]: {
    top: '50%',
    right: '-1.3rem',
    left: 'unset',
    bottom: 'unset',
    transform: 'translate(0,-50%)',
  },
}));

const GridItem = ({
  onHandleClick,
  isPopupOpen,
  selectedValue,
  label,
  children,
  positionRight = 'unset',
  onSwapValue,
  lg,
  sm,
  md,
  xs,
}: GridItemProps) => {
  return (
    <Grid
      position="relative"
      item
      lg={lg}
      md={md}
      sm={sm}
      xs={xs}
      onClick={onHandleClick}
    >
      <SelectButton selectedValue={selectedValue} label={label} />
      <Condition condition={isPopupOpen}>
        <StyledOptionsWrapper right={positionRight}>
          {children}
        </StyledOptionsWrapper>
      </Condition>
      {/* swap value button will be shown if onSwapValue function provided */}
      <Condition condition={!!onSwapValue}>
        <SwapButtonWrapper onClick={(e) => e.stopPropagation()}>
          <IconButton onClick={onSwapValue}>
            <Icons name="swap" size="1.2rem" />
          </IconButton>
        </SwapButtonWrapper>
      </Condition>
    </Grid>
  );
};

export default GridItem;
