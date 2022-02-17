//#region parametrage
const express = require("express");

const controller = require("../Controller/equipe");
const router = express.Router();
//#endregion

//#region router content
router.get("/", controller.findAllTeams);
router.get("/:id", controller.selectTeamById);
router.post("/", controller.createTeam);
router.delete("/:id", controller.deleteTeamById);
router.put("/:id", controller.MettreAJourTeam);
//#endregion

router.get("/victoire/:id", controller.victoire);

router.get("/nul/:id", controller.nul);

router.get("/defaite/:id", controller.defaite);

module.exports = router;
