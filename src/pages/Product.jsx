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
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { add } from '../redux/cartSlice';
import { useSelector } from 'react-redux';
import { useState } from 'react';

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
  const ProductsData = useSelector((item) => item.products);
  const pId = useParams();
  const singledata = ProductsData.filter((item) => {
    return item.id == pId.id;
  });
  const [singleProduct] = singledata;
  const [count, setCount] = useState(1);

  const dispatch = useDispatch();
  const handleCart = (singleProduct) => {
    dispatch(add(singleProduct));
    setCount(count + 1);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        pt: '20px',
        mt: '2rem',
        height: '100%',
      }}
    >
      <Box sx={{ desplay: 'flex', width: { md: '50%', xs: '98%' } }}>
        <img
          style={{ width: '100%', height: '80vh', objectFit: 'cover' }}
          alt='img'
          src={singleProduct.img}
        />
      </Box>
      <Box sx={{ width: { md: '50%', sm: '100%' } }}>
        <Typography variant='h5' p={2}>
          {singleProduct.name}
        </Typography>
        <Typography variant='body2' p={2}>
          {singleProduct.desc}
        </Typography>
        <Typography p={2} sx={{ fontSize: '40px', fontWeight: '0px' }}>
          {`$ ${singleProduct.price}`}
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
              onClick={handleCart}
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
              {count}
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
              onClick={() => handleCart(singleProduct)}
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
