let users = [];

const addUser = ({id,username,room})=>{
//Sanisize the input 
username = username.trim().toLowerCase();
room = room.trim().toLowerCase();

//validate the data
if(!username || !room){
    return {
        error : "Username and room are required"
    }
}

//Check for existing user
const existingUser = users.find((user)=>{
    return user.room === room && user.username === username
})


//validate username
if(existingUser){
return {error : "username is in use"}
}

//Store user
const user = {id,username,room}
users.push(user)
return user
}


const removeUser = (id)=>{
    const index = users.findIndex((user)=>user.id===id)

    if(index !== -1){
        return users.splice(index,1)[0]   //return the user deleted
    }
}


const getUser = (id)=>{
    const user = users.find((user)=>user.id === id)
    if(user){
        return user
    }
    return {error : "user not found"}
}

const getRoomUsers = (room)=>{
    const roomUsers = users.filter((user)=>user.room ===room)
    if(roomUsers.length > 0){
        return roomUsers;
    }
    return {error : "room empty"}
}






module.exports = {
    addUser,
    getRoomUsers,
    getUser,
    removeUser
}