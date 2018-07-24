exports.seed = (knex, Promise) => {
  return knex('rentals').del()
  .then(() => {
    return knex('rentals').insert({
      pickupdate: '07/29/2018',
      time: '1:00',
      city: 'Denver',
      firstname: 'Bella',
      lastname: 'Bug'
    });
  })
  .then(() => {
    return knex('rentals').insert({
      pickupdate: '08/03/2018',
      time: '3:00',
      city: 'Boulder',
      firstname: 'Maci',
      lastname: 'Pie'
    });
  })
  .then(() => {
    return knex('rentals').insert({
      pickupdate: '08/17/2018',
      time: '2:00',
      city: 'Colorado Springs',
      firstname: 'Nora',
      lastname: 'Dora'
    });
  });
};

