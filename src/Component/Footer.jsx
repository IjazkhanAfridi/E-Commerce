import {
  Facebook,
  Instagram,
  LinkedIn,
  Mail,
  Phone,
  Room,
  Twitter,
} from '@mui/icons-material';
import {
  Box,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <>
      <Box sx={{ display: 'flex', width: '100%', m: '10px 5px' }}>
        <Box
          sx={{ display: 'flex', flexDirection: 'column', flex: 1, p: '20px' }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography pb={1} variant='h4'>
              BuyMe.
            </Typography>
            <Typography variant='body1'>
              dolor sit amet consectetur adipisicing elit. Neque blanditiis
              dicta laboriosam soluta cum eos voluptatum consectetur ex possimus
              aliquid, minus rerum fugiat praesentium autem odio, voluptates ut
              iure eligendi!
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                width: '50%',
                mt: '10px',
              }}
            >
              <Facebook />
              <Instagram />
              <Twitter />
              <LinkedIn />
            </Box>
          </Box>
        </Box>
        <Box sx={{ flex: 1, p: '20px' }}>
          <Typography pb={1} variant='h5' pr={1}>
            Useful Links
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <ListItem disablePadding sx={{ width: '50%' }}>
              <ListItemButton>
                <ListItemText primary={'Home'} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ width: '50%' }}>
              <ListItemButton>
                <ListItemText primary={'Cart'} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ width: '50%' }}>
              <ListItemButton>
                <ListItemText primary={'Mens'} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ width: '50%' }}>
              <ListItemButton>
                <ListItemText primary={'Womens'} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ width: '50%' }}>
              <ListItemButton>
                <ListItemText primary={'Kids'} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ width: '50%' }}>
              <ListItemButton>
                <ListItemText primary={'Accessories'} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ width: '50%' }}>
              <ListItemButton>
                <ListItemText primary={'Trending'} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ width: '50%' }}>
              <ListItemButton>
                <ListItemText primary={'Account'} />
              </ListItemButton>
            </ListItem>
          </Box>
        </Box>
        <Box
          sx={{ display: 'flex', flexDirection: 'column', flex: 1, p: '20px' }}
        >
          <Typography pb={1} variant='h5' pr={1}>
            Contact
          </Typography>
         <ListItem disablePadding sx={{pt:"20px"}}>
            <Room sx={{ mr: '10px' }} />
            <ListItemText primary={'kohat , KPK , Pakistan'} />
          </ListItem>
         <ListItem disablePadding sx={{pt:"20px"}}>
            <Phone sx={{ mr: '10px' }} />
            <ListItemText primary={'+92 345 5311063'} />
          </ListItem>
         <ListItem disablePadding sx={{pt:"20px"}}>
            <Mail sx={{ mr: '10px' }} />
            <ListItemText primary={'iafridi640@gmail.com'} />
          </ListItem>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
