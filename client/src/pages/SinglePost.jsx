import { Delete, Edit } from '@mui/icons-material'
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const SinglePost = () => {
  return (
    <Stack sx={{width:'100%',height:'100%',alignItems:'center',gap:'10px'}}>
      <img src={require('../assets/Anime_Scenery.jpeg')} alt="" style={{width:'85%',height:'400px',objectFit:'cover',objectPosition:'0 100%',borderRadius:'15px',}} />
      <Stack direction='row' width='85%' justifyContent='center' alignItems='center'>
        <Typography flex='1' sx={{fontWeight:'bold',fontSize:'25px'}}>Lorem ipsum dolor sit amet.</Typography>
        <Box >
          <Edit sx={{color:'green',paddingRight:'8px'}}/>
          <Delete sx={{color:'red'}}/>
        </Box>
        </Stack>  
        <Box sx={{width:'85%',display:'flex',justifyContent:'space-between',color:'#665858'}}>
          <Typography>Author: xyz</Typography>
          <Typography>1 hour ago</Typography>
        </Box>
        <Typography sx={{width:'85%'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae veniam ipsam fugiat distinctio nihil laboriosam dolores a perspiciatis autem cumque blanditiis rem iusto recusandae obcaecati, voluptatum officiis et quos adipisci.
        Porro ducimus, harum minima modi maxime mollitia commodi autem quam totam dolorum odit expedita? Sint, ipsum veniam voluptatibus assumenda eaque commodi molestiae, quia vitae impedit praesentium ad, id nulla hic?
        Quos quas earum, tempore, dignissimos fuga beatae vitae asperiores ipsam dolor dolore magnam eligendi quam accusamus nostrum libero harum illum quis saepe voluptas modi quisquam iusto aliquam expedita! Exercitationem, molestiae.
        Aperiam impedit nemo totam doloremque at perferendis ab architecto sit. Et, provident, enim totam hic molestiae necessitatibus animi rem esse officia ipsum maiores dolorem cumque in repellat deserunt nostrum mollitia!</Typography>
    </Stack>
  )
}

export default SinglePost