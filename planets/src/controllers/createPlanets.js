// module.exports = (req, res) => {
//   res.status(200).send("planetas  creados");
// };


const axios = require("axios");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const planetData = req.body; 
  const planets = await axios.post("http://database:8004/Planet", planetData);
  response(res, 200, planets.data);
};
