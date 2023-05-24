const axios = require("axios");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const filmData = req.body; 
  const films = await axios.post("http://database:8004/Film", filmData);
  response(res, 200, films.data);
};
