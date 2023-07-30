import Icons from '@/components/Atoms/Icons';
import {
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Divider,
  Typography,
} from '@mui/material';

const AvaterDropdown = () => {
  return (
    <List
      sx={{
        background: '#FFF',
        minWidth: '14rem',
        borderRadius: '8px',
        boxShadow: ' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
      }}
    >
      <ListItem sx={{ gap: 1 }}>
        <Avatar src="/assets/user.png" sx={{ width: 50, height: 50 }} />
        <Box>
          <Typography variant="body1" fontWeight={600}>
            Kabir Hossain
          </Typography>
          <Typography variant="body2" color="#918f8f">
            test@test.com
          </Typography>
        </Box>
      </ListItem>
      <Divider />
      <ListItem disablePadding>
        <ListItemButton sx={{ gap: 1 }}>
          <Icons name="account" color="#52606d" size="1rem" />
          <ListItemText primary="Profile" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton sx={{ gap: 1 }}>
          <Icons name="discount" color="#52606d" size="1rem" />
          <ListItemText primary="My Bookings" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton sx={{ gap: 1 }}>
          <Icons name="logout" color="#52606d" size="1rem" />
          <ListItemText primary="Sign Out" />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default AvaterDropdown;
