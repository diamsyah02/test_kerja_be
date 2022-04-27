"use strict"

const response = require('@helpers/WebResponse')
const repo = require('./repository')

const fetchAll = async () => {
  const data = await repo.fetchAll()
  if(data == undefined) {
    return response(500, `Opss.. something's wrong with your database`, [])
  } else {
    if(typeof data === 'object') {
      let arrData = []
      data.map((val, i) => {
        const convertDate = new Date(val.expiredAt)
        const date = (convertDate.getDate() < 9) ? `0${convertDate.getDate()}` : convertDate.getDate()
        const month = (convertDate.getMonth()+1 < 9) ? `0${convertDate.getMonth()+1}` : convertDate.getMonth()+1
        let item = {
          id: val.id,
          name: val.name,
          qty: val.qty,
          picture: val.picture,
          expiredAt: `${convertDate.getFullYear()}-${month}-${date}`,
          isActive: val.isActive
        }
        arrData.push(item)
      })
      return response(200, 'Get data pegawai successfully', arrData)
    } else  {
      return response(500, data, [])
    }
  }
}
const fetchDetail = async (req) => {
  const data = await repo.fetchDetail(req)
  if(data == undefined) {
    return response(500, `Opss.. something's wrong with your database`, [])
  } else {
    if(typeof data === 'object') {
      return response(200, `Get data pegawai with id = ${req.params.id} successfully`, data[0])
    } else  {
      return response(500, data, [])
    }
  }
}

const store = async (req) => {
  const data = await repo.store(req)
  if(data == undefined) {
    return response(500, `Opss.. something's wrong with your database`, [])
  } else {
    if(typeof data === 'object') {
      return response(200, 'Insert data pegawai successfully', data)
    } else  {
      return response(500, data, [])
    }
  }
}

const update = async (req) => {
  const data = await repo.update(req)
  if(data == undefined) {
    return response(500, `Opss.. something's wrong with your database`, [])
  } else {
    if(typeof data === 'string') {
      return response(500, data, [])
    } else  {
      return response(200, `Update data pegawai with id = ${req.params.id}`, data)
    }
  }
}

const remove = async (req) => {
  const data = await repo.remove(req)
  if(data == undefined) {
    return response(500, `Opss.. something's wrong with your database`, [])
  } else {
    if(typeof data === 'string') {
      return response(500, data, [])
    } else  {
      return response(200, `Delete data pegawai with id = ${req.params.id}`, data)
    }
  }
}

module.exports = {
  fetchAll,
  fetchDetail,
  store,
  update,
  remove
}