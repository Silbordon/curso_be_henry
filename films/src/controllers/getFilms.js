// const Films = require("../data")
const axios = require("axios");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const films = await axios.get("http://database:8004/Film");
  response(res, 200, films.data);
};

// module.exports = async(req, res) =>{
//     const films = await Films.list()
//     res.status(200).json(films)
// }