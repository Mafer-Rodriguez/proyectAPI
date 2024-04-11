module.exports = (sequelize, Sequelize) => {
    const area = sequelize.define(
      "area",
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          unique: true,
        },
        name: {
          type: Sequelize.STRING,
          unique: true,
        },
        description: {
          type: Sequelize.STRING,
          
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
          defaultValue: Sequelize.NOW,
        },
      },
      {
        timestamps: false,
        freezeTableName: true,
        tableName: "area", // Este nombre debe coincidir con el de la tabla en tu base de datos
      }
    );
  
    return area;
  };
  