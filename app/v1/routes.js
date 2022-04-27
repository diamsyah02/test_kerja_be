"use strict"

const ProductRoute = require('./modules/product/routes')

async function RouteV1(app) {
  await ProductRoute(app)
}

module.exports = RouteV1