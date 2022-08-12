const Vino = require("./vinos.model");
const { setError } = require("../../helpers/error");

const getAllVinos = async (req, res, next) => {
  try {
    const vinos = await Vino.find();
    return res.json({
      status: 200,
      message: "Recover all vinos",
      data: { vinos },
    });
  } catch (error) {
    return next(setError(500, "Failed all Vinos"));
  }
};

const getVinosByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const vino = await Vino.findById(id);
    if (!vino) return next(setError(404, "Vino not found"));
    return res.json({
      status: 200,
      message: "Recover vino by ID",
      data: { vino },
    });
  } catch (error) {
    return next(setError(500, "Failed Vino by ID"));
  }
};

const createVino = async (req, res, next) => {
  try {
    const VinoToSave = new Vino(req.body);
    const vinoDB = await VinoToSave.save();
    return res.json({
      status: 201,
      message: "Create vino",
      data: { vinoDB },
    });
  } catch (error) {
    return next(setError(500, "Failed create Vino"));
  }
};

module.exports = { getAllVinos, getVinosByID, createVino };
