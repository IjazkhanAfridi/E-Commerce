import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import React from 'react';
import Product from "../Component/Product"
const ProductList = () => {
  const [colorselect, setColrselect] = React.useState('');
  const [sizeselect, setSizeselect] = React.useState('');
  const [sortselect, setsortselect] = React.useState('');

  const colorChange = (event) => {
    setColrselect(event.target.value);
  };
  const sizeChange = (event) => {
    setSizeselect(event.target.value);
  };
  const sortChange = (event) => {
    setsortselect(event.target.value);
  };
  return (
    <>
      <Box>
        <Box sx={{ m: '0px 10px' }}>
          <Typography variant='h4' p={2} mt={'20px'}>
            Shoes
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              mt: '10px',
            }}
          >
            <Box sx={{ display: 'flex' }}>
              <Typography variant='h6' p={2}>
                Filter Product
              </Typography>
              <FormControl sx={{ m: 1, minWidth: 100 }} size='small'>
                <InputLabel id='select'>Color</InputLabel>
                <Select
                  labelId='select'
                  id='select'
                  value={colorselect}
                  label='Color'
                  onChange={colorChange}
                >
                  <MenuItem value=''>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={'white'}>White</MenuItem>
                  <MenuItem value={'red'}>Red</MenuItem>
                  <MenuItem value={'black'}>Black</MenuItem>
                  <MenuItem value={'Blue'}>Blue</MenuItem>
                  <MenuItem value={'pink'}>Pink</MenuItem>
                  <MenuItem value={'green'}>Green</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 80 }} size='small'>
                <InputLabel id='select'>Size</InputLabel>
                <Select
                  labelId='select'
                  id='select'
                  value={sizeselect}
                  label='Size'
                  onChange={sizeChange}
                >
                  <MenuItem value=''>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={'xsm'}>XSM</MenuItem>
                  <MenuItem value={'sm'}>SM</MenuItem>
                  <MenuItem value={'m'}>M</MenuItem>
                  <MenuItem value={'l'}>L</MenuItem>
                  <MenuItem value={'xl'}>XL</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <Typography variant='h6' p={2}>
                Sort Product
              </Typography>
              <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
                <InputLabel id='select'>Sort</InputLabel>
                <Select
                  labelId='select'
                  id='select'
                  value={sortselect}
                  label='Sort'
                  onChange={sortChange}
                >
                  <MenuItem value=''>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={'asc'}>Price (des)</MenuItem>
                  <MenuItem value={'dsc'}>price (Asce)</MenuItem>
                  <MenuItem value={'date'}>Date</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Box>
        <Product />
      </Box>
    </>
  );
};

export default ProductList;
