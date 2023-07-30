'use client';

import Icons from '@/components/Atoms/Icons';
import {
  OptionsType,
  SlectOptionsProps,
} from '@/components/Molicules/SelectOptions/types';
import { Box, Typography, styled, List, ListItem } from '@mui/material';
import { useState } from 'react';

const StyledInput = styled('input')(({ theme }) => ({
  padding: '1.3rem 1.3rem 1rem 3rem',
  borderTop: 'none',
  borderLeft: 'none',
  borderRight: 'none',
  borderBottom: '1px solid #D1D1D1',
  width: '100%',
  '&::placeholder': {
    color: '#a2a8c0',
  },
  color: theme.palette.info.dark,
  fontSize: '0.9rem',
  letterSpacing: '0.2px',
}));

const StyledListItem = styled(ListItem)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  cursor: 'pointer',
});

const StyledSpan = styled('span')({
  position: 'absolute',
  left: '1rem',
  top: '50%',
  transform: 'translate(0,-50%)',
  lineHeight: '0',
  color: '#a2a8c0',
});

// custom select options component
const SelectOptions = ({ options, onOptionSelect }: SlectOptionsProps) => {
  const [searchKey, setSearchKey] = useState('');
  const [dipartAirportsList] = useState(options);

  // filter the options list based on search key
  const filteredDepartList = dipartAirportsList.filter(
    (list) =>
      list.location.toLowerCase().includes(searchKey.toLowerCase()) ||
      list.code.toLowerCase().includes(searchKey.toLowerCase()) ||
      list.airport.toLowerCase().includes(searchKey.toLowerCase()),
  );

  return (
    <Box
      sx={(theme) => ({
        background: theme.palette.info.light,
        borderRadius: '0 0 4px 4px',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
        width: '25rem',
      })}
    >
      <Box position="relative">
        <StyledInput
          placeholder="Search..."
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <StyledSpan>
          <Icons name="search" size="1.2rem" />
        </StyledSpan>
      </Box>
      <List>
        {filteredDepartList.map((list: OptionsType) => (
          <StyledListItem
            key={list.id}
            onClick={(e) => {
              onOptionSelect({ title: list.location, subtitle: list.airport });
              e.stopPropagation();
            }}
          >
            <Box>
              <Typography
                variant="h5"
                fontSize="0.87rem"
                lineHeight="1.3rem"
                fontWeight={600}
              >
                {list?.location}
              </Typography>
              <Typography variant="body2" color="#898b94">
                {list.airport}
              </Typography>
            </Box>
            <Typography
              variant="body1"
              fontWeight={600}
              fontSize="0.9rem"
              color="#a2a8c0"
            >
              {list.code}
            </Typography>
          </StyledListItem>
        ))}
      </List>
    </Box>
  );
};

export default SelectOptions;
