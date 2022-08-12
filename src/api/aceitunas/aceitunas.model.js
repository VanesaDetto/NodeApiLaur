const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  name: { type: String, unique: true, required: true },
  categoria: { type: String, unique: false, required: true },
  etiqueta: { type: String, unique: false, required: false },
  descripcion: { type: String, unique: true, required: true },
  imagen: { type: String, unique: false, required: true },
  precio: { type: String, unique: false, required: false },
  tamaño: { type: String, unique: false, required: false },
});

module.exports = mongoose.model("aceitunas", schema);
