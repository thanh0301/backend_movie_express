const express  = require('express');
const cors = require('cors')
require('dotenv').config();
const app = express()

app.use(cors())
app.use(express.urlencoded())
app.use(express.json());

app.listen(process.env.port,() =>{
    console.log("thanh cong roi")
})

const rootRouter = require('./routers/v2/root')
app.use('/api',rootRouter)




