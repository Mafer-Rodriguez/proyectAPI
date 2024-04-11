const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const { getRoom, createRoom } = require("./queries/room.queries");
const {getRoom_type,createRoom_type,updateRoom_type,patchRoom_type,deleteRoom_type} = require("./queries/room_type.queries"); 

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

app.put("/room_type/:id", (req, res) => {
    updateUser(req, res);
});

app.patch("/room_type/:id", (req, res) => {
    patchUser(req, res);
});

app.delete("/room_type/:id", (req, res) => {
    deleteUser(req, res);
});






//para que el servidor escuche en el puerto 3000
app.listen(port, () => {
  console.log(` app running on port ${port}`);
})