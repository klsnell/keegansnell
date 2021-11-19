const {DataTypes} = require("sequelize");
const db = require("../db");

const Service = db.define("service", {
    serviceType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      serviceDescription: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address:{
        type: DataTypes.STRING,
        allowNull: false
      },
      picture:{
        type: DataTypes.STRING,
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
    }
    });
module.exports = Service
/*
 {  
         "serviceType": "leaky faucet",
         "serviceDescription": "sink faucet wont stop running in the kitchen",
        "address": "123 Main St.",
         "picture": "water picture"
 }
 */