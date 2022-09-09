import React from 'react';
import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography} from '@mui/material';

export default function Rsidebar() {
  return <Box  flex="2" p={2} sx={{display:{xs:"none",sm:"block"}}}>
    <Box position="fixed"  width={300}>
        <Typography varient={"h6"} fontWeight={100} pb={2}>
            Online Friends
        </Typography>
        <AvatarGroup max={6}>
      <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNwTmOjCTY4thjH13-8wKp8MkgEpHw-7fD2w&usqp=CAU" />
      <Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCaZeDdbOeCSxvVVHTICt9BWzxIu-C4EO2Pw&usqp=CAU" />
      <Avatar alt="Agnes Walker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiy5ZVkaIdTYmlDJPNKXQ705pKSzmd3QGyFw&usqp=CAU" />
      <Avatar alt="Remy " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNwTmOjCTY4thjH13-8wKp8MkgEpHw-7fD2w&usqp=CAU" />
      <Avatar alt="Travis" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCaZeDdbOeCSxvVVHTICt9BWzxIu-C4EO2Pw&usqp=CAU" />
      <Avatar alt=" Walker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiy5ZVkaIdTYmlDJPNKXQ705pKSzmd3QGyFw&usqp=CAU" />
      <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
    </AvatarGroup>
    <Typography varient={"h6"} fontWeight={100} mt={5} pb={2}>
            Letest Photos
        </Typography>
        <ImageList cols={3} rowHeight={120} gap={5}>

        <ImageListItem >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiy5ZVkaIdTYmlDJPNKXQ705pKSzmd3QGyFw&usqp=CAU"
            alt="img"
          />
        </ImageListItem>
        <ImageListItem >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0g-ZVcgUn82sKEi8ueqS-BxjHxh8uBVMDrg&usqp=CAU"
            alt="img"
          />
        </ImageListItem>
        <ImageListItem >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYKhAk0RQIfww-bkvzOQ2ey4w0X0q_RDpvEg&usqp=CAU"
            alt="img"
          />
        </ImageListItem>
    </ImageList>

    <Typography varient={"h6"} fontWeight={100} mt={3}>
            Letest Conversation
        </Typography>

    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5oeOP2B0oo8KS8u2WdHtz74pwb9WFJvA7jQ&usqp=CAU" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCnHIToRG69TjPVWLcZRhkgAx7gNi6Jl3g0g&usqp=CAU" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiztBpQRVS7thMVT3aVGQGwnPce2Jc-bjcJg&usqp=CAU" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>

    </Box>
  </Box>;
}
