import { AddCircleOutline } from '@mui/icons-material'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React from 'react'


const Write = () => {
  return (
    <Stack sx={{width:'100%',height:'100%',alignItems:'center',gap:'10px'}}>
      <img  src={require('../assets/Anime_Scenery.jpeg')} alt="" style={{width:'85%',height:'400px',objectFit:'cover',objectPosition:'0 100%',borderRadius:'15px',}} />
      <Box sx={{display:'flex',justifyContent:'space-between',width:'85%'}}>
        <div style={{display:'flex',alignItems:'center',gap:'10px',flex:1,paddingRight:'15px'}}>

          <AddCircleOutline sx={{color : '#665858'}}/>
          <input type='text' style={{flex:1,fontSize:'25px' ,border:'none',outline:'none'}} placeholder='Title'/>
        </div>
        <Button sx={{bgcolor:'green',borderRadius:'10px',color:'white'}}>Publish</Button>
      </Box>
      <input type='text' style={{width:'85%',height:'55px',fontSize:'25px' ,border:'none',outline:'none'}} placeholder='Tell your story......'/>
    </Stack>
  )
}

export default Write