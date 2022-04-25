const { Template } = require("ejs");
const mongoose = require("mongoose");

const validId = (req, res, next) => {
  const paramsId = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(paramsId)) {
    return res.status(400).send({ message: "Id Inválido" });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  const obra = req.body;
  if (!obra || !obra.nota || !obra.nome || !obra.sinopse || !obra.foto) {
    return res.status(400).send({ message: "Envie todos os campos!" });
  }
  if (obra.nota > 5 || obra.nota < 1) {
    return res.status(400).send({message: "Envie uma nota válida"})
  }

  next();
};

const validObjectBodyCart = (req, res, next) => {
  const cart = req.body;
  carrinho.forEach((item) => {
    if (!item || !item.obraId || !item.quantidade) {
      return res.status(400).send({ message: "Envie todos os campos!" });
    }
  });
};

module.exports = {
  validId,
  validObjectBody,
  validObjectBodyCart,
};
