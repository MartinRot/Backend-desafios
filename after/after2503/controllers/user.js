const users = [
    { "nombre": "user1", "apellido": "lastnameuser", "email": "user@email.com" },
    { "nombre": "user2", "apellido2": "lastnameuser2", "email2": "user@email.com2" },
    { "nombre": "user3", "apellido3": "lastnameuser3", "email3": "user@email.com3" }
];

let userPromise = new Promise ((resolve, reject) => {
    setTimeout(function(){
        resolve(users)
    }, 250)
})

export const getUsers = () => {
    return userPromise
}

export const addUser = user => {
    users.push(user)
}

export const deleteUser = user => {
    console.log('borrar usuario')
}


