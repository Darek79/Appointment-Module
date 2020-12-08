const express = require("express");
const app = express();
const {dbConnect} = require("./db");
require("dotenv").config();

process.on("uncaughtException", (err) => {
  console.log({
    ERROR_NAME: err.name,
    ERROR_MESSAGE: err.message,
    ERROR_STACK: err.stack,
  });
  process.exit(1);
});
dbConnect();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get("/", (req, res, next) => {
  res.status(200).json({msg: "server is up"});
});

const server = app.listen(8080, () => console.log("server is up"));

process.on("unhandledRejection", (err) => {
  console.log({
    ERROR_NAME: err.name,
    ERROR_MESSAGE: err.message,
    ERROR_STACK: err.stack,
  });
  server.close(() => process.exit(1));
});
