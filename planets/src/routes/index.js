const {Router} = require("express");
const controllers = require("../controllers")
const router = Router();

router.get("/planets", controllers.getPlanets)
router.post("/planets", controllers.createPlanets)
module.exports = router