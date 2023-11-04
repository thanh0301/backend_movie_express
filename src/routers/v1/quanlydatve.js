const express = require('express')
const {getquanlydatve} = require('../../controllers/quanlydatvecontrollers')


const quanlydatve = express.Router()


quanlydatve.post('/datve',getquanlydatve);
quanlydatve.post('/taolichchieu')

module.exports =quanlydatve

