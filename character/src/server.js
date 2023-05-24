const express = require ("express")
const morgan = require("morgan");
const { ClientError } = require("./utils/errors");
// const router = require("./routes")

const server = express();

server.use(morgan("dev"));
server.use(express.json());

server.use(require("./routes"));

server.use("*", (req, res) =>{
    res.status(404).send("not found")
    // ClientError("Not Found", 404)
})

 
server.use((err, req, res, next) =>{
    res.status(err.statusCode || 500).send({
        error: true,
        message: err.message,
    })
})

module.exports = server