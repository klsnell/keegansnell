const {DataTypes} = require("sequelize");
const db = require("../db");

const User = db.define("user", {
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    fName:{
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    phoneNumber:{
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
    },
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
      }
 
    
});

module.exports = User;