const sequelize = require('../model/index')
const initModel = require('../model/init-models')
const model = initModel(sequelize)
const { successCode, errorCode, failCode } = require('../ulti/response');