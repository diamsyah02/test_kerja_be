/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('product', tbl => {
    tbl.bigint('id').primary(),
    tbl.string('name'),
    tbl.integer('qty'),
    tbl.text('picture'),
    tbl.date('expiredAt'),
    tbl.boolean('isActive')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
