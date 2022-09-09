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
import { Mail, Notifications, SearchSharp, ShoppingCartOutlined } from '@mui/icons-material';
import React from 'react';
// import { useSelector } from 'react-redux';

const StyledToolBar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Search = styled(Box)(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  border: '2px solid gray',
  borderRadius: "20px",
  display:"flex",
  justifyContent:"center",
  alignItem:"center",
  textAlign:"center"
}));
const Icon = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  gap: '20px',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));
// const Userbox = styled(Box)(({ theme }) => ({
//   display:'flex',
//   alignItems:'center',
//   gap:"10px",
//   [theme.breakpoints.up("sm")]:{
//     display:'none',
//   }
//   }));

export default function Navbar() {
  // const name = useSelector((state)=>state.user.name)

  return (
    <AppBar position='sticky' sx={{ bgcolor: 'white' }}>
      <StyledToolBar>
      <Box sx={{display:"flex",alignItem:"center",}}>
      <Typography sx={{color:"black", m:"5px"}}>EN</Typography>
        <Search>
          <InputBase placeholder='Search ...' />
          <SearchSharp sx={{color:"black", m:"auto 0px",cursor:"pointer"}}/>
        </Search>
      </Box>
        <Typography p={2} color={'black'}>
          BuyMe
        </Typography>
        <Icon>
          <Typography color={'black'} sx={{cursor:"pointer"}}>Register</Typography>
          <Typography color={'black'} sx={{cursor:"pointer"}}>Login</Typography>
          <Badge badgeContent={4} color='error'>
            <ShoppingCartOutlined sx={{ color: 'black',cursor:"pointer" }} />
          </Badge>
        </Icon>
        {/* <Avatar sx={{width:28, height:28}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />     
          <Typography color={'white'}>
         {name}
        </Typography>
        <Userbox >
          <Avatar sx={{width:28, height:28}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Typography color={'white'}>
          {name}
        </Typography>
          </Userbox> */}
      </StyledToolBar>
    </AppBar>
  );
}
