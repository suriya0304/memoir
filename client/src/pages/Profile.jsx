import { Avatar, Button, Stack, styled, Typography } from '@mui/material'
import { fontSize, padding } from '@mui/system'
import React from 'react'

const Profile = () => {
    const Input= styled('input')({
       outline:'none',
        border:'none',
        height:'24px',
        width:'100%',
        fontSize:'22px',
        paddingBottom:'20px'
    })
    const Label= styled('label')({
        fontFamily:'Lora',
        fontSize:'22px',
        color:'#1363DF'
    })
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',margin:'40px',gap:'25px'}}>
        <div style={{display:'flex',justifyContent:'space-between',width:'80%'}}>
            <Typography fontFamily='Lora' fontSize='30px' sx={{color:'#1363DF'}}>Update Your Account</Typography>
            <Button variant="outlined" color='error' sx={{fontWeight:'bold'}}>Delete Account</Button>
           
        </div>
        <div style={{width:'80%'}}>
            <form action="" style={{display:'flex',flexDirection:'column',alignItems:'start',gap:'10px'}}>
                
                <Label htmlFor="">Pfp</Label>
                <div style={{display:'flex',gap:'12px',alignItems:'center',paddingBottom:'20px'}}>
                    <Avatar sx={{width:'60px',height:'60px'}}/>
                    <Button  sx={{height:'27px'}} variant='contained' color='primary'>Change</Button>
                </div>
                <Label htmlFor="">Username</Label>
                <Input type="text" placeholder='eg: Jane Doe' />
                <Label htmlFor="">Email</Label>
                <Input type="text" placeholder='eg: janedoe@gmail.com' />
                <Button size="small" variant='contained' color='success' sx={{width:'100%'}}>Submit</Button>
                
                
            </form>
        </div>
        
        
    </div>
  )
}

export default Profile