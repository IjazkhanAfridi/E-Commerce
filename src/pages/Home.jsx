import { Box } from '@mui/material';
import React from 'react';
import CategoryItem from '../Component/CategoryItem';
import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar';
import Product from '../Component/Product';
import Slider from '../Component/Slider';

const Home = () => {
  return (
    <Box>
      <Navbar />
      <Slider />
      <CategoryItem />
      <Product />
      <Footer />
    </Box>
  );
};

export default Home;
