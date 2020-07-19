const express=require('express')
const app=express()
const PORT=process.env.PORT||5000
const mongoos=require('mongoose')
const userRouter=require('./router/userRouter')
const bodyParser=require('body-parser')
const cors =require('cors')
const postRouter =require('./router/postRouter')
const server=require('http').createServer(app)
const io = require('socket.io')(server)
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

mongoos.connect('mongodb://localhost/day-app',{useFindAndModify:false,useUnifiedTopology:true,useNewUrlParser:true},(err=>{
    if(err){
        console.log(err)
        return
    }
    console.log('Mongodb  connected')
}))



app.use(userRouter)
app.use(postRouter)
server.listen(PORT,()=>{
    console.log(`Server started on port `,PORT)
})
