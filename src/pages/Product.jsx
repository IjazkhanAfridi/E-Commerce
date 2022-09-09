import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  styled,
  Typography,
} from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import React from 'react';

const ColorBox = styled(Box)({
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  cursor: 'pointer',
});
const Product = () => {
  const [sizeselect, setSizeselect] = React.useState('');
  const sizeChange = (event) => {
    setSizeselect(event.target.value);
  };
  return (
    <Box sx={{ display: 'flex', m: '25px 10px' }}>
      <Box sx={{ desplay: 'flex', flex: 1, width: '100%' }}>
        <img
          style={{ width: '100%', height: '80vh', objectFit: 'cover' }}
          alt='img'
          src='https://images.pexels.com/photos/1038000/pexels-photo-1038000.jpeg?auto=compress&cs=tinysrgb&w=600'
        />
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography variant='h5' p={2}>
          Decent Product
        </Typography>
        <Typography variant='body2' p={2}>
          dolor sit amet consectetur adipisicing elit. Cum vero, natus minus
          dolore aut rem esse ea ducimus explicabo totam architecto reiciendis
          debitis eveniet dicta quaerat, blanditiis optio voluptas quia.
        </Typography>
        <Typography p={2} sx={{ fontSize: '40px', fontWeight: '0px' }}>
          $ 20
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ display: 'flex', flex: 1, ml: 2 }}>
            <Typography variant='h6' pr={2}>
              color
            </Typography>
            <ColorBox
              sx={{ backgroundColor: 'black', m: '0px 3px' }}
            ></ColorBox>
            <ColorBox sx={{ backgroundColor: 'Blue', m: '0px 3px' }}></ColorBox>
            <ColorBox sx={{ backgroundColor: 'Red', m: '0px 3px' }}></ColorBox>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flex: 1,
              alignItem: 'center',
              textAlign: 'center',
            }}
          >
            <Typography variant='h6' pr={2}>
              Size
            </Typography>
            <FormControl sx={{ minWidth: 80 }} size='small'>
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
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItem: 'center',
            mt: '20px',
            pt: '20px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItem: 'center',
              flex: 1,
              ml: 2,
              textAlign: 'center',
            }}
          >
            <Add
              sx={{
                alignItem: 'center',
                textAlign: 'center',
                m: '0px 3px',
                width: '30px',
                height: '30px',
              }}
            />
            <Typography
              sx={{
                width: '30px',
                height: '30px',
                borderRadius: '10px',
                border: '2px solid gray',
                fontSize: '50',
                justifyContent: 'center',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              1
            </Typography>
            <Remove
              sx={{
                alignItem: 'center',
                textAlign: 'center',
                m: '0px 3px',
                width: '30px',
                height: '30px',
              }}
            />
          </Box>
          <Box sx={{ display: 'flex', alignItem: 'center', flex: 1 }}>
            <Button
              sx={{
                bgcolor: 'black',
                color: 'white',
                border: '2px solid gray',
                '&:hover': { color: 'black', bgcolor: 'white' },
              }}
            >
              Add To Cart
            </Button>
          </Box>
        </Box>
        <Box>
          <Box></Box>
          <Box></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Product;
