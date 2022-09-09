import { Box, Typography } from '@mui/material';
import React from 'react';
import Products from './Products';
import { images } from '../dummyData';

const Product = () => {
  return (
    <Box>
      <Typography p={1} color={'black'} textAlign={'center'}>
        Products
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          mt: '5px',
        }}
      >
        {images.map((item) => (
          <Products item={item} key={item.id} />
        ))}
      
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
