module.exports = (sequelize, Sequelize) => {//hacer un modulo que exporte una funcion que recibe dos parametros, sequelize y Sequelize
    const Room = sequelize.define(
        "room",
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: Sequelize.STRING,
            },
            description: {
                type: Sequelize.STRING,
            },
            id_room_type: {
                type: Sequelize.INTEGER,
                references: {
                    // Esto es una referencia a la tabla
                    model: 'room_type',

                    // Este es el nombre de la columna de la tabla referenciado
                    key: 'id' 
                }
            },
            id_building: {
                type: Sequelize.INTEGER,
                references: {
                    // Esto es una referencia a la tabla
                    model: 'building',

                    // Este es el nombre de la columna de la tabla referenciado
                    key: 'id' 
                }
            },
            id_floor: {
                type: Sequelize.INTEGER,
                references: {
                    // Esto es una referencia a la tabla
                    model: 'floor',

                    // Este es el nombre de la columna de la tabla referenciado
                    key: 'id' 
                }
            },
            created_at: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },
            updated_at: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },
            deleted_at: {
                type: Sequelize.DATE,
            },
        },
        {
            timestamps: false,
            freezeTableName: true,
            tableName: "book",
        }
    );

    module.exports = Book;
  
    return Book;
  };