'use client';

import NextImage from '@/components/Atoms/NextImage';
import Link from 'next/link';
// import AvaterDropdown from '@/components/Organisms/Navigation/AvaterDropdown';
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Box,
  // Grow,
  // ClickAwayListener,
  // Avatar,
} from '@mui/material';

import { useCurrentScroll } from '@/hooks/useCurrentScroll';

const Navigation = () => {
  const currentScrollPosition = useCurrentScroll();
  return (
    <AppBar
      position="fixed"
      sx={{
        background: currentScrollPosition > 50 ? '#ffffffd1' : 'none',
        boxShadow:
          currentScrollPosition > 50
            ? ' rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
            : 'none',
        height: '5rem',
        backdropFilter: currentScrollPosition > 50 ? 'blur(2px)' : 'none',
        transition: 'all 0.2s ease-in-out',
        zIndex: 50,
      }}
    >
      <Container maxWidth="lg" disableGutters>
        <Toolbar sx={{ justifyContent: 'space-between', height: '5rem' }}>
          <Link href="/">
            <NextImage
              imgUrl="/assets/logo.svg"
              alt="logo"
              width={180}
              height={50}
            />
          </Link>
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
