const router= require('express').Router()
const User = require('../models/User')
const bcrypt= require('bcrypt')
const post = require('../models/Post')

//PUT
router.put('/:id',async (req,res)=>{
    if(req.body.userId===req.params.id){
        const salt =await bcrypt.genSalt(10)
        req.body.password=await bcrypt.hash(req.body.password,salt)
        try{
            const updateUser = await User.findByIdAndUpdate(req.params.id,{
                ...req.body
            },{new:true})
            res.status(200).json(updateUser)
        }catch(err){
            res.status(500).json(err)
        }
    }else{
        res.status(401).json('you can only update your account')
    }
})

//DELETE
router.delete('/:id',async (req,res)=>{
    if(req.body.userId===req.params.id){
        try{
            const user = await User.findById(req.params.id)
            try{
                await post.deleteMany({username:user.username})
                await User.findByIdAndDelete(req.params.id)
                res.status(200).json("user has been deleted")
            }catch(err){
                res.status(500).json(err)
            }
        }
        catch(err){
            res.status(404).json("user not found")
        }
    
    }else{
        res.status(401).json('you can only delete your account')
    }
})


//GET
router.get('/:id',async (req,res)=>{
        try{
            const user = await User.findById(req.params.id)
            res.status(200).json(user)
        }catch(err){
            res.status(500).json("no user found")
        }
})

module.exports = router