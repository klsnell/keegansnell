let express = require('express');
let router = express.Router();
let validateSession = require('../middleware/validate-jwt');
const {ServicesModel} = require('../models');

//create service request
router.post('/create', validateSession, async (req, res) => {
    const {serviceType, serviceDescription, address, picture} = req.body;
    const {id} = req.user;
    const serviceEntry ={
        serviceType,
        serviceDescription,
        address,
        picture,
        owner_id: id
    } 
    try{
        const newRequest = await ServicesModel.create(serviceEntry);
        res.status(200).json(newRequest);
    }catch(err){
        res.status(500).json({error: err});
    }
});

module.exports = router;