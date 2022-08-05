const express= require('express')
const mongoose =require('mongoose')
require('dotenv').config()
const authRouter = require('./routes/auth')
const userRouter = require('./routes/users')
const postRouter = require('./routes/post')
const catRouter = require('./routes/catagories')
const multer = require('multer')


const app = express()
app.use(express.json())
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(console.log('connected')).catch((err)=>console.log(err.message))

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./images')
    },filename:(req,file,cb)=>{
        cb(null,req.body.name)
    }
})

const upload = multer({storage:storage})


app.get('/api/upload',upload.single('file'),(req,res)=>{
    res.status(200).json("file has been uploaded")
})

app.use('/api/auth',authRouter)
app.use('/api/user',userRouter)
app.use('/api/post',postRouter)
app.use('/api/cat',catRouter)
app.listen(3001)