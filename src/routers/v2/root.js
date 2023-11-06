const express=  require('express')
const rootRouter= express.Router()


const quanlydatve = require('../v1/quanlydatve')
const  quanlyrap=require('../v1/quanlyrap')
const quanlyphim=require('../v1/quanlyphim')
rootRouter.use('/quanlydatve',quanlydatve)
rootRouter.use('/quanlyrap',quanlyrap)
rootRouter.use('/quanlyphim',quanlyphim)



module.exports =rootRouter