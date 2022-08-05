
import { Delete } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import { Chip, styled, Typography } from '@mui/material';
import React,{useRef, useState} from 'react';


const SelectionChip = () => {
    const [selection,setSelection]=useState([])
    let genre = useRef([
        {key:0,type:'music'},
        {key:1,type:'sport'},
        {key:2,type:'travel'},
        {key:3,type:'health'},
        {key:4,type:'food'},
        {key:5,type:'life'},
        {key:6,type:'tech'},
        {key:7,type:'fashion'},
    ])

    const selectHandle =(item)=>{
        genre.current=genre.current.filter((g)=>{
            if(item.key!==g.key){
                return true
            }
        })
        setSelection([...selection,item])
    }
    
    function onRemove(item){
        setSelection(selection.filter((g)=>{
            return item.key!==g.key
        }))
        genre.current.push(item)
    }
    const Hor = styled('hr')({
        margin:4
    })
  return (
      <div style={{backgroundColor:'white', display:'flex',margin:'10px 20px',gap:'5px',justifyContent:'center',alignItems:'center',position:'sticky',top:60}}>
        <div style={{paddingRight:'20px'}}>
            <Hor  />
            <Typography sx={{fontFamily:'Lora',color:'#665858'}}>CATEGORIES</Typography>
            <Hor />
        </div>
        {selection.map((item)=>{
            return <Chip key={item.key} variant="filled" label={item.type} sx={{bgcolor:'skyblue'}} onDelete={()=>onRemove(item)}  />
        })}
        
        {genre.current.map((item)=>{
            return <Chip key={item.key} variant="outlined" label={item.type} sx={{color:'#3AB4F2',borderColor:'#3AB4F2'}} onClick={()=>selectHandle(item)}  />
        })}
        
      </div>
      
    

  )

}



export default SelectionChip