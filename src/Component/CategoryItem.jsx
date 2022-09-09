import { Box, Card, Typography } from '@mui/material';
import React from 'react';
import { CategoryImg } from '../dummyData';
import Categories from './Categories';

const CategoryItem = () => {
  return (
    <>
      <Box>
        <Typography p={1} color={'black'} textAlign={'center'}>
          Category
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            mt: '5px',
          }}
        >
          {CategoryImg.smimg.map((item) => (
            <Card
              sx={{
                width: '32%',
                position: 'relative',
                display: 'flex',
                flexWrap: 'wrap',
                mt: '5px',
              }}
            >
              <Categories item={item} key={item.id[0]} />
            </Card>
          ))}
          {CategoryImg.lgimg.map((item) => (
            <Card
              sx={{
                width: '49%',
                position: 'relative',
                display: 'flex',
                flexWrap: 'wrap',
                mt: '10px',
              }}
            >
              <Categories item={item} key={item.id[1]} />
            </Card>
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
    </>
  );
};

export default CategoryItem;
