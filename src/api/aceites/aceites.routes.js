const AceiteRoutes = require("express").Router();
const {
  getAllAceites,
  getAceiteByID,
  createAceite,
} = require("./aceites.controller");

AceiteRoutes.get("/getAll", getAllAceites);
AceiteRoutes.get("/getByID/:id", getAceiteByID);
AceiteRoutes.post("/create", createAceite);

module.exports = AceiteRoutes;
