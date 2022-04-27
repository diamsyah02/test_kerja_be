"use strict"

const controller = require('./controller')

async function ProductRoute(app) {
  await app.route(`${process.env.V1}/product`).get(controller.fetchAll)
  await app.route(`${process.env.V1}/product/:id`).get(controller.fetchDetail)
  await app.route(`${process.env.V1}/product`).post(controller.store)
  await app.route(`${process.env.V1}/product/:id`).post(controller.update)
  await app.route(`${process.env.V1}/product/:id/delete`).get(controller.remove)
}

module.exports = ProductRoute