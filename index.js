//#region parametrage
const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const userRoute = require("./Routing/user");
const champRoute = require("./Routing/championnat");
const teamRoute = require("./Routing/equipe");
const joueurRoute = require("./Routing/joueur");
const jwt = require("jsonwebtoken");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//#endregion

//#region parametrage db mongoose

mongoose
  .connect(
    "mongodb+srv://**********@cluster0.3mutn.mongodb.net/DbTestFinal?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));
//#endregion

const auth = (req, res, next) => {
  let token = req.headers.authorization;
  if (token == null) {
    res.status(400).json({ message: "pas de Token!" });
  } else {
    token = token.replace("Bearer ", "");
    jwt.verify(token, "secret_key", function (err, payload) {
      if (err) {
        res.status(401).json({ message: "Non autorisé" });
      } else {
        // res.send("On est validé, accès à cette route");
        next();
      }
    });
  }
};

app.get("/admin", auth, (req, res) => {
  res.send("user authentified");
});

//#region endpoints

app.use("", userRoute);
app.use("/championnat", auth, champRoute);
app.use("/teams", auth, teamRoute);
app.use("/joueur", auth, joueurRoute);

//#endregion

//#region routes

//#endregion

app.listen(port, () => console.log(`Le serveur tourne sur le port ${port}`));
