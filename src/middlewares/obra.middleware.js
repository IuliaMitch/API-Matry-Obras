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
    return res
      .status(400)
      .send({ message: "Envie todos os campos das obras!" });
  }

    next();
};

module.exports = {
    validId,
    validObjectBody,
}
