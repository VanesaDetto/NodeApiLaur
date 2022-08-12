const Aceite = require("./aceites.model");
const { setError } = require("../../helpers/error");

const getAllAceites = async (req, res, next) => {
  try {
    const aceites = await Aceite.find();
    return res.json({
      status: 200,
      message: "Recover all aceites",
      data: { aceites },
    });
  } catch (error) {
    return next(setError(500, "Failed all Aceites"));
  }
};

const getAceiteByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const aceite = await Aceite.findById(id);
    if (!aceite) return next(setError(404, "Aceite not found"));
    return res.json({
      status: 200,
      message: "Recover  actor by ID",
      data: { aceite },
    });
  } catch (error) {
    return next(setError(500, "Failed Aceite by ID"));
  }
};

const createAceite = async (req, res, next) => {
  try {
    const AceiteToSave = new Aceite(req.body);
    const aceiteDB = await AceiteToSave.save();
    return res.json({
      status: 201,
      message: "Create aceite",
      data: { aceiteDB },
    });
  } catch (error) {
    return next(setError(500, "Failed create Aceite"));
  }
};

module.exports = { getAllAceites, getAceiteByID, createAceite };
