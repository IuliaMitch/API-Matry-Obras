const mongoose = require("mongoose");
const obrasService = require("../services/obras.service");

const findAllObrasController = async (req, res) => {
  const AllObras = await obrasService.findAllObrasService();
  if (AllObras.length == 0) {
    return res.status(404).send({ message: "Não existe obra registrada!" });
  }
  res.send(AllObras);
};

const findByIdObraController = async (req, res) => {
  const paramsId = req.params.id;
  const chosenObra = await obrasService.findByIdObraService(paramsId);
  if (!chosenObra) {
    return res.status(404).send({ message: "Obra não encontrada" });
  }
  res.send(chosenObra);
};

const createObraController = async (req, res) => {
  const obra = req.body;
  
  const newObra = await obrasService.createObraService(obra);
  res.status(201).send(newObra);
};

const updateByIdObraController = async (req, res) => {
  const paramsId = req.params.id;
  const editObra = req.body;

  const updatedObra = await obrasService.updateByIdObraService(
    paramsId,
    editObra
  );
  res.send(updatedObra);
};

const deleteByIdObraController = async (req, res) => {
  const paramsId = req.params.id;
  await obrasService.deleteObraService(paramsId);
  res
    .send({ message: "Obra deletada com sucesso!" })
};

module.exports = {
  findAllObrasController,
  findByIdObraController,
  createObraController,
  updateByIdObraController,
  deleteByIdObraController,
};
