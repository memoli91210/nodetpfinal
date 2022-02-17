let express = require("express");
const router = express.Router();
const controller = require("../Controller/championnat");
module.exports = router;

router.get("/", controller.afficher);

router.post("/", controller.create);

router.get("/:id", controller.afficherid);

router.put("/:id", controller.modif);

router.delete("/:id", controller.supp);
