const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const { getRoom, createRoom } = require("./queries/room.queries");
const { getRoomType, createRoomType } = require("./queries/room_type.queries"); 

app.use(bodyParser.json());

//room

app.get("/room", (req, res) => {
  getUsers(req, res);
});

app.post("/room", (req, res) => {
  createUser(req, res);
});

//room_type

app.get("/room_type", (req, res) => {
    getUsers(req, res);
});

app.post("/room_type", (req, res) => {
        createUser(req, res);
});






//para que el servidor escuche en el puerto 3000
app.listen(port, () => {
  console.log(` app running on port ${port}`);
})