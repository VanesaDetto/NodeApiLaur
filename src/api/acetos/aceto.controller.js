const Aceto = require("./aceto.model");
const { setError } = require("../../helpers/error");

const getAllAcetos = async (req, res, next) => {
  try {
    const acetos = await Aceto.find();
    return res.json({
      status: 200,
      message: "Recover all acetos",
      data: { acetos },
    });
  } catch (error) {
    return next(setError(500, "Failed all Acetos"));
  }
};

const getAcetoByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const aceto = await Aceto.findById(id);
    if (!aceto) return next(setError(404, "Aceto not found"));
    return res.json({
      status: 200,
      message: "Recover  aceto by ID",
      data: { aceto },
    });
  } catch (error) {
    return next(setError(500, "Failed Aceto by ID"));
  }
};

const createAceto = async (req, res, next) => {
  try {
    const AcetoToSave = new Aceto(req.body);
    const acetoDB = await AcetoToSave.save();
    return res.json({
      status: 201,
      message: "Create aceto",
      data: { acetoDB },
    });
  } catch (error) {
    return next(setError(500, "Failed create Aceto"));
  }
};

module.exports = { getAllAcetos, getAcetoByID, createAceto };
