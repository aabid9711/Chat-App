const users = []

const addUser = ({ id, username, room })=>{

    //clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    // validate data
    if(!username || !room){
        return {
            error:'username and room are reqired!'
        }
    }

    //check for existing user
    const existingUser = users.find((user)=>{
       return user.room === room && user.username === username
    })

    //validate user
    if(existingUser){
        return{
            error:'username is in use!'
        }
    }

    //store user
    const user = { id, username, room }
    users.push(user)
    return { user }
}

const removeUser = (id)=>{

    const index = users.findIndex((user)=>{
        return user.id === id
    })
    if(index != -1){
        return users.splice(index,1)[0]
    }
}

const getUser = (id)=>{

    return users.find((user)=> user.id === id)
}

const getUsersInRoom = (room)=>{
    
    room = room.trim().toLowerCase()
    return users.filter((user)=> user.room === room)
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}