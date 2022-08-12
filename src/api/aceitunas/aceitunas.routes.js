const AceitunasRoutes = require("express").Router();
const {
  getAllAceitunas,
  getAceitunasByID,
  createAceitunas,
} = require("./aceitunas.controller");

AceitunasRoutes.get("/getAll", getAllAceitunas);
AceitunasRoutes.get("/getByID/:id", getAceitunasByID);
AceitunasRoutes.post("/create", createAceitunas);

module.exports = AceitunasRoutes;
