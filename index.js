import express from "express";
import cors from "cors";

const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());

const Obras = [
  {
    id: 1,
    sinopse: "Ela costumava ser um assalariado em um escritório de elite do Japão mas renasceu como uma garotinha por causa de um deus colérico. Seu nome é Tanya Degurechov e, priorizando a otimização e o avanço acima de tudo, ela se tornará a entidade mais perigosa dentre os feiticeiros do Exército Imperial.",
    foto: "./assets/img/tanya.jpg",
    nome: "Youjo Senki",
    nota: 5,
  },
  {
    id: 2,
    sinopse: "Elias Ainsworth, um mago misterioso, aparece para Chise e oferece a ela a chance de ser sua aprendiz em um mundo de fadas e dragões. Antes que Chise se acostume com essa ideia, ela descobre que seu destino é ser mais do que a aprendiz de Elias, mas sim ser sua noiva.",
    foto: "./assets/img/chise.png",
    nome: "Mahoutsukai no Yome",
    nota: 5,
  },
  {
    id: 3,
    sinopse: "Na história podemos acompanhar um otaku desempregado com seus trinta e quatro anos que chega num ponto sem saída em sua vida e decide virar a folha, porém ele é atropelado e morre. Ele acaba renascendo no corpo de uma criança num estranho mundo novo de espadas e magia.",
    foto: "./assets/img/mushoku.png",
    nome: "Mushoku Tensei",
    nota: 3.5,
  },
  {
    id: 4,
    sinopse: "O caçador Kim Gong-ja vive a vida deprimido, como caçador rank F ele é menosprezado e ignorado por muitos, invejando a vida do caçador n°1, ele deseja freneticamente ser como ele até que... [Você despertou uma habilidade Rank S.] [Mas só funciona quando você morre.] Epq  DO QUE ELA VAI SERVIR SE EU JÁ ESTIVER MORTO!?.",
    foto: "./assets/img/suicide.jpg",
    nome: "SSS-Class Suicide Hunter",
    nota: 4.7,
  }
];

// Get ALL

app.get("/obras/todas-obras", (req, res) => {
  res.send(Obras);
});

// Get by ID

app.get("/obras/obra/:id", (req, res) => {
  const paramsId = +req.params.id;
  const chosenObra = Obras.find((obra) => obra.id == paramsId);
  res.send(chosenObra);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
