const mongoose = require("mongoose");

const ObraSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  sinopse: {
    type: String,
    required: true,
  },
  nota: {
    type: Number,
    required: true,
  },
  foto: {
    type: String,
    required: true,
  },
});

const Obra = mongoose.model("obras", ObraSchema);

module.exports = Obra;
