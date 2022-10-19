import { Box, Typography } from '@mui/material';
import React from 'react';
import Products from './Products';
const Product = () => {
  return (
    <Box>
      <Typography p={2} variant={'h4'} color={'black'} textAlign={'center'}>
        <u>PRODUCTS</u>
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          mt: '7px',
          mb: '7px',
        }}
      >
        <Products />
      </Box>

      <hr
        style={{
          height: '1px',
          color: 'black',
          marginTop: '15px',
          backgroundColor: 'gray',
        }}
      />
    </Box>
  );
};

export default Product;
