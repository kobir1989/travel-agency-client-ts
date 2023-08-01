'use client';

import Icons from '@/components/Atoms/Icons';
import {
  closeOptionPopups,
  setAddGuests,
  setAddRoom,
  setSubtractGuests,
  setSubtractRoom,
} from '@/redux/features/searchHotel/searchHotelSlice';
import { RootState } from '@/redux/store/store';
import {
  Button,
  Box,
  List,
  ListItem,
  Stack,
  styled,
  IconButton,
  Divider,
} from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const StyledListItem = styled(ListItem)({
  fontSize: '0.9rem',
  fontWeight: 600,
  display: 'flex',
  justifyContent: 'space-between',
});

const StyledIconButton = styled(IconButton)({
  boxShadow:
    'rgba(43, 45, 165, 0.377) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
  padding: 0,
});

const StyledSpan = styled('span')({
  fontSize: '1rem',
  fontWeight: 600,
});

const AddRooms = () => {
  const { roomCount, guests } = useSelector(
    (state: RootState) => state.searchHotel,
  );
  const dispatch = useDispatch();
  return (
    <Box
      width="25rem"
      sx={(theme) => ({
        background: theme.palette.info.light,
        borderRadius: '8px',
      })}
      onClick={(e) => e.stopPropagation()}
    >
      <List
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          pt: 2,
        }}
      >
        <StyledListItem>
          Room
          <Stack direction="row" alignItems="center" gap={3}>
            <StyledIconButton onClick={() => dispatch(setAddRoom())}>
              <Icons name="add" size="1.3rem" color="#1c3c6b" />
            </StyledIconButton>
            <StyledSpan>{roomCount}</StyledSpan>
            <StyledIconButton onClick={() => dispatch(setSubtractRoom())}>
              <Icons name="subtract" size="1.3rem" color="#1c3c6b" />
            </StyledIconButton>
          </Stack>
        </StyledListItem>
        <Divider sx={{ width: '100%' }} />
        <StyledListItem>
          Guests
          <Stack direction="row" alignItems="center" gap={3}>
            <StyledIconButton onClick={() => dispatch(setAddGuests())}>
              <Icons name="add" size="1.3rem" color="#1c3c6b" />
            </StyledIconButton>
            <StyledSpan>{guests}</StyledSpan>
            <StyledIconButton onClick={() => dispatch(setSubtractGuests())}>
              <Icons name="subtract" size="1.3rem" color="#1c3c6b" />
            </StyledIconButton>
          </Stack>
        </StyledListItem>
        <Divider sx={{ width: '100%' }} />
      </List>

      <Stack
        justifyContent="flex-end"
        alignItems="flex-end"
        pb={2}
        pt={1}
        pr={2}
      >
        <Button
          variant="secondary"
          sx={{ padding: '0.3rem' }}
          onClick={() => dispatch(closeOptionPopups())}
        >
          Done
        </Button>
      </Stack>
    </Box>
  );
};

export default AddRooms;