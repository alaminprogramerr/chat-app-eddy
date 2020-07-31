const express=require('express')
const app=express()
const PORT=process.env.PORT||5000
const mongoos=require('mongoose')
const userRouter=require('./router/userRouter')
const bodyParser=require('body-parser')
const cors =require('cors')
const server=require('http').createServer(app)
const io = require('socket.io')(server)
const socketController=require('./util/socketController')
const userModel=require('./model/userModel')
const conversationModel=require('./model/conversationModel')



app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(userRouter)




io.on('connection',(socket)=>{   
    socket.on('sendInfo',data=>{
        socketController.addUser({id:socket.id,email:data.email})
        console.log(socketController.users)
    })
    const updateUserList=()=>{
        userModel.find()
        .then(dbUsers=>{
            // setTimeout(() => {
            //     console.log(socketController.users,'socket users')
            //     io.sockets.emit('getAllActiveUsers',{socketUser:socketController.users,dbUsers:dbUsers})               
            // }, 100);
            let lastSms=[]
            conversationModel.find()
            .then(docx=>{
                docx.forEach(single=>{
                    lastSms.push({between:single.between,sms:single.conversation.slice(-1)[0]})
                })
                // console.log('lastsms are ' , lastSms)
                io.sockets.emit('getAllActiveUsers',{socketUser:socketController.users,dbUsers:dbUsers,allLastSms:lastSms})  
            })
            .catch(err=>{
                console.log(err)
            })             
        })
        .catch(err=>{
            console.log(err) 
        })
    }
    updateUserList()
    socket.on('reqConversation',data=>{
        conversationModel.findOne({between:(data.from+data.to)})
        .then(cnv=>{
            if(cnv){
                return socket.emit('getConversation',cnv.conversation)
            }
            conversationModel.findOne({between:(data.to+data.from)})
            .then(cnv=>{
                if(cnv){
                     return socket.emit('getConversation',cnv.conversation)
                }else{
                    return socket.emit('getConversation',[])
                }
            })
                    
        })
    })
    socket.on('sendSms',data=>{
        if(data.from && data.to){
            conversationModel.findOne({between:(data.from+data.to)})
            .then(cnv=>{
                if(cnv){
                    cnv.conversation=[...cnv.conversation,data]
                    cnv.save()
                    .then(doc=>{
                        console.log('conversation saved')
                    })
                    return
                }
                conversationModel.findOne({between:(data.to+data.from)})
                .then(cnv=>{
                    if(cnv){
                        cnv.conversation=[...cnv.conversation,data]
                        cnv.save()
                        .then(doc=>{
                            console.log('new conversation created with ', data.from,'and',data.to)
                        })
                        return
                    }else{
                        new conversationModel({
                            between:(data.from+data.to),
                            conversation:[data]
                        })
                        .save()
                        .then(doc=>{
                            console.log('new conversation created with ', data.from,'and',data.to)
                        })
                    }
                })
                        
            })
            console.log(data)
            let sendToUser=socketController.getUser(data.to)
            if(sendToUser){
                socket.broadcast.to(sendToUser.id).emit('acceptSms',data)
            }
        }else{
            console.log(data,'data not filed up')
        }
    })
    
    socket.on('reqAllLastSms',data=>{
        let lastSms=[]
        conversationModel.find()
        .then(docx=>{
            docx.forEach(single=>{
                lastSms.push({between:single.between,sms:single.conversation.slice(-1)[0]})
            })
            // console.log('lastsms are ' , lastSms)
            socket.emit('sendAllLastSms',{allLastSms:lastSms})
        })
        .catch(err=>{
            console.log(err)
        })  
    })
    socket.on('disconnect',()=>{
        socketController.removeUser(socket.id)
        updateUserList()
     })
})

server.listen(PORT,()=>{
    console.log(`Server started on port `,PORT)
    mongoos.connect('mongodb://localhost/day-app',{useFindAndModify:false,useUnifiedTopology:true,useNewUrlParser:true},(err=>{
        if(err){
            console.log(err)
            return
        }
        console.log('Mongodb  connected')
    }))
})


// socket.emit('message', "this is a test"); //sending to sender-client only
// socket.broadcast.emit('message', "this is a test"); //sending to all clients except sender
// socket.broadcast.to('game').emit('message', 'nice game'); //sending to all clients in 'game' room(channel) except sender
// socket.to('game').emit('message', 'enjoy the game'); //sending to sender client, only if they are in 'game' room(channel)
// socket.broadcast.to(socketid).emit('message', 'for your eyes only'); //sending to individual socketid
// io.emit('message', "this is a test"); //sending to all clients, include sender
// io.in('game').emit('message', 'cool game'); //sending to all clients in 'game' room(channel), include sender
// io.of('myNamespace').emit('message', 'gg'); //sending to all clients in namespace 'myNamespace', include sender
// socket.emit(); //send to all connected clients
// socket.broadcast.emit(); //send to all connected clients except the one that sent the message
// socket.on(); //event listener, can be called on client to execute on server
// io.sockets.socket(); //for emiting to specific clients
// io.sockets.emit(); //send to all connected clients (same as socket.emit)
// io.sockets.on() ; //initial connection from a client.