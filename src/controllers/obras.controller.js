const obrasService = require("../services/obras.service");

const findAllObrasController = (req, res) => {
  const AllObras = obrasService.findAllObrasService();

  if (AllObras.length == 0) {
    return res.status(404).send({ message: "Não existe obra registrada!" });
  }

  res.send(AllObras);
};

const findByIdObraController = (req, res) => {
  const paramsId = +req.params.id;

  if (!paramsId) {
    return res.status(400).send({ message: "Id Inválido" });
  }
  const chosenObra = obrasService.findByIdObraService(paramsId);

  if (!chosenObra) {
    return res.status(404).send({ message: "Obra não encontrada" });
  }
  res.send(chosenObra);
};

const createObraController = (req, res) => {
  const obra = req.body;

  if (!obra || !obra.nota || !obra.nome || !obra.sinopse || !obra.foto) {
    return res
      .status(400)
      .send({ message: "Envie todos os campos das obras!" });
  }
  const newObra = obrasService.createObraService(obra);
  res.status(201).send(newObra);
};

const updateByIdObraController = (req, res) => {
  const paramsId = +req.params.id;
  if (!paramsId) {
    return res.status(400).send({ message: "Id Inválido" });
  }
  const obraEdit = req.body;
  if (!obraEdit || !obraEdit.nota || !obraEdit.nome || !obraEdit.sinopse || !obraEdit.foto) {
    return res
      .status(400)
      .send({ message: "Envie todos os campos das obras!" });
  }
  const updatedObra = obrasService.updateByIdObraService(paramsId, obraEdit);
  res.send(updatedObra);
};

const deleteByIdObraController = (req, res) => {
  const paramsId = +req.params.id;
  if (!paramsId) {
    return res.status(400).send({ message: "Id Inválido" });
  }
  obrasService.deleteByIdObraService(paramsId);
  res.send({ message: "Obra deletada com sucesso!" });
};

module.exports = {
  findAllObrasController,
  findByIdObraController,
  createObraController,
  updateByIdObraController,
  deleteByIdObraController,
};
