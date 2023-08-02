'use client';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Box, Typography, IconButton } from '@mui/material';
import { MuiDatePickerProps } from '@/components/Molicules/MuiDatePicker/types';
import dayjs from 'dayjs';
import Icons from '@/components/Atoms/Icons';

const MuiDatePicker = ({
  lable,
  onDateValue,
  onClose,
  minDate,
  value,
}: MuiDatePickerProps) => {
  return (
    <Box
      sx={(theme) => ({
        background: theme.palette.info.light,
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
        borderRadius: '6px',
        width: '100%',
        height: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '20rem',
        },
      })}
      onClick={(e) => e.stopPropagation()}
    >
      <IconButton
        onClick={onClose}
        sx={(theme) => ({
          position: 'absolute',
          left: '0.5rem',
          top: '0.4rem',
          [theme.breakpoints.up('sm')]: { display: 'none' },
        })}
      >
        <Icons name="backArrow" size="1.2rem" />
      </IconButton>
      <Typography
        variant="h5"
        fontSize="1rem"
        textAlign="center"
        pt={2}
        fontWeight={500}
      >
        {lable}
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          value={value}
          onChange={(newValue) => onDateValue(newValue)}
          disablePast
          maxDate={dayjs(new Date()).add(3, 'months')}
          minDate={minDate}
          views={['day']}
        />
      </LocalizationProvider>
    </Box>
  );
};

export default MuiDatePicker;
