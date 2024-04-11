const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const { getarea, createarea, deletearea, putarea, patcharea } = require("./queries/area.queries");
const { getbuilding, createbuilding, deletebuilding, putbuilding, patchbuilding } = require("./queries/building.queries");
const { getfloor, createfloor, deletefloor, putfloor, patchfloor } = require("./queries/floor.queries");
const { getstaff, createstaff, deletestaff, putstaff, patchstaff } = require("./queries/staff.queries");



app.use(bodyParser.json());

//AREA

// GET: OBTENER
pp.get("/area", requiresAuth(), (req, res) => {
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
pp.get("/building", requiresAuth(), (req, res) => {
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
pp.get("/floor", requiresAuth(), (req, res) => {
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




//STAFF
//GET: OBTENER
pp.get("/staff", requiresAuth(), (req, res) => {
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

