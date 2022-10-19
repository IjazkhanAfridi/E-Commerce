import { Box } from '@mui/material';
import React from 'react';
import CategoryItem from '../Component/CategoryItem';
import Product from '../Component/Product';
import Slider from '../Component/Slider';

const Home = () => {
  return (
    <>
    <Box sx={{width:"100%"}}>
      <Slider />
      <CategoryItem />
      <Product />
     </Box>
    </>
  );
};

export default Home;
