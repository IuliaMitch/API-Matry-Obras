const mongoose = require("mongoose");

const connectToDatabase = () => {
  mongoose
    .connect(process.env.URI_DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Atlas CONNECT!"))
    .catch((err) => {
      return console.log("Erro na conexão com o banco: " + err);
    });
};

module.exports = connectToDatabase;
