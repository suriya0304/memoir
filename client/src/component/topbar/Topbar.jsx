import { Facebook, Instagram, Pinterest, Search, Twitter } from '@mui/icons-material'
import { Avatar, Box, Stack, styled } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'

const Topbar = () => {
    const navigate = useNavigate()
    const StyledList=styled('ul')({
        display:'flex',
        listStyle:'none',
        justifyContent:'center',
        alignItems:'center',
        padding:0,
        margin:'10px'
    })
  return (
    <Stack direction='row' sx={{position:'sticky',width:'100vw',top:0,backgroundColor:'white'}}>
        <StyledList sx={{flex:3,gap:'20px'}}>
            <li ><Facebook sx={{fontSize:'35px'}}/> </li>
            <li><Twitter sx={{fontSize:'35px'}}/></li>
            <li><Pinterest sx={{fontSize:'35px'}}/></li>
            <li><Instagram sx={{fontSize:'35px'}}/></li>
        </StyledList>
        <StyledList sx={{flex:6,gap:'30px',fontSize:'24px',color:'#665858'}}>
            <li style={{cursor:'pointer'}} onClick={()=>navigate('/')}>HOME</li>
            <li  style={{cursor:'pointer'}} onClick={()=>navigate('/write')}>ABOUT</li>
            <li style={{cursor:'pointer'}}>CONTACT</li>
            <li style={{cursor:'pointer'}} onClick={()=>navigate('/write')}>WRITE</li>
            <li style={{cursor:'pointer'}}>LOGOUT</li>
        </StyledList>
        <StyledList sx={{flex:3,gap:'20px'}}>
            <li><Search sx={{fontSize:'30px'}}/></li>
            <li><Avatar/></li> 
        </StyledList>
    </Stack>
  )
}

export default Topbar