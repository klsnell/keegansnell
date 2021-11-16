const {DataTypes} = require("sequelize");
const db = require("../db");

const service = db.define("service", {
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
      owner_id: {
          type: DataTypes.INTEGER
      }
    });
module.exports = service

// {  
//    "services":{
//         "serviceType": "leaky faucet",
//         "serviceDescription": "sink faucet wont stop running in the kitchen",
//         "address": "123 Main St.",
//         "picture": "water picture"
//      }
// }