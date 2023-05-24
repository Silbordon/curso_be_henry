const server = require('./src/server')

// const {Character, Film, Planet} = require("./src/database")

// Character.find().populate("homeworld", ["_id", "name"]).populate("films", ["_id", "title"]).then(res=> console.log(res))


// Character.get(1).then(res=> console.log(res))

// Character.insert({
//     _id : "201",
//     name: "Silvi",
//     birth_year : "1989"
// }).then(res=> console.log(res))

// Planet.list().then(res=> console.log(res))

server.listen(8004, ()=>{
    console.log("database on port 8004");
})