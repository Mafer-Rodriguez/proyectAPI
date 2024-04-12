module.exports = (sequelize, Sequelize) => {
  const staff = sequelize.define(
    "staff",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,

      },
      name: {
        type: Sequelize.STRING,

      },
      lastname: {
        type: Sequelize.STRING,

      },
      email: {
        type: Sequelize.STRING,

      },
      phone_extension: {
        type: Sequelize.INTEGER,

      },
      id_area: {
        type: Sequelize.INTEGER,

      },
      id_room: {
        type: Sequelize.INTEGER,

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
      tableName: "staff",
    }
  );

  return staff;
};