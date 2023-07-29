'use client';

import Icons from '@/components/Atoms/Icons';
import NextImage from '@/components/Atoms/NextImage';
// import AvaterDropdown from '@/components/Organisms/Navigation/AvaterDropdown';
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Stack,
  Box,
  IconButton,
  styled,
  // Grow,
  // ClickAwayListener,
  // Avatar,
} from '@mui/material';
import Link from 'next/link';

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  fontSize: '0.9rem',
  fontWeight: 600,
  gap: '0.2rem',
  color: theme.palette.primary.main,
}));

const Navigation = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        background: '#ffffffd1',
        boxShadow: '',
        height: '5rem',
        backdropFilter: 'blur(2px)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', height: '5rem' }}>
          <Box>
            <NextImage
              imgUrl="/assets/logo.svg"
              alt="logo"
              width={180}
              height={50}
            />
          </Box>
          <Stack direction="row" gap={4}>
            <Link href="/">
              <StyledIconButton
                sx={{ '& svg': { transform: 'rotate(60deg)' } }}
              >
                <Icons name="flight" /> Flight
              </StyledIconButton>
            </Link>
            <Link href="/">
              <StyledIconButton>
                <Icons name="hotel" /> Hotel
              </StyledIconButton>
            </Link>
            <Link href="/">
              <StyledIconButton>
                <Icons name="tour" /> Tour
              </StyledIconButton>
            </Link>
          </Stack>
          <Box position="relative">
            {/* <IconButton>
              <Avatar src="/assets/user.jpg" />
            </IconButton> */}
            <Button variant="contained">Sign in</Button>
            {/* <Grow
                in={toggleDropdown}
                style={{
                  transformOrigin: 'top',
                }}
              >
                <Box sx={{ position: 'absolute', top: '3.5rem', right: '0' }}>
                  <AvaterDropdown />
                </Box>
              </Grow> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;
