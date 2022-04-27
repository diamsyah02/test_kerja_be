"use strict"

const { fetchAll, fetchDetail, store, update, remove } = require('./controller')
const db = require('@configs/db')

describe('Test Product Controller', function () {
  test('Function FetchAll', async () => {
    const req = {}
    const res = {fieldResponse: {},
      send: function(res) {
        this.fieldResponse = res
        function status(status) {
          return status
        }
        return {
          status
        }
      },
    }
    await fetchAll(req, res)
    expect([200, 400]).toContain(res.fieldResponse.statusCode)
  })
  test('Function FetchDetail', async () => {
    const req = {
      params: {
        id: 1
      }
    }
    const res = {fieldResponse: {},
      send: function(res) {
        this.fieldResponse = res
        function status(status) {
          return status
        }
        return {
          status
        }
      },
    }
    await fetchDetail(req, res)
    expect([200, 400]).toContain(res.fieldResponse.statusCode)
  })
  test('Function Store', async () => {
    const req = {
      body: {
        id: 999,
        name: 'Test',
        qty: 10,
        picture: null,
        expiredAt: '2022-01-02',
        isActive: 1
      }
    }
    const res = {fieldResponse: {},
      send: function(res) {
        this.fieldResponse = res
        function status(status) {
          return status
        }
        return {
          status
        }
      },
    }
    await store(req, res)
    expect([200, 400]).toContain(res.fieldResponse.statusCode)
  })
  test('Function Update', async () => {
    const req = {
      body: {
        name: 'Test99',
        qty: 99,
        picture: null,
        expiredAt: '2022-01-02',
        isActive: 1
      },
      params: {
        id: 999
      }
    }
    const res = {fieldResponse: {},
      send: function(res) {
        this.fieldResponse = res
        function status(status) {
          return status
        }
        return {
          status
        }
      },
    }
    await update(req, res)
    expect([200, 400]).toContain(res.fieldResponse.statusCode)
  })
  test('Function Remove', async () => {
    const req = {
      params: {
        id: 999
      }
    }
    const res = {fieldResponse: {},
      send: function(res) {
        this.fieldResponse = res
        function status(status) {
          return status
        }
        return {
          status
        }
      },
    }
    await remove(req, res)
    expect([200, 400]).toContain(res.fieldResponse.statusCode)
  })
  afterAll(async () => {
    await db.destroy()
  })
})