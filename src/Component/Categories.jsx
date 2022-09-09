import styled from '@emotion/styled';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';
const Categories = ({ item }) => {
  return (
    <>
      <CardMedia
        component='img'
        height='100%'
        image={item.img}
        alt='Paella dish'
      />
      <CardContent
        sx={{
          position: 'absolute',
          top: '40%',
          right: '10px',
          left: '10px',
          textAlign: 'center',
        }}
      >
        <Typography color='White'>
          {item.desc}
        </Typography>
        <Button sx={{ bgcolor: 'white', color: 'black' }}>BuyNow</Button>
      </CardContent>
    </>
  );
};

export default Categories;
