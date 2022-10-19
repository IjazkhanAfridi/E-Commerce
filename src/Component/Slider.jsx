// import { Box } from '@mui/material';
import React from 'react';
// import SimpleImageSlider from 'react-simple-image-slider';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Box } from '@mui/material';

const images = [
  {
    url: 'https://cdn.pixabay.com/photo/2015/11/12/06/43/girl-1039729_960_720.jpg',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2016/12/10/16/57/shoes-1897708_960_720.jpg',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_960_720.jpg',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2016/02/02/15/54/jewellery-1175532_960_720.jpg',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2016/07/11/15/43/woman-1509956_960_720.jpg',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2016/02/02/15/54/jewellery-1175530_960_720.jpg',
  },
];

const Slider = () => {
  return (
    <>
      <Box sx={{ height: '350px', mt: '10px' }}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className='mySwiper'
        >
          {images.map((items) => (
            <SwiperSlide>
              <img src={items.url} alt='imges' />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <hr style={{ height: '1px', color: 'black', marginTop: '15px' }} />
    </>
  );
};

export default Slider;
