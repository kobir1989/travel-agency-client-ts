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
import { useCurrentScroll } from '@/hooks/useCurrentScroll';
import Condition from '@/components/Atoms/Condition';

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  fontSize: '0.9rem',
  fontWeight: 600,
  gap: '0.2rem',
  color: theme.palette.primary.main,
}));

const Navigation = () => {
  const currentScrollPosition = useCurrentScroll();
  return (
    <AppBar
      position="fixed"
      sx={{
        background: currentScrollPosition > 200 ? '#ffffffd1' : 'none',
        boxShadow:
          currentScrollPosition > 200
            ? ' rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
            : 'none',
        height: '5rem',
        backdropFilter: currentScrollPosition > 200 ? 'blur(2px)' : 'none',
        transition: 'all 0.2s ease-in-out',
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
          <Condition condition={currentScrollPosition > 200}>
            <Stack direction="row" gap={4}>
              <Link href="/">
                <StyledIconButton>
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
          </Condition>

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
