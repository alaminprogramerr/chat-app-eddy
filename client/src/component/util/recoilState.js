import {atom} from 'recoil'
import decoder from 'jwt-decode'




// get logged in user info
export const userInfo=atom({
    key:'userInfo',
    default:window.localStorage.getItem('eddy_app')?decoder(window.localStorage.getItem('eddy_app')):{}
})

export const activeUser=atom({
    key:'activeUser',
    default:[]
})

export const activePerson=atom({
    key:'activePerson',
    default:{}
})

// created sms to send other user 
export const sendSmsInfo=atom({
    key:'sendSmsInfo',
    default:{}
})

//get conversation from  selected user from left sidebar 
export const activeConversation=atom({
    key:'activeConversation',
    default:[]
})
// active user from server (socket server)
export const socketUsers=atom({
    key:'socketUsers',
    default:[]
})



// profile sideber toggle varible
export const profileDisplay=atom({
    key:'profileDisplay',
    default:false
})


// all last sms information 
export const  allLastSms=atom({
    key:'allLastSms',
    default:[]
})