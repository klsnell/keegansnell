require("dotenv").config();
const Express = require('express');
const app = Express();
const dbConnection = require("./db");

app.use(require('./middleware/headers'));

app.use(Express.json());

const controllers = require("./controllers");

app.use("/user", controllers.userController);
app.use("/services", controllers.servicesController);
app.use("/response", controllers.contractorResponse);

dbConnection.authenticate()
    .then(() => dbConnection.sync()) //=> {force: true} {alter: true}  use for dropping tables, wipes out db
    .then(() => {
        app.listen(7000, () =>{
            console.log(`[Server]: App is listening on 7000.`);
        });
    })
    .catch((err) => {
        console.log(`[Server]: Server crashed. Error =${err}`);
    })



/*
        /user/register
{
    "user":{
        "email": "test@test.com",
        "password": "test",
        "fName": "tester",
        "phoneNumber": "555"
    }
}

        /user/login

{
    "user":{
        "email": "test@test.com",
        "password": "test"
    }
}

        /services/create

 {  
         "serviceType": "leaky faucet",
         "serviceDescription": "sink faucet wont stop running in the kitchen",
        "address": "123 Main St.",
         "picture": "water picture"
 }


        /response/respond
  {  
         "company": "General Contracting",
         "reply": "water damage in hallway, drywall damaged",
        "estimateTime": 4
 }
*/