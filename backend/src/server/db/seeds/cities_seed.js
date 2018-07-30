
exports.seed = (knex, Promise) => {
  return knex('cities').del()
  .then(() => {
    return knex('cities').insert({
      city: 'Denver',
    });
  })
  .then(() => {
    return knex('cities').insert({
      city: 'Boulder',
    });
  })
  .then(() => {
    return knex('cities').insert({
      city: 'Colorado Springs',
    });
  });
};