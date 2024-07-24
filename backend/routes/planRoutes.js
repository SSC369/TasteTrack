const router = require("express").Router();

const fetchUser = require("../middlewares/fetchUser");
const { addPlan,  getPlan, editPlan } = require("../controllers/planController");

router.post("/addplan", fetchUser, addPlan);
router.get("/getplan/:date", fetchUser, getPlan);
router.put("/editplan", fetchUser, editPlan)

module.exports = router;
