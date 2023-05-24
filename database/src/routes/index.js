const {Router} = require("express");
const store = require("../database")
const {validateModel} = require("../middlewares")
const { v4: uuidv4 } = require('uuid');


const router = Router()
router.get("/:model", validateModel, async (req, res)=>{
    const {model} = req.params;
    const response = await store[model].list();
    res.status(200).json(response)
})

router.get("/:model/:id", validateModel, async (req, res)=>{
    const {model, id} = req.params;
    const response = await store[model].get(id);
    res.status(200).json(response)
})


router.post("/:model", validateModel, async (req, res) => {
    const { model } = req.params;
    let { name, _id } = req.body;
    console.log("data", name, _id);

    if (!_id) {
        _id = uuidv4(); // Genera un UUID único para el documento
      }
  
    const data = {
        name : name,
        _id: _id
    }
    const response = await store[model].insert(data);
    res.status(200).json(response);
  });


module.exports = router;