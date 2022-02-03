const db = require('../data/db-config')

async function insertUser(user) {
  const [newUserObject] = await db('users').insert(user, ['user_id', 'username', 'password'])
  return newUserObject // { user_id: 7, username: 'foo', password: 'xxxxxxx' }
}

function getAllUsers() { 
    return db('users') 
}



module.exports = {
    getAllUsers,
    insertUser,
    
}