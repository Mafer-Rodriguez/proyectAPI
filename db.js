const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("directorioUTMA", "root", "", {
  host: "localhost",
  dialect: "mariadb",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

const db = {}//creamos un objeto vacio  

db.Sequelize = Sequelize//le asignamos a la propiedad Sequelize del objeto db la clase Sequelize
db.sequelize = sequelize//le asignamos a la propiedad sequelize del objeto db la instancia de la base de datos

//le asignamos a la propiedad area del objeto db el modelo de area que creamos en el archivo area.model.js
db.area = require("./models/area.model.js")(sequelize, Sequelize)

//le asignamos a la propiedad building del objeto db el modelo de edificio que creamos en el archivo building.model.js
db.building = require("./models/building.model.js")(sequelize, Sequelize)

//le asignamos a la propiedad floor del objeto db el modelo de piso que creamos en el archivo floor.model.js
db.floor = require("./models/floor.model.js")(sequelize, Sequelize)

//le asignamos a la propiedad room_type del objeto db el modelo de tipo de habitacion que creamos en el archivo room_type.model.js
db.room_type = require("./models/room_type.model.js")(sequelize, Sequelize)

//le asignamos a la propiedad room del objeto db el modelo de habitacion que creamos en el archivo room.model.js
db.room = require("./models/room.model.js")(sequelize, Sequelize)

//le asignamos a la propiedad staff del objeto db el modelo de staff que creamos en el archivo staff.model.js
db.staff = require("./models/staff.model.js")(sequelize, Sequelize)

//exportamos el objeto db para que pueda ser utilizado en otros archivos
module.exports = db



