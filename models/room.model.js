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
                    model: 'room_type',
                    key: 'id'
                }
            },
            id_building: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'building',
                    key: 'id'
                }
            },
            id_floor: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'floor',
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
            tableName: "room",
        }
    );

    module.exports = Room;

    return Room;
};