let express = require("express");
const router = express.Router();
const controller = require("../Controller/joueur");
module.exports = router;

router.get("/", controller.afficher);

router.post("/:id", controller.create);

router.get("/:id", controller.afficherid);

router.put("/:id", controller.modif);

router.delete("/:id", controller.supp);
