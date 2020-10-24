const express = require("express");
const router = express.Router();
const contatcControllr = require("../controllers/contactV2_controller");

router.get("/", contatcControllr.findAll);
router.post("/", contatcControllr.create);
router.get("/:id", contatcControllr.findOne);
router.put("/:id", contatcControllr.UpdateUser);
router.delete("/:id", contatcControllr.delete);
module.exports = router;
