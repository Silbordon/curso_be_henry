const {ClientError} = require("../utils/errors")

module.exports = (req, res, next) =>{
const {name} = req.body;
console.log(req.body);
console.log("name",name);
if(name) return next();
else throw new ClientError("error en el nombre", 401)
}