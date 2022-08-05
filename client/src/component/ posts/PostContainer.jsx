import React from 'react'
import PostComponent from './PostComponent'

const PostContainer = () => {
  return (
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
        <PostComponent/>
        <PostComponent/>
        <PostComponent/>
        <PostComponent/>
        <PostComponent/>
        <PostComponent/>
        <PostComponent/>
        <PostComponent/>
        <PostComponent/>
    </div>
  )
}

export default PostContainer