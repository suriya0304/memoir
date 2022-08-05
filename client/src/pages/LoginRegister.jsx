import {  styled, Typography } from '@mui/material'
import React from 'react'
import background from '../assets/register_background.jpg'

const style={
    background: ` url(${background} ) `,
    width:'100vw',
    height:`calc(100vh - 60px)`,
    objectFit:'cover',
    backgroundPosition:'50% 80%',
    opacity:0.9,
    color:'white',
    display:'flex',
    justifyContent:'center'
}
const Input= styled('input')({
    outline:'none',
     border:'none',
     height:'24px',
     fontSize:'22px',
     color:'black',
     width:'100%',
     borderRadius:'20px'
 })
 const Label= styled('label')({
     fontFamily:'Lora',
     fontSize:'28px',
 })
const Container = styled('Container')({
    width:'100%'
})

export const Login = () => {
    
  return (
      <div style={style}>
        <form style={{display:'flex',flexDirection:'column',width:'30%',gap:'24px',paddingTop:'100px',alignItems:'center'}}>
            <Typography sx={{textAlign:'center',fontSize:'50px',fontFamily:'Lora'}}>Login</Typography>
            <Container>
            <Label>Email</Label>
            <Input placeholder='  enter your email'/>
            </Container>
            <Container>
            <Label>Password</Label>
            <Input placeholder='  enter your password'/>
            </Container> 

            <button style={{border:'none',width:'100px',height:'32px',bgcolor:'white',color:'black',fontSize:'18px',fontWeight:'bold',borderRadius:'20px'}}>Login</button>
        </form>
      </div>
  )
}



export const Register= ()=>{
    return(
    <div style={style}>
        <form style={{display:'flex',flexDirection:'column',width:'30%',gap:'24px',paddingTop:'100px',alignItems:'center'}}>
            <Typography sx={{textAlign:'center',fontSize:'50px',fontFamily:'Lora'}}>Register</Typography>
            <Container>
                <Label>Username</Label>
                <Input placeholder='  enter your username'/>
            </Container>
            <Container>
                <Label>Email</Label>
                <Input placeholder='  enter your email'/>
            </Container>
            <Container>
                <Label>Password</Label>
                <Input placeholder='  enter your password'/>
            </Container> 
            <button style={{border:'none',width:'100px',height:'32px',bgcolor:'white',color:'black',fontSize:'18px',fontWeight:'bold',borderRadius:'20px'}}>Register</button>
        </form>
      </div>)
}

