const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  obraId: {
    type: String,
    required: true,
  },
  quantidade: {
    type: Number,
    required: true,
  },
});

const Cart = mongoose.model("carts", CartSchema);

module.exports = Cart;
