import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { update } from '../redux/userSlice';


const LogIn = () => {
  const [name, setName]  = useState("");
  const dispatch = useDispatch()

  const updateName = (e)=>{
    e.preventDefault();
    dispatch(update({name}))
  }
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
                    <Typography variant='h4' p={2} sx={{justifyContent:"center",display:"flex"}}>Log In</Typography>

            <Box
              sx={{
                justifyContent: 'center',
                alignItems:"center",
                textAlign:"center",
                mt:"30px",
              }}
            >
              <TextField
                sx={{ width: {sm:'80%',xs:"100%"}, mt: '20px' }}
                id='outlined-basic'
                label='UserName'
                type='username'
                variant='outlined'
                onChange={(e)=>setName(e.target.value)}
              />
              <TextField
                sx={{ width: {sm:'80%',xs:"100%"}, mt: '20px' }}
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
                ml:{sm:"10%"},
                mt:"20px",
                width:"20%",
              }}
                onClick={updateName}
            >
              Log In
            </Button>
            <Typography sx={{ m: '20px', }}>
              Don't have Account :<Link to={"/register"}>Register Now</Link>
            </Typography>
          </Box>
        </Box>
    </>
  );
};

export default LogIn;
