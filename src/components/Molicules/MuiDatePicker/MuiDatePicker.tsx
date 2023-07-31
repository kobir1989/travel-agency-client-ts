'use client';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Box, Typography } from '@mui/material';
import { MuiDatePickerProps } from '@/components/Molicules/MuiDatePicker/types';
import dayjs from 'dayjs';

const MuiDatePicker = ({
  isReturn,
  onDateValue,
  minDate,
  value,
}: MuiDatePickerProps) => {
  return (
    <Box
      sx={(theme) => ({
        background: theme.palette.info.light,
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
        borderRadius: '6px',
        width: '20rem',
      })}
      onClick={(e) => e.stopPropagation()}
    >
      <Typography
        variant="h5"
        fontSize="1rem"
        textAlign="center"
        pt={2}
        fontWeight={500}
      >
        Select {isReturn ? 'Arrival' : 'Departure'} date
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
