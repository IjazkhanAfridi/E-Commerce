import { Add, Remove } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import Navbar from "../Component/Navbar"
import Footer from "../Component/Footer"

const Cart = () => {
  return (
    <>
      <Box>
      <Navbar />
        <Typography p={2} sx={{ textAlign: 'center' }} variant='h4'>
          your Bag
        </Typography>
        <Box
          sx={{ display: 'flex', justifyContent: 'space-between', m: '20px' }}
        >
          <Box>
            <Button sx={{ border: '2px solid black', color: 'black' }}>
              Continue Shopping
            </Button>
          </Box>
          <Box sx={{ display: 'flex', m: '10px' }}>
            <Typography variant='body1' p={1} sx={{cursor:"pointer"}}>
              <u>Shopping Bag (2)</u>
            </Typography>
            <Typography sx={{cursor:"pointer"}} variant='body1' p={1}>
              <u>Your Washlist (0)</u>
            </Typography>
          </Box>
          <Box>
            <Button
              sx={{
                bgcolor: 'black',
                color: 'white',
                border:"2px solid",
                '&:hover': { color: 'black', bgcolor: 'white' },
              }}
            >
              ChackOut Now
            </Button>
          </Box>
        </Box>
        <Box sx={{display:"flex"}}>
          <Box sx={{ width: '75%', m: '5px 20px' }}>
            <Box sx={{ display: 'flex', justifyContent:"space-between" ,mt:"5px" }}>
              <Box>
                <img
                  style={{
                    width: '200px',
                    height: '200px',
                    borderRadius: '5px',
                  }}
                  alt='img'
                  src='https://images.pexels.com/photos/1038000/pexels-photo-1038000.jpeg?auto=compress&cs=tinysrgb&w=600'
                />
              </Box>
              <Box>
                <Typography sx={{ mt: '15px' }}>
                  <b>Product</b>: some product
                </Typography>
                <Typography sx={{ mt: '15px' }}>
                  <b>ID</b>: some product
                </Typography>
                <Typography
                  sx={{
                    bgcolor: 'black',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    mt: '15px',
                    cursor:"pointer"
                  }}
                ></Typography>
                <Typography sx={{ mt: '15px' }}>
                  <b>Size</b>: M
                </Typography>
              </Box>
              <Box >
                <Box sx={{ display: 'flex', mt: '10px' }}>
                  <Add
                    sx={{
                      alignItem: 'center',
                      textAlign: 'center',
                      m: '0px 3px',
                      width: '30px',
                      height: '30px',
                      cursor:"pointer"
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
                      cursor:"pointer"
                    }}
                  />
                </Box>
                <Typography
                  p={2}
                  variant='body2'
                  sx={{ mt: '10px', fontSize: '40px', fontWeight: '0px' }}
                >
                  $ 20
                </Typography>
              </Box>
            </Box>
            <hr />
            <Box sx={{ display: 'flex', justifyContent:"space-between" ,mt:"5px" }}>
              <Box>
                <img
                  style={{
                    width: '200px',
                    height: '200px',
                    borderRadius: '5px',
                    objectFit:"cover"
                  }}
                  alt='img' src='https://images.pexels.com/photos/1375736/pexels-photo-1375736.jpeg?auto=compress&cs=tinysrgb&w=600'
                />
              </Box>
              <Box>
                <Typography sx={{ mt: '15px' }}>
                  <b>Product</b>: some product
                </Typography>
                <Typography sx={{ mt: '15px' }}>
                  <b>ID</b>: some product
                </Typography>
                <Typography
                  sx={{
                    bgcolor: 'black',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    mt: '15px',
                    cursor:"pointer"
                  }}
                ></Typography>
                <Typography sx={{ mt: '15px' }}>
                  <b>Size</b>: M
                </Typography>
              </Box>
              <Box >
                <Box sx={{ display: 'flex', mt: '10px' }}>
                  <Add
                    sx={{
                      alignItem: 'center',
                      textAlign: 'center',
                      m: '0px 3px',
                      width: '30px',
                      height: '30px',
                      cursor:"pointer"
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
                      cursor:"pointer"
                    }}
                  />
                </Box>
                <Typography
                  p={2}
                  variant='body2'
                  sx={{ mt: '10px', fontSize: '40px', fontWeight: '0px' }}
                >
                  $ 20
                </Typography>
              </Box>
            </Box>
            <hr />
               </Box>
          <Box sx={{width:"25%"}}>
            <Box sx={{m:"30px 10px",p:"10px", border:"2px solid gray",borderRadius:"10px"}}>
              <Typography sx={{m:"15px",display:"flex",justifyContent:"space-between"}}><b>my cards</b>: dbshber</Typography>
              <Typography sx={{m:"15px",display:"flex",justifyContent:"space-between"}}><b>hobbu</b>cndc</Typography>
              <Typography sx={{m:"15px",display:"flex",justifyContent:"space-between"}}><b>golden</b>dsncf</Typography>
              <Typography sx={{m:"15px",display:"flex",justifyContent:"space-between"}}><b>total </b>dncsnfv</Typography>
             <Box sx={{m:"15px",display:"flex",justifyContent:"center"}}>
              <Button  
              sx={{
                bgcolor: 'black',
                color: 'white',
                border:"2px solid",
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
        }} />
        <Footer />
      </Box>
    </>
  );
};

export default Cart;
