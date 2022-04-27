/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('product').del()
  await knex('product').insert([
    {id: 1, name: 'buku', qty: 10, picture: null, expiredAt: '2022-04-04', isActive: 1},
  ]);
};
