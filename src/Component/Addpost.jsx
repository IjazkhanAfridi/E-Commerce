import styled from '@emotion/styled'
import { Add, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material'
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const StyleModal = styled(Modal)({
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
});

const UserBox = styled(Box)({
  display:"flex",
  alignItems:"center",
  gap:"10px",
  marginBottom:"20px",
});
export default function Addpost() {

  const [open,setOpen ]= useState(false)
  const name = useSelector((state)=>state.user.name)


  return (
    <Box >
        <Tooltip onClick={
          e=>setOpen(true)
        }
         title="Add" sx={{
          position:"fixed",
          bottom:20,
          left:{xs:"calc(5px)", md:40},
        }}>
  <Fab color="primary" aria-label="Add">
    <Add />
  </Fab>
</Tooltip>
 <StyleModal
        open={open}
        onClose={ e=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box bgcolor={"background.default"} color={"text.primary"} width={400} height={280} p={3} borderRadius={5}> 
        <Typography variant='h6' color="gray" textAlign="center">Creat Post</Typography>
        <UserBox>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{width:30, height:30}} />
        <Typography variant='h6'>{name}</Typography>
        </UserBox>
        <TextField id="standard-multiline-static" label="what is in your mind" rows={2} variant="standard" sx={{width:"100%"}} multiline/>
        
      <Stack direction={"row"} gap={1} mt={2} mb={3}>
        <EmojiEmotions color='primary' />
        <Image color="secondary" />
        <VideoCameraBack color="success" />
        <PersonAdd color='error' />
      </Stack>
      <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group" >
        <Button sx={{width:"100"}}>Post</Button>
        <Button><DateRange/></Button>
      </ButtonGroup>
        </Box>
      </StyleModal>
    </Box>
  )
}
