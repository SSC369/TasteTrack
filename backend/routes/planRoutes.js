const router = require("express").Router();

const fetchUser = require("../middlewares/fetchUser");
const { addPlan,  getPlan } = require("../controllers/planController");

router.post("/addplan", fetchUser, addPlan);
router.get("/getplan/:date", fetchUser, getPlan);

module.exports = router;
