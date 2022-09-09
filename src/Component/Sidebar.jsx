import React, { useState } from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Modal,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import {
  AccountBoxSharp,
  DarkModeSharp,
  Drafts,
  Home,
  ListAlt,
  PeopleAlt,
  Person,
  Settings,
  Storefront,
} from '@mui/icons-material';
import styled from '@emotion/styled';
import {useDispatch} from "react-redux";
import { update } from '../redux/userSlice';
const StyleModal = styled(Modal)({
  display:"flex",
  alignItems:"center",
  justifyContent:"center"
})

export default function Sidebar({ mode, setMode }) {
  const [open, setOpen] = useState(false);

  const [name, setName]  = useState("");
  const dispatch = useDispatch()

  const updateName = (e)=>{
    e.preventDefault();
    dispatch(update({name}))
  }

  return (
<>
    <Box flex='1' p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position='fixed'>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary='Home' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ListAlt />
              </ListItemIcon>
              <ListItemText primary='Pages' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PeopleAlt />
              </ListItemIcon>
              <ListItemText primary='Group' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Drafts />
              </ListItemIcon>
              <ListItemText primary='Drafts' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary='MarketPlace' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary='Friend' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary='Setting' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding >
            <ListItemButton >
              <ListItemIcon >
                <AccountBoxSharp />
              </ListItemIcon>
              <ListItemText primary='Profile' onClick={(e) => setOpen(true)}/>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DarkModeSharp />
              </ListItemIcon>
              <Switch
                onChange={(e) => setMode(mode === 'light' ? 'dark' : 'light')}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>

    <StyleModal
        open={open}
        onClose={ e=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box bgcolor={"background.default"} color={"text.primary"} > 
        <Typography variant='h6' color="gray" textAlign="center">Update Profile</Typography>
       
        <TextField id='standard-basic' label='Update Profile' variant='standard' sx={{m:5}}  onChange={(e)=> setName (e.target.value)} />
  
      <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group" >
        <Button sx={{width:"100"}} onClick={updateName}>Update</Button>
      </ButtonGroup>
        </Box>
      </StyleModal>
        
      </>
  );
}
