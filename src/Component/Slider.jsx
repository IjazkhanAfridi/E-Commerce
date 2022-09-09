import { Box } from '@mui/material';
import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider';

const images = [
  {
    url: 'https://cdn.pixabay.com/photo/2022/03/16/19/52/bird-7073243_960_720.jpg',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2020/04/18/14/01/blue-5059268_960_720.jpg',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2017/07/08/09/45/joy-2483926_960_720.jpg',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2015/07/09/00/29/woman-837156__180.jpg',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2016/07/11/15/43/woman-1509956_960_720.jpg',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2013/08/20/15/47/poppies-174276__180.jpg',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2014/01/22/19/44/flower-field-250016__180.jpg',
  },
];

const Slider = () => {
  return (
    <Box >
      <SimpleImageSlider
         width={'100%'}
        height={604}
        images={images}
        left={-15}
        showBullets={true}
        showNavs={true}/>
        <hr style={{height:"1px",color:"black",marginTop:"15px",backgroundColor:"gray" }}/>
    </Box>
    
  );
};

export default Slider;
