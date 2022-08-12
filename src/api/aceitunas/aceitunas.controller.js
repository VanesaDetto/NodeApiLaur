const Aceitunas = require("./aceitunas.model");
const { setError } = require("../../helpers/error");

const getAllAceitunas = async (req, res, next) => {
  try {
    const aceituna = await Aceitunas.find();
    return res.json({
      status: 200,
      message: "Recover all aceitunas",
      data: { aceituna },
    });
  } catch (error) {
    return next(setError(500, "Failed all Aceitunas"));
  }
};

const getAceitunasByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const aceituna = await Aceitunas.findById(id);
    if (!aceituna) return next(setError(404, "Aceituna not found"));
    return res.json({
      status: 200,
      message: "Recover aceituna by ID",
      data: { aceituna },
    });
  } catch (error) {
    return next(setError(500, "Failed Aceituna by ID"));
  }
};

const createAceitunas = async (req, res, next) => {
  try {
    const AceitunaToSave = new Aceitunas(req.body);
    const aceitunaDB = await AceitunaToSave.save();
    return res.json({
      status: 201,
      message: "Create aceituna",
      data: { aceitunaDB },
    });
  } catch (error) {
    return next(setError(500, "Failed create Aceituna"));
  }
};

module.exports = { getAllAceitunas, getAceitunasByID, createAceitunas };
