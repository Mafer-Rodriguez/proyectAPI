const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const {getRoom,createRoom,updateRoom, deleteRoom, patchRoom } = require("./queries/room.queries");
const {getRoom_type,createRoom_type,updateRoom_type,patchRoom_type,deleteRoom_type} = require("./queries/room_type.queries"); 
const {getArea,createArea,deleteArea,putArea,patchArea} = require("./queries/area.queries");
const {getBuilding,createBuilding,deleteBuilding,putBuilding,patchBuilding} = require("./queries/building.queries");
const {getFloor,createFloor,deleteFloor,putFloor, patchFloor} = require("./queries/floor.queries");
const {getStaff,createStaff,deleteStaff,putStaff,patchStaff,} = require("./queries/staff.queries");



app.use(bodyParser.json());

//AREA

// GET: OBTENER
app.get("/area", (req, res) => {
  getarea(req, res);
});

// POST: INSERTAR
app.post("/area", (req, res) => {
  createarea(req, res);
});

// DELETE: ELIMINAR
app.delete("/area/delete/:id", (req, res) => {
  deletearea(req, res); 

});

//PUT: ACTUALIZAR
app.put('/area/:id', (req, res) => {
  putarea (req, res);
});

// PATCH: ACTUALIZAR PARCIALMENTE
app.patch("/area/:id", (req, res) => {
  patcharea(req, res);
});

//para que el servidor escuche en el puerto 3000
app.listen(port, () => {
  console.log(` app running on port ${port}`);
})




//BUILDING
// GET: OBTENER
app.get("/building", (req, res) => {
  getbuilding(req, res);
});

// POST: INSERTAR
app.post("/building", (req, res) => {
  createbuilding(req, res);
});

// DELETE: ELIMINAR
app.delete("/building/delete/:id", (req, res) => {
  deletebuilding(req, res); 

});

//PUT: ACTUALIZAR
app.put('/building/:id', (req, res) => {
  putbuilding (req, res);
});

// PATCH: ACTUALIZAR PARCIALMENTE
app.patch("/building/:id", (req, res) => {
  patchbuilding(req, res);
});

//para que el servidor escuche en el puerto 3000
app.listen(port, () => {
  console.log(` app running on port ${port}`);
})


//FLOOR
//GET: OBTENER
app.get("/floor", (req, res) => {
  getfloor(req, res);
});

// POST: INSERTAR
app.post("/floor", (req, res) => {
  createfloor(req, res);
});

// DELETE: ELIMINAR
app.delete("/floor/delete/:id", (req, res) => {
  deletefloor(req, res); 

});

//PUT: ACTUALIZAR
app.put('/floor/:id', (req, res) => {
  putfloor (req, res);
});

// PATCH: ACTUALIZAR PARCIALMENTE
app.patch("/floor/:id", (req, res) => {
  patchfloor(req, res);
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




//STAFF
//GET: OBTENER
app.get("/staff",(req, res) => {
  getstaff(req, res);
});

// POST: INSERTAR
app.post("/staff", (req, res) => {
  createstaff(req, res);
});

// DELETE: ELIMINAR
app.delete("/staff/delete/:id", (req, res) => {
  deletestaff(req, res); 

});

//PUT: ACTUALIZAR
app.put('/staff/:id', (req, res) => {
  putstaff (req, res);
});

// PATCH: ACTUALIZAR PARCIALMENTE
app.patch("/staff/:id", (req, res) => {
  patchstaff(req, res);
});



//para que el servidor escuche en el puerto 3000
app.listen(port, () => {
  console.log(` app running on port ${port}`);
})

