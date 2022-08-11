const configDB = require('../knexfile');
const knex = require('knex')(configDB.development);

const getAll = () =>{
    return knex
      .column('nombre', 'id', 'tipo')
      .select()
      .from('pokemon')
}

const getPokeById = (id) =>{
    return knex('pokemon')
      .where('id', id)
      .select('nombre', 'id', 'peso', 'altura', 'descripcion', 'img', 'hp', 'atk', 'def', 'satk', 'sdef', 'spd')

}

const createPoke = (body) =>{
  return knex('pokemon')
   .insert(body)

}

// const updateUser = (id, body) =>{
//   return knex('pokemon')
//    .where('id', id)
//    .update(body)

// }

// const deleteUser = (id) =>{
//   return knex('pokemon')
//   .where('id', id)
//   .del(body)
// }

module.exports = {
    getAll,
    getPokeById,
    createPoke,
    // updateUser,
    // deleteUser
}