const res = require("express/lib/response");
const cartService = require("../services/cart.service");

const findAllCartController = async (req, res) => {
  const allCarts = await cartService.findAllCartService();
  if (!allCarts) {
    return res.status(404).send({ message: "Carrinhos não encontrados" });
  }
  res.status(200).send(allCarts);
};
const createManyItemsCartController = async (req, res) => {
  const cart = req.body;
  const newCart = await cartService.createManyItemsCartService(cart);
  res.status(201).send(newCart);
};
const deleteAllItemsCartController = async (req, res) => {
  await cartService.deleteAllItemsCartService();
  res.status(200).send({ message: "Carrinhos deletados com sucesso!" });
};

module.exports = {
  findAllCartController,
  createManyItemsCartController,
  deleteAllItemsCartController,
};
