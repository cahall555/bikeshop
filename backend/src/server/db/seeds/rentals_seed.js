exports.seed = (knex, Promise) => {
  return knex('rentals').del()
  .then(() => {
    return knex('rentals').insert({
      pickupdate: '07/29/2018',
      rentaltime: '1:00',
      city: 1,
      firstname: 'Bella',
      lastname: 'Bug'
    });
  })
  .then(() => {
    return knex('rentals').insert({
      pickupdate: '08/03/2018',
      rentaltime: '3:00',
      city: 2,
      firstname: 'Maci',
      lastname: 'Pie'
    });
  })
  .then(() => {
    return knex('rentals').insert({
      pickupdate: '08/17/2018',
      rentaltime: '2:00',
      city: 3,
      firstname: 'Nora',
      lastname: 'Dora'
    });
  });
};

