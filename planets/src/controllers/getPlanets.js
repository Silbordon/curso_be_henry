// const Planets = require("../data")

const axios = require("axios");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const films = await axios.get("http://database:8004/Planet");
  response(res, 200, films.data);
};

// module.exports = async(req, res) =>{
//     const planets = await Planets.list()
//     res.status(200).json(planets)
// }