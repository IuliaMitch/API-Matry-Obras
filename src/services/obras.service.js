// const Obras = [
//   {
//     id: 1,
//     sinopse:
//       "Ela costumava ser um assalariado em um escritório de elite do Japão mas renasceu como uma garotinha por causa de um deus colérico. Seu nome é Tanya Degurechov e, priorizando a otimização e o avanço acima de tudo, ela se tornará a entidade mais perigosa dentre os feiticeiros do Exército Imperial.",
//     foto: "./assets/img/tanya.jpg",
//     nome: "Youjo Senki",
//     nota: 5,
//   },
//   {
//     id: 2,
//     sinopse:
//       "Elias Ainsworth, um mago misterioso, aparece para Chise e oferece a ela a chance de ser sua aprendiz em um mundo de fadas e dragões. Antes que Chise se acostume com essa ideia, ela descobre que seu destino é ser mais do que a aprendiz de Elias, mas sim ser sua noiva.",
//     foto: "./assets/img/chise.png",
//     nome: "Mahoutsukai no Yome",
//     nota: 5,
//   },
//   {
//     id: 3,
//     sinopse:
//       "Na história podemos acompanhar um otaku desempregado com seus trinta e quatro anos que chega num ponto sem saída em sua vida e decide virar a folha, porém ele é atropelado e morre. Ele acaba renascendo no corpo de uma criança num estranho mundo novo de espadas e magia.",
//     foto: "./assets/img/mushoku.png",
//     nome: "Mushoku Tensei",
//     nota: 3.5,
//   },
//   {
//     id: 4,
//     sinopse:
//       "O caçador Kim Gong-ja vive a vida deprimido, como caçador rank F ele é menosprezado e ignorado por muitos, invejando a vida do caçador n°1, ele deseja freneticamente ser como ele até que... [Você despertou uma habilidade Rank S.] [Mas só funciona quando você morre.] Epq  DO QUE ELA VAI SERVIR SE EU JÁ ESTIVER MORTO!?.",
//     foto: "./assets/img/suicide.jpg",
//     nome: "SSS-Class Suicide Hunter",
//     nota: 4.7,
//   },
//   {
//     id: 5,
//     sinopse:
//       'O mestre espião de codinome "Twilight" passou seus dias em missões secretas, tudo pelo sonho de um mundo melhor. Mas um dia, ele recebe uma nova ordem particularmente difícil da central de comando. Para sua missão, ele deve formar uma família temporária e começar uma nova vida?! Uma espionagem / ação / comédia sobre uma família única!',
//     foto: "./assets/img/twilight.jpg",
//     nome: "Spy x Family",
//     nota: 5,
//   },
// ];



const Obra = require('../model/Obra')



const findAllObrasService = async () => {
  const allObras = await Obra.find();
  return allObras
};

const findByIdObraService = async (paramsId) => {
  const oneObra = await Obra.findById(paramsId)
  return oneObra
};

const createObraService = async (newObra) => {
  const createdObra = await Obra.create(newObra)
  return createdObra;
};

const updateByIdObraService = async (paramsId, obraEdited) => {
  const updateObra = await Obra.findByIdAndUpdate(paramsId, obraEdited)
  return updateObra;
};

const deleteObraService = async (paramsId) => {
   return await Obra.findByIdAndDelete(paramsId)
};

module.exports = {
  findAllObrasService,
  findByIdObraService,
  createObraService,
  updateByIdObraService,
  deleteObraService,
};
