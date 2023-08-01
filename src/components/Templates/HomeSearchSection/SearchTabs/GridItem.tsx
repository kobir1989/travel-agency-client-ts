import Condition from '@/components/Atoms/Condition';
import Icons from '@/components/Atoms/Icons';
import { SelectButton } from '@/components/Molicules/SelectOptions';
import { GridItemProps } from '@/components/Templates/HomeSearchSection/types/types';
import { Grid, styled, Box, IconButton } from '@mui/material';

const StyledOptionsWrapper = styled(Box)({
  position: 'absolute',
  top: '110%',
  zIndex: 20,
});

const SwapButtonWrapper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  right: '-1.3rem',
  transform: 'translate(0,-50%)',
  boxShadow:
    'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
  borderRadius: '50%',
  background: theme.palette.info.light,
  zIndex: 50,
}));

const GridItem = ({
  onHandleClick,
  column,
  isPopupOpen,
  selectedValue,
  label,
  children,
  positionRight = 'unset',
  onSwapValue,
}: GridItemProps) => {
  return (
    <Grid position="relative" item lg={column} onClick={onHandleClick}>
      <SelectButton selectedValue={selectedValue} label={label} />
      <Condition condition={isPopupOpen}>
        <StyledOptionsWrapper
          right={positionRight}
          width={positionRight === '0' ? 'unset' : '100%'}
        >
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
