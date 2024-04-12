module.exports = (sequelize, Sequelize) => {
    const Room_type = sequelize.define(
        "room_type",
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
            tableName: "room_type",
        }
    );

    return Room_type;
};