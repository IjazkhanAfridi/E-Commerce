import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import { SearchSharp, ShoppingCartOutlined } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const StyledToolBar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    width: '80%',
  },
}));

const Search = styled(Box)(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  border: '2px solid gray',
  borderRadius: '20px',
  display: 'none',
  justifyContent: 'center',
  alignItem: 'center',
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));
const Icon = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));
const Userbox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
}));

export default function Navbar() {
  const item = useSelector((state) => state.cart);
  const name = useSelector((state) => state.user.name);

  return (
    <AppBar
      position='sticky'
      sx={{
        bgcolor: '#F9F9F9',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <StyledToolBar >
          <Box sx={{ display: {md:'flex',xs:"none"}, alignItem: 'center' }}>
            <Typography sx={{ color: 'black', m: '5px' }}>EN</Typography>
            <Search>
              <InputBase placeholder='Search ...' />
              <SearchSharp
                sx={{ color: 'black', m: 'auto 0px', cursor: 'pointer' }}
              />
            </Search>
          </Box>
          <Link to={'/'} style={{ textDecoration: 'none' }}>
            <Typography p={2} color={'black'} sx={{ cursor: 'pointer' }}>
              BuyMe
            </Typography>
          </Link>
          <Icon>
            {name === ' ' ? (
              <>
                <Link to={'/register'} style={{ textDecoration: 'none' }}>
                  {' '}
                  <Typography color={'black'} sx={{ cursor: 'pointer' }}>
                    Register
                  </Typography>
                </Link>
                <Link to={'/login'} style={{ textDecoration: 'none' }}>
                  {' '}
                  <Typography color={'black'} sx={{ cursor: 'pointer' }}>
                    Login
                  </Typography>
                </Link>
              </>
            ) : (
              <>

                <Userbox>
                  <Avatar
                    sx={{ width: 28, height: 28 }}
                    alt='Remy Sharp'
                    src='/static/images/avatar/1.jpg'
                  />
                  <Typography color={'black'}>{name}</Typography>
                </Userbox>
              </>
            )}
            <Badge badgeContent={item.length} color='error'>
              <Link to={'/cart'} style={{ textDecoration: 'none' }}>
                {' '}
                <ShoppingCartOutlined
                  sx={{ color: 'black', cursor: 'pointer' }}
                />
              </Link>
            </Badge>
          </Icon>
        </StyledToolBar>
      </Box>
    </AppBar>
  );
}
