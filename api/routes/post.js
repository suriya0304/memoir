const router= require('express').Router()
const User = require('../models/User')
const Post = require('../models/Post') 
const bcrypt= require('bcrypt')


//POST
router.post('/',async (req,res)=>{
    const newPost =new Post(req.body)
    try{
        const postSaved = await newPost.save()
        res.status(200).json(postSaved) 
    }catch(err){
        res.status(500).json(err)
    }
})


//UPDATE POST
router.put('/:id',async (req,res)=>{
    console.log('putting')
    try{
        const post =await Post.findById(req.params.id)
        if(post.username===req.body.username){
            try{
                const updatedPost=await Post.findByIdAndUpdate(req.params.id,{
                    ...req.body
                },{new:true})
                res.status(200).json(updatedPost)
            }catch(err){
                res.status(500).json(err)
            }
        }else{
            req.status(401).json("you can update only your post")
        }
    }catch(err){
        res.status(500).json(err)
    }
})


//DELETE
router.delete('/:id',async (req,res)=>{
    try{
        const post = await Post.findById(req.params.id)
        if(post.username===req.body.username){
            try{
                await Post.findByIdAndDelete(req.params.id)
                res.status(200).json("post deleted")
            }catch(err){
                res.status(500).json(err)
            }
        }else{
            req.status(401).json("you can delete only your post")
        }
        
    }catch(err){
        console.log(err)
        res.status(500).json(err)

    }
})


//GET
router.get('/:id',async (req,res)=>{
    try{
    const post = await Post.findById(req.params.id)
    res.status(200).json(post)

    }
    catch(err){
        res.status(500).json(err)
    }
})

//GET ALL POST
router.get('/',async (req,res)=>{
    const user = req.query.user
    const catagories =req.query.cat
    try{ 
        let post
        if(user){
            post = await Post.find({username:user})
        }else if(catagories){
            post = await Post.find({catagories:{$in:[catagories]}})
        }else{
            post = await Post.find()
        }
        res.status(200).json(post)
    }catch(err){
        res.status(500).json(err.message)
    }
})


module.exports = router 