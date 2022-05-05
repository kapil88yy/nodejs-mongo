const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes")

const app = express();

app.use(express.json());

// mongoose.connect('mongodb://cluster0.f65j0.mongodb.net/MovieStore',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   }
// );

const username = "cbkapill";
const password = "1234";
const cluster = "cluster0.a8ahe.mongodb.net";
const dbname = "movie";

mongoose.connect(
  `mongodb+srv://cbkapill:1234@cluster0.a8ahe.mongodb.net/movie?retryWrites=true&w=majority`, 
  {
    useNewUrlParser: true,
    
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(Router);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});