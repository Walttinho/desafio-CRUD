const express = require('express')
const router = require('./router/indexRouter')
const cors = require('cors')
require('dotenv').config()
const app = express()

app.use(express.json())
app.use(cors())

app.use(router)


module.exports = app