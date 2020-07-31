import decoder from  'jwt-decode'


 const getUserInfo=()=>{
     let token= window.localStorage.getItem('eddy_app')
    //  console.log(decoder(token))
 }


 export default {
     getUserInfo
 }

