import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { update } from '../redux/userSlice';

const Register = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const updateName = (e) => {
    e.preventDefault();
    dispatch(update({ name }));
  };
  return (
    <>
      <Box
        sx={{
          height: '100vh',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: 'rgba(255,255,255,0.5)',
        }}
      >
        <Box
          sx={{
            bgcolor: '#F9F9F9',
            opacity:"0.8",
            width: {md:'65%',xs:"100%"},
            height: {md:'65vh',xs:"100%"},
            borderRadius: '10px',
            dispaly: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p:"10px",
            boxShadow:
              'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
          }}
        >
          <Typography variant='h4' p={2} sx={{justifyContent:"center",display:"flex"}}>Register</Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
              height: '60%',
            }}
          >
            <TextField
              sx={{
                width: {sm:'48%',xs:"96%"},
                mt: '10px',
                borderColor: 'white !important',
                outlineColor: 'white !important',
              }}
              id='outlined-basic'
              label='First Name'
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              sx={{ width: {sm:'48%',xs:"96%"}, mt: '10px' }}
              id='outlined-basic'
              label='Last Name'
              variant='outlined'
            />
            <TextField
              sx={{ width:{sm:'48%',xs:"96%"}, mt: '10px' }}
              id='outlined-basic'
              label='User Name'
              variant='outlined'
            />
            <TextField
              sx={{ width: {sm:'48%',xs:"96%"}, mt: '10px' }}
              id='outlined-basic'
              label='Email'
              type='email'
              variant='outlined'
            />
            <TextField
              sx={{ width: {sm:'48%',xs:"96%"}, mt: '10px' }}
              id='outlined-password-input'
              label='Password'
              type='password'
              autoComplete='current-password'
            />
            <TextField
              sx={{ width: {sm:'48%',xs:"96%"}, mt: '10px' }}
              id='outlined-password-input'
              label='Confirm Password'
              type='password'
              autoComplete='current-password'
            />
          </Box>
          <Button
            sx={{
              color: 'white',
              bgcolor: 'black',
              border: '2px solid gray',
              mt:{xs:"10px"},
              '&:hover': { bgcolor: 'white', color: 'black' },
              ml: '10px',
            }}
            onClick={updateName}
            onClose={updateName}
          >
            {' '}
            Register{' '}
          </Button>
          <Typography sx={{ m: '20px' }}>
            I have already Account :<Link to={'/login'}>SignIn</Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Register;
