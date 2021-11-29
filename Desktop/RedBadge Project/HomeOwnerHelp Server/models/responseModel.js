const { DataTypes } = require("sequelize");
const db = require("../db");

const response = db.define("response", {
    company: {
        type: DataTypes.STRING,
        allowNull: false
    },
    reply: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estimateTime: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    serviceId: {
        type: DataTypes.UUID,
        allowNull: false
    }
});
module.exports = response