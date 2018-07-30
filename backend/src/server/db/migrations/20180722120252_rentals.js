exports.up = (knex, Promise) => {
    return knex.schema.createTable('rentals', (table) => {
      table.increments();
      table.date('pickupdate').notNullable();
      table.time('rentaltime').notNullable();
      table.integer('city').notNullable();
      table.string('firstname').notNullable();
      table.string('lastname').notNullable();
    });
  };
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('rentals');
  };
  
