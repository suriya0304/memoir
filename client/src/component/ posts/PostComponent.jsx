import { Box, Stack, Typography } from '@mui/material'
import { style } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router'

const PostComponent = () => {
    const navigate = useNavigate()

  return (
      <Stack onClick={()=>navigate('/post/:id')} sx={{justifyContent:'center',alignItems:'center',width:'350px',margin:'20px 20px 20px 20px'}}>
        <img src={require('../../assets/Anime_Scenery.jpeg') } style={{width:'350px',height:'200px',borderRadius:'10px'}}></img>
        <div style={{display:'flex',gap:'20px',color : '#665858',paddingTop:'10px'}}>
            <span>Travel</span>
            <span>Life</span>
        </div>
        <Typography sx={{fontWeight:'bold'}}>Lorem ipsum dolor sit amet </Typography>
        <Typography sx={{color : '#665858'}}>1 hour ago</Typography>
        <Typography>Lorem ipsum dolor, sit amet consectetur.
         nisi ad in quibusdam, expedita mollitia eaque distinctio 
        eligendi voluptatem aspernatur officiis?</Typography>
        
      </Stack>
  )
}

export default PostComponent