import { Stack, Typography } from '@mui/material'
import React from 'react'
import background from  '../../assets/anime.jpg'
const Banner = () => {
    const style={
        background: ` url(${background} ) `,
        
        
        width:'100vw',
        height:'70vh',objectFit:'cover',backgroundPosition:'50% 70%'
    }
  return (
    <div style={style} >
        <Stack sx={{alignItems:'center', height:'100%',background: 'rgb(144,180,183)',background: 'linear-gradient(0deg, rgba(144,180,183,0.5) 6%, rgba(253,253,253,0.5) 71%, rgba(242,255,253,0.5) 100%)'}}>
            
            <Typography sx={{fontFamily:'Edu VIC WA NT Beginner',fontSize:'100px'}} >memoir</Typography>
            <Typography sx={{fontSize:'27px'}}>Small blogs of my story</Typography>
        </Stack>
    </div>
    
  )
}

export default Banner