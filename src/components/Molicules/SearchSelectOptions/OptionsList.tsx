import { useState } from 'react';
import Icons from '@/components/Atoms/Icons';
import { Box, List, Typography, Stack, IconButton } from '@mui/material';
import { StyledInput, StyledListItem, StyledSpan } from './styles';
import { OptionsListProps, OptionType } from './types';

const OptionsList = ({
  options,
  onOptionSelect,
  placeholder,
  titleKey,
  subtitleKey,
  onClose,
}: OptionsListProps) => {
  const [searchKey, setSearchKey] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);

  // filter the options list based on search key
  const filterOptions = (key: string) => {
    const filteredList = options.filter((option) =>
      option[titleKey || subtitleKey].toLowerCase().includes(key.toLowerCase()),
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
        width: '100%',
        height: '100%',
        zIndex: 100,
        pb: 2,
        [theme.breakpoints.up('sm')]: {
          width: '98.5%',
        },
      })}
      onClick={(e) => e.stopPropagation()}
    >
      <Box position="relative">
        <Box
          sx={(theme) => ({
            position: 'absolute',
            left: '0.5rem',
            top: '50%',
            transform: 'translate(0,-50%)',

            [theme.breakpoints.up('sm')]: {
              display: 'none',
            },
          })}
        >
          <IconButton onClick={onClose}>
            <Icons name="backArrow" size="1.1rem" />
          </IconButton>
        </Box>
        <StyledInput
          placeholder={placeholder}
          value={searchKey}
          onChange={(e) => {
            setSearchKey(e.target.value);
            filterOptions(e.target.value);
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
