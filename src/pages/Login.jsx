import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const LogIn = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${'https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&w=400'})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          objectFit: 'cover',
        }}
      >
        <Box
          sx={{
            height: '100vh',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: 'rgba(0,0,0,0.5)',
          }}
        >
          <Box
            sx={{
              bgcolor: 'rgba(255,255,255,0.5)',
              width: '50%',
              height: '50vh',
              borderRadius: '10px',
            }}
          >
            <Box
              sx={{
                justifyContent: 'center',
                alignItems:"center",
                textAlign:"center",
                mt:"30px",
              }}
            >
              <TextField
                sx={{ width: '80%', mt: '20px' }}
                id='outlined-basic'
                label='Email'
                type='email'
                variant='outlined'
              />
              <TextField
                sx={{ width: '80%', mt: '20px' }}
                id='outlined-password-input'
                label='Password'
                type='password'
                autoComplete='current-password'
              />
            </Box>
            <Button
              sx={{
                color: 'white',
                bgcolor: 'black',
                border: '2px solid gray',
                '&:hover': { bgcolor: 'white', color: 'black' },
                ml:"10%",
                mt:"20px",
                width:"20%",
                
              }}
            >
              Log In
            </Button>
            <Typography sx={{ m: '20px', }}>
              Don't have Account :<Button>Register Now</Button>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LogIn;
