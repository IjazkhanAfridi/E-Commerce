import { Box, Card, Typography } from '@mui/material';
import React from 'react';
import { CategoryImg } from '../dummyData';
import Categories from './Categories';
import {Link} from "react-router-dom"
import ".././index.css"

const CategoryItem = () => {
  return (
    <>
      <Box>
        <Typography p={2} variant={"h4"} color={'black'} textAlign={'center'}>
         <u> CATEGORIES </u>
          
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            mt: '5px',
          }}
        >
          {CategoryImg.smimg.map((item,ind) => (
            <Card
              sx={{
                width: {lg:'32%',sm:"100%",md:"48%"},
                position: 'relative',
                display: 'flex',
                flexWrap: 'wrap',
                mt: '7px',
                mb: '7px',
                height:"300px",
              }}
              key={ind.id}
              className="smcatcard"
            >
            <Link to={"/category"} style={{width:"100%"}}>
              <Categories item={item}  />
            </Link>
            </Card>
          ))}
          {CategoryImg.lgimg.map((item) => (
            <Card
              sx={{
                width: {md:'49%',sm:"100%"},
                height:"300px",
                position: 'relative',
                display: 'flex',
                flexWrap: 'wrap',
                mt: '10px',
              }}
            >
            <Link to={"/category"} style={{width:"100%"}}>
              <Categories item={item} key={item.id[1]} />
            </Link>
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
