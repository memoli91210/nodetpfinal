//#region parametrage
const express = require("express");

const controller = require("../Controller/user");
const router = express.Router();

//#endregion

//#region private middlewares

//#endregion

//#region router content

router.get("/Users", controller.findAllUsers);
router.post("/signup", controller.signup);
router.post("/login", controller.login);
//#endregion

module.exports = router;
