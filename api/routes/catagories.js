const router= require('express').Router()
const Catagories = require('../models/Catagories') 

router.post('/',async (req,res)=>{
    const cat = new Catagories(req.body)
    try{
        const catSaved = await cat.save()
        res.status(200).json(catSaved)
    }
    catch(err){
        res.status(500).json(err)
    }
})

module.exports = router 