
exports.up = (knex, Promise) => {
    return knex.schema.createTable('cities', (table) => {
      table.increments();
      table.string('city').notNullable().unique();
    });
  };
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('cities');
  };
  
