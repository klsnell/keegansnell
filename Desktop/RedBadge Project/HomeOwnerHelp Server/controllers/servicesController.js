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

//get request by user
router.get("/mine", validateSession, async (req, res) => {
    let {id} = req.user;
    try{
        const userRequest = await ServicesModel.findAll({
            where:{
                owner_id: id
            }
        });
        res.status(200).json(userRequest);
    }catch(err){
        res.status(500).json({error: err});
    }
});

//User delete service request

router.delete('/delete/:id', validateSession, async (req, res) => {
    const userId = req.user.id;
    const serviceId = req.params.id
    try {
        const query = {
            where: {
                id: serviceId,
                owner_id: userId
            }
        }
        await ServicesModel.destroy(query)
        res.status(200).json({ message: 'Item has successfully been deleted' })
    } catch (err) {
        res.status(500).json({
            message: 'Failed to delete item'
        })
    }
})

module.exports = router;