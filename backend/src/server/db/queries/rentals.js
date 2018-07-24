const knex = require('../connections');

function getAllRentals() {
    return knex('rentals')
    .select('*');
  }

function getSingleRental(id) {
    return knex('rentals')
    .select('*')
    .where({ id: parseInt(id) });
}

function addRental(rental) {
    return knex('rentals')
    .insert(rental)
    .returning('*');
  }

function updateRental(id, rental) {
    return knex('rentals')
    .update(rental)
    .where({ id: parseInt(id) })
    .returning('*');
  }
  
function deleteRental(id) {
    return knex('rentals')
    .del()
    .where({ id: parseInt(id) })
    .returning('*');
  }
  

  module.exports = {
    getAllRentals,
    getSingleRental,
    addRental,
    updateRental,
    deleteRental,
  };