import { Add, Delete, Remove } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {remove} from "../redux/cartSlice"
const Cart = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.cart);
  const totoalprice = products.filter((items) => {
    return items.price
  });
let i=0;
var total=0;
for(i;i<totoalprice.length;i++){
 total=total+totoalprice[i].price;
}
const shipping = 5;
const alltotal= total+shipping;

const handleRemove=(productid)=>{
  dispatch(remove(productid))
}

  return (
    <>
      <Box>
        <Typography p={2} sx={{ textAlign: 'center' }} variant='h4'>
          your Bag
        </Typography>
        <Box
          sx={{ display: 'flex', justifyContent: 'space-between', m: '20px' }}
        >
          <Box>
            <Link to={'/category'} style={{ textDecoration: 'none' }}>
              <Button sx={{ border: '2px solid black', color: 'black' }}>
                Continue Shopping
              </Button>
            </Link>
          </Box>
          <Box sx={{ display: 'flex', m: '10px' }}>
            <Typography variant='body1' p={1} sx={{ cursor: 'pointer' }}>
              <u>Shopping Bag (2)</u>
            </Typography>
            <Typography sx={{ cursor: 'pointer' }} variant='body1' p={1}>
              <u>Your Washlist (0)</u>
            </Typography>
          </Box>
          <Box>
            <Button
              sx={{
                bgcolor: 'black',
                color: 'white',
                border: '2px solid',
                '&:hover': { color: 'black', bgcolor: 'white' },
              }}
            >
              ChackOut Now
            </Button>
          </Box>
        </Box>
        <Box sx={{ display: 'flex',flexDirection:{md:"row",xs:"column"} }}>
          <Box sx={{ width: {md:'75%',xs:"96%"}, m: '5px 20px' }}>
            {products.map((product) => (
              <>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mt: '5px',
                  }}
                >
                  <Box>
                    <img
                      style={{
                        width: '200px',
                        height: '200px',
                        borderRadius: '5px',
                      }}
                      alt='img'
                      src={product.img}
                    />
                  </Box>
                  <Box>
                    <Typography sx={{ mt: '15px' }}>
                      <b>Product</b>: {product.name}
                    </Typography>
                    <Typography sx={{ mt: '15px' }}>
                      <b>ID</b>: {product.id}
                    </Typography>
                    <Typography
                      sx={{
                        bgcolor: 'black',
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        mt: '15px',
                        cursor: 'pointer',
                      }}
                    ></Typography>
                    <Typography sx={{ mt: '15px' }}>
                      <b>Size</b>: M
                    </Typography>
                  </Box>
                  <Box>
                    <Box sx={{ display: 'flex', mt: '10px' }}>
                      <Add
                        sx={{
                          alignItem: 'center',
                          textAlign: 'center',
                          m: '0px 3px',
                          width: '30px',
                          height: '30px',
                          cursor: 'pointer',
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
                          cursor: 'pointer',
                        }}
                      />
                    </Box>
                    <Typography
                      p={2}
                      variant='body2'
                      sx={{ mt: '10px', fontSize: '40px', fontWeight: '0px' }}
                    >
                      $ {product.price}
                    </Typography>
                    <Typography
                      p={2}
                      sx={{  fontSize: '20px', fontWeight: '0px',display:"flex",cursor:"pointer" }}
                    onClick={()=>handleRemove(product.id)}
                    >
                      Remove
                      <Delete sx={{mt:'3px', fontSize:"25px"}}/>
                    </Typography>
                  </Box>
                </Box>
                <hr />
              </>
            ))}
          </Box>
          <Box sx={{ width: {md:'25%',xs:"99%"} }}>
            <Box
              sx={{
                m: '30px 10px',
                p: '10px',
                border: '2px solid gray',
                borderRadius: '10px',
              }}
            >
              <Typography
                sx={{
                  m: '15px',
                  display: 'flex',
                  justifyContent: 'Center',
                }}
              >
                <h3>ORDER SUMMERY</h3>
              </Typography>
              <Typography
                sx={{
                  m: '15px',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <b>Sub Total</b> : ${total}
              </Typography>
              <Typography
                sx={{
                  m: '15px',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <b>Shipping Fee</b> : ${shipping}
              </Typography>
              <Typography
                sx={{
                  m: '15px',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <b>Total Items</b> : {products.length}
              </Typography>
              <Typography
                sx={{
                  m: '15px',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <b>Total Price</b> : ${alltotal}
              </Typography>
              <Box
                sx={{ m: '15px', display: 'flex', justifyContent: 'center' }}
              >
                <Button
                  sx={{
                    bgcolor: 'black',
                    color: 'white',
                    border: '2px solid',
                    '&:hover': { color: 'black', bgcolor: 'white' },
                  }}
                >
                  ChackOut Now
                </Button>
              </Box>
            </Box>
          </Box>
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
    </>
  );
};

export default Cart;
