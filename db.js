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

  //para darle haceso a mi libreria y aceso a la instancia de la base de datos
const db = {}//creamos un objeto vacio  
db.Sequelize = Sequelize//le asignamos a la propiedad Sequelize del objeto db la clase Sequelize
db.sequelize = sequelize//le asignamos a la propiedad sequelize del objeto db la instancia de la base de datos
//le asignamos a la propiedad user del objeto db el modelo de usuario que creamos en el archivo user.model.js
db.area = require("./models/area.model.js")(sequelize,Sequelize)
//le asignamos a la propiedad book del objeto db el modelo de libro que creamos en el archivo book.model.js
db.building = require("./models/building.model.js")(sequelize,Sequelize)
//le asignamos a la propiedad author del objeto db el modelo de autor que creamos en el archivo author.model.js
db.floor = require("./models/floor.model.js")(sequelize,Sequelize)
//le asignamos a la propiedad genre del objeto db el modelo de genero que creamos en el archivo genre.model.js
db.room_type = require("./models/room_type.model.js")(sequelize,Sequelize)
//le asignamos a la propiedad book_author del objeto db el modelo de libro_autor que creamos en el archivo book_author.model.js
db.room = require("./models/room.model.js")(sequelize,Sequelize)
//db.staff = require("./models/staff.model.js")(sequelize,Sequelize)
module.exports = db//exportamos el objeto db para que pueda ser utilizado en otros archivos



