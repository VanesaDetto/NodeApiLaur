const AcetoRoutes = require("express").Router();
const {
  getAllAcetos,
  getAcetoByID,
  createAceto,
} = require("./aceto.controller");

AcetoRoutes.get("/getAll", getAllAcetos);
AcetoRoutes.get("/getByID/:id", getAcetoByID);
AcetoRoutes.post("/create", createAceto);

module.exports = AcetoRoutes;
