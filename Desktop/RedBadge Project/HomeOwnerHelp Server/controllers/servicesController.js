let express = require('express');
let router = express.Router();
let validateSession = require('../middleware/validate-jwt');
const {ServicesModel} = require('../models');

//create service request
router.post('/create', validateSession, async (req, res) => {
    console.log("REQUEST USER", req.user)
    const {serviceType, serviceDescription, address, picture} = req.body;
    const {id} = req.user;
    const serviceEntry ={
        serviceType,
        serviceDescription,
        address,
        picture,
        userId: id
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
                userId: id
            }
        });
        res.status(200).json(userRequest);
    }catch(err){
        // console.log(err);
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
                userId: userId
            }
        }
        await ServicesModel.destroy(query)
        res.status(200).json({ message: 'Service request has successfully been deleted' })
    } catch (err) {
        res.status(500).json({
            message: 'Failed to delete item'
        })
    }
});

//Update service request by user
router.put("/update/:Id", validateSession, async (req, res) => {
    const {serviceType, serviceDescription, address, picture} = req.body;
    const serviceId = req.params.id;
    const userId = req.userId;
    const query = {
      where: {
        serviceId,
        userId
      }
    };
    const updatedService = {
        serviceType: serviceType,
        serviceDescription: serviceDescription,
        address: address,
        picture: picture
    }
    try{
      const update = await ServicesModel.update(updatedService, query);
      res.status(200).json(update);
    } catch (err) {
        console.log(err);
      res.status(500).json({ error: err});
    }
  });

module.exports = router;