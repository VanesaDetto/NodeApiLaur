const VinoRoutes = require("express").Router();
const { getAllVinos, getVinosByID, createVino } = require("./vinos.controller");

VinoRoutes.get("/getAll", getAllVinos);
VinoRoutes.get("/getByID/:id", getVinosByID);
VinoRoutes.post("/create", createVino);

module.exports = VinoRoutes;
