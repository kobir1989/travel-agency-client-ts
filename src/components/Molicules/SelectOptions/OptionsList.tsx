import { useState } from 'react';
import Icons from '@/components/Atoms/Icons';
import { Box, List, Typography, Stack } from '@mui/material';
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
        pb: 2,
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
      <List sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 2 }}>
        {filteredOptions.map((option: OptionType) => (
          <StyledListItem
            key={option.id}
            onClick={(e) => {
              handleOptionSelect(option);
              e.stopPropagation();
            }}
          >
            <Stack direction="row" gap={1} alignItems="center">
              <Icons name="location" />
              <Box>
                <Typography
                  variant="h5"
                  fontSize="0.87rem"
                  lineHeight="1.3rem"
                  fontWeight={600}
                >
                  {option[titleKey]}
                </Typography>
                {subtitleKey && (
                  <Typography variant="body2" color="#898b94">
                    {option[subtitleKey]}
                  </Typography>
                )}
              </Box>
            </Stack>
          </StyledListItem>
        ))}
      </List>
    </Box>
  );
};

export default OptionsList;
