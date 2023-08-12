'use client';

import Icons from '@/components/Atoms/Icons';
import NextImage from '@/components/Atoms/NextImage';
import {
  Container,
  List,
  ListItem,
  Grid,
  IconButton,
  styled,
  Divider,
  Typography,
  Stack,
} from '@mui/material';

const StyledIconButton = styled(IconButton)({
  background: 'hsla(0,0%,100%,.2)',
  color: '#FFF',
});

const StyledFooter = styled('footer')(({ theme }) => ({
  background: theme.palette.primary.main,
  minHeight: '50vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

const Footer = () => {
  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item lg={3} xs={5} sm={6} md={3}>
            <List sx={(theme) => ({ color: theme.palette.info.light })}>
              <ListItem sx={{ fontSize: '1rem', fontWeight: 600 }}>
                Discover
              </ListItem>
              <ListItem>Home</ListItem>
              <ListItem>Terms</ListItem>
              <ListItem>About us</ListItem>
            </List>
          </Grid>

          <Grid item lg={3} xs={7} sm={6} md={3}>
            <List sx={(theme) => ({ color: theme.palette.info.light })}>
              <ListItem sx={{ fontSize: '1rem', fontWeight: 600 }}>
                We Accept
              </ListItem>
              <ListItem>
                <NextImage
                  imgUrl="/assets/icon-footer-mastercard.afdd5b7f.svg"
                  alt="master-card"
                  width={60}
                  height={40}
                />
                <NextImage
                  imgUrl="/assets/icon-footer-visa.0cc68109.svg"
                  alt="master-card"
                  width={60}
                  height={40}
                />
                <NextImage
                  imgUrl="/assets/icon-payment-union.d875933a.svg"
                  alt="master-card"
                  width={60}
                  height={40}
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item lg={4} xs={12} sm={6} md={3}>
            <List sx={(theme) => ({ color: theme.palette.info.light })}>
              <ListItem sx={{ fontSize: '1rem', fontWeight: 600 }}>
                Need Help?
              </ListItem>
              <ListItem>
                We&prime;re dedicated to providing exceptional support and
                ensuring your experience with us is seamless. Don&prime;t
                hesitate to contact us - we&prime;re just a call or message
                away!
              </ListItem>
            </List>
          </Grid>
          <Grid item lg={2} xs={12} sm={6} md={3}>
            <List sx={(theme) => ({ color: theme.palette.info.light })}>
              <ListItem sx={{ fontSize: '1rem', fontWeight: 600 }}>
                Contract Us
              </ListItem>
              <ListItem>Kobir.h.ritu@gmail.com</ListItem>
              <ListItem>+8801746668064</ListItem>
              <ListItem sx={{ display: 'flex', gap: 2 }}>
                <StyledIconButton>
                  <Icons name="linkedIn" />
                </StyledIconButton>
                <StyledIconButton>
                  <Icons name="gitHub" />
                </StyledIconButton>
                <StyledIconButton>
                  <Icons name="web" />
                </StyledIconButton>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
      <Divider
        sx={(theme) => ({
          borderColor: theme.palette.info.light,
          width: '100%',
          margin: '2rem 0',
        })}
      />
      <Container maxWidth="lg">
        <Stack direction="row" justifyContent="space-between">
          <Typography
            variant="body2"
            sx={(theme) => ({
              color: theme.palette.info.light,
              fontSize: '0.78rem',
              fontWeight: 100,
              letterSpacing: '0.3px',
            })}
          >
            ( Next.js & Typescript & MUI ) Demo Project
          </Typography>
          <Typography
            variant="body2"
            sx={(theme) => ({
              color: theme.palette.info.light,
              fontSize: '0.78rem',
              fontWeight: 100,
              letterSpacing: '0.3px',
            })}
          >
            &copy;Copyright {new Date().getFullYear()} Kabir Hossain
          </Typography>
        </Stack>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
