let users = [];


const addUser = (userInfo) => {
    const existingUser=()=>{
        let exist=false
        users.forEach(single=>{
            if(single.email===userInfo.email){
                exist= true
            }
        })
        return exist
    }
    if(!userInfo.id || !userInfo.email) {
        console.log('ID and email are required.')
        return
    };
    if(existingUser()){
        console.log('User Exist')
        return
    }
  
    
    const user = { id:userInfo.id, email:userInfo.email };
  
    users.push(user);
    return { user };
}

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if(index !== -1) return users.splice(index, 1)[0];
}
const getUser = (email) => users.find((user) => user.email === email);
// const getUsersInRoom = (room) => users.filter((user) => user.room === room);
module.exports = { addUser:addUser, removeUser:removeUser, getUser:getUser,users:users };  


