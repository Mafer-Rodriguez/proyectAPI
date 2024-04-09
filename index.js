const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const { getRoom, createRoom } = require("./queries/room.queries");

app.use(bodyParser.json());

//room

app.get("/room", (req, res) => {
  getUsers(req, res);
});

app.post("/room", (req, res) => {
  createUser(req, res);
});






//para que el servidor escuche en el puerto 3000
app.listen(port, () => {
  console.log(` app running on port ${port}`);
})