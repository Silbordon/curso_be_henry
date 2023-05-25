const axios = require("axios");
const Character = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  console.log("hola get");
  const characters = await axios.get("http://database:8004/Character");
  response(res, 200, characters.data);
};

