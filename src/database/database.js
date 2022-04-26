const mongoose = require("mongoose");

const connectToDatabase = () => {
  mongoose
    .connect("mongodb+srv://root:iulia@api-okina-toshokan.uoo1z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Atlas CONNECT!"))
    .catch((err) => {
      return console.log("Erro na conexão com o banco: " + err);
    });
};

module.exports = connectToDatabase
