import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

export default function Feed() {
const name = useSelector((state)=>state.user.name)
  return (
    <Box flex={4} p={2}>
      <Card sx={{ margin: 3 }}>
        <CardHeader
          avatar={
            <Avatar sx={{}} aria-label='recipe'>
              R
            </Avatar>
          }
          action={
            <IconButton aria-label='settings'>
              <MoreVert />
            </IconButton>
          }
          title={name}
          subheader='Sep 14, 2022'
        />
        <CardMedia
          component='img'
          height='20%'
          image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR02JolG69F4-ji0Y1dicilkfxriNFeH_8sHw&usqp=CAU'
          alt='Paella dish'
        />
        <CardContent>
          <Typography variant='body2' color='text.secondary'>
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label='add to favorites'>
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: 'red' }} />}
            />
          </IconButton>
          <IconButton aria-label='share'>
            <Share />
          </IconButton>
        </CardActions>
      </Card>
      <Card sx={{ margin: 3 }}>
        <CardHeader
          avatar={
            <Avatar sx={{}} aria-label='recipe'>
              R
            </Avatar>
          }
          action={
            <IconButton aria-label='settings'>
              <MoreVert />
            </IconButton>
          }
          title={name}
          subheader='Sep 14, 2022'
        />
        <CardMedia
          component='img'
          height='20%'
          image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR02JolG69F4-ji0Y1dicilkfxriNFeH_8sHw&usqp=CAU'
          alt='Paella dish'
        />
        <CardContent>
          <Typography variant='body2' color='text.secondary'>
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label='add to favorites'>
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          </IconButton>
          <IconButton aria-label='share'>
            <Share />
          </IconButton>
        </CardActions>
      </Card>
      <Card sx={{ margin: 3 }}>
        <CardHeader
          avatar={
            <Avatar sx={{}} aria-label='recipe'>
              R
            </Avatar>
          }
          action={
            <IconButton aria-label='settings'>
              <MoreVert />
            </IconButton>
          }
          title={name}
          subheader='Sep 14, 2022'
        />
        <CardMedia
          component='img'
          height='20%'
          image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR02JolG69F4-ji0Y1dicilkfxriNFeH_8sHw&usqp=CAU'
          alt='Paella dish'
        />
        <CardContent>
          <Typography variant='body2' color='text.secondary'>
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label='add to favorites'>
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          </IconButton>
          <IconButton aria-label='share'>
            <Share />
          </IconButton>
        </CardActions>
      </Card>
      <Card sx={{ margin: 3 }}>
        <CardHeader
          avatar={
            <Avatar sx={{}} aria-label='recipe'>
              R
            </Avatar>
          }
          action={
            <IconButton aria-label='settings'>
              <MoreVert />
            </IconButton>
          }
          title={name}
          subheader='Sep 14, 2022'
        />
        <CardMedia
          component='img'
          height='20%'
          image=""
          alt='Paella dish'
        />
        <CardContent>
          <Typography variant='body2' color='text.secondary'>
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label='add to favorites'>
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          </IconButton>
          <IconButton aria-label='share'>
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
}
