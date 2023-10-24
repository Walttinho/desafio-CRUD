const swaggerRouter = require('express').Router()

const swaggerUi = require('swagger-ui-express')

const swaggerDocument = require("../swaager.json");


swaggerRouter.use("/", swaggerUi.serve);
swaggerRouter.get("/", swaggerUi.setup(swaggerDocument));


module.exports = swaggerRouter;