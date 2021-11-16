require("dotenv").config();
const Express = require('express');
const app = Express();
const dbConnection = require("./db");

app.use(require('./middleware/headers'));

app.use(Express.json());

const controllers = require("./controllers");

app.use("/user", controllers.userController);
app.use("/services", controllers.servicesController);
// app.use("/admin", controllers.adminController);

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