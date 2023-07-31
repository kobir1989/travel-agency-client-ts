import { useState } from 'react';
import Icons from '@/components/Atoms/Icons';
import { Box, List, Typography } from '@mui/material';
import { StyledInput, StyledListItem, StyledSpan } from './styles';
import { OptionsListProps, OptionType } from './types';

const OptionsList = ({
  options,
  onOptionSelect,
  placeholder,
  titleKey,
  subtitleKey,
}: OptionsListProps) => {
  const [searchKey, setSearchKey] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);

  // filter the options list based on search key
  const filterOptions = () => {
    const filteredList = options.filter((option) =>
      option[titleKey].toLowerCase().includes(searchKey.toLowerCase()),
    );
    setFilteredOptions(filteredList);
  };

  const handleOptionSelect = (option: OptionType) => {
    onOptionSelect({
      title: option[titleKey],
      subtitle: option[subtitleKey],
      location: '',
      id: '',
    });
  };

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
          placeholder={placeholder}
          value={searchKey}
          onChange={(e) => {
            setSearchKey(e.target.value);
            filterOptions();
          }}
        />
        <StyledSpan>
          <Icons name="search" size="1.2rem" />
        </StyledSpan>
      </Box>
      <List>
        {filteredOptions.map((option: OptionType) => (
          <StyledListItem
            key={option.id}
            onClick={(e) => {
              handleOptionSelect(option);
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
                {option[titleKey]}
              </Typography>
              <Typography variant="body2" color="#898b94">
                {option[subtitleKey]}
              </Typography>
            </Box>
            <Typography
              variant="body1"
              fontWeight={600}
              fontSize="0.9rem"
              color="#a2a8c0"
            >
              {option.location}
            </Typography>
          </StyledListItem>
        ))}
      </List>
    </Box>
  );
};

export default OptionsList;
