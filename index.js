const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const { getRoom, createRoom, updateRoom, deleteRoom, patchRoom } = require("./queries/room.queries");
const { getRoom_type, createRoom_type, updateRoom_type, patchRoom_type, deleteRoom_type } = require("./queries/room_type.queries");
const { getArea, createArea, deleteArea, putArea, patchArea } = require("./queries/area.queries");
const { getStaff, createStaff, deleteStaff, putStaff, patchStaff, } = require("./queries/staff.queries");
const { getBuilding, createBuilding, deleteBuilding, putBuilding, patchBuilding } = require("./queries/building.queries");
const { getFloor, createFloor, deleteFloor, putFloor, patchFloor } = require("./queries/floor.queries");

app.use(bodyParser.json());

//AREA
app.get("/area", (req, res) => {
  getArea(req, res);
});

app.post("/area", (req, res) => {
  createArea(req, res);
});

app.delete("/area/delete/:id", (req, res) => {
  deleteArea(req, res);
});

app.put('/area/:id', (req, res) => {
  putArea(req, res);
});

app.patch("/area/:id", (req, res) => {
  patchArea(req, res);
});

//BUILDING
app.get("/building", (req, res) => {
  getBuilding(req, res);
});

app.post("/building", (req, res) => {
  createBuilding(req, res);
});

app.delete("/building/delete/:id", (req, res) => {
  deleteBuilding(req, res);
});

app.put('/building/:id', (req, res) => {
  putBuilding(req, res);
});

app.patch("/building/:id", (req, res) => {
  patchBuilding(req, res);
});

//FLOOR
app.get("/floor", (req, res) => {
  getFloor(req, res);
});

app.post("/floor", (req, res) => {
  createFloor(req, res);
});

app.delete("/floor/delete/:id", (req, res) => {
  deleteFloor(req, res);
});

app.put('/floor/:id', (req, res) => {
  putFloor(req, res);
});

app.patch("/floor/:id", (req, res) => {
  patchFloor(req, res);
});


//ROOM_TYPE
app.get("/room_type", (req, res) => {
  getRoom_type(req, res);
});

app.post("/room_type", (req, res) => {
  createRoom_type(req, res);
});

app.put("/room_type/:id", (req, res) => {
  updateRoom_type(req, res);
});

app.patch("/room_type/:id", (req, res) => {
  patchRoom_type(req, res);
});

app.delete("/room_type/delete/:id", (req, res) => {
  deleteRoom_type(req, res);
});


//ROOM
app.get("/room", (req, res) => {
  getRoom(req, res);
});

app.post("/room", (req, res) => {
  createRoom(req, res);
});

app.put("/room/:id", (req, res) => {
  updateRoom(req, res);
});

app.patch("/room/:id", (req, res) => {
  patchRoom(req, res);
});

app.delete("/room/delete/:id", (req, res) => {
  deleteRoom(req, res);
});

//STAFF
app.get("/staff", (req, res) => {
  getStaff(req, res);
});

app.post("/staff", (req, res) => {
  createStaff(req, res);
});

app.delete("/staff/delete/:id", (req, res) => {
  deleteStaff(req, res);
});

app.put('/staff/:id', (req, res) => {
  putStaff(req, res);
});

app.patch("/staff/:id", (req, res) => {
  patchStaff(req, res);
});

//para que el servidor escuche en el puerto 3000
app.listen(port, () => {
  console.log(` app running on port ${port}`);
});
