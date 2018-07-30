const knex = require('../connections');

function getAllCities() {
    return knex('cities')
    .select('*');
  }

function getSingleCity(id) {
    return knex('cities')
    .select('*')
    .where({ id: parseInt(id) });
}

function addCity(city) {
    return knex('cities')
    .insert(city)
    .returning('*');
  }

function updateCity(id, city) {
    return knex('cities')
    .update(rental)
    .where({ id: parseInt(id) })
    .returning('*');
  }
  
function deleteCity(id) {
    return knex('cities')
    .del()
    .where({ id: parseInt(id) })
    .returning('*');
  }
  

  module.exports = {
    getAllCities,
    getSingleCity,
    addCity,
    updateCity,
    deleteCity,
  };