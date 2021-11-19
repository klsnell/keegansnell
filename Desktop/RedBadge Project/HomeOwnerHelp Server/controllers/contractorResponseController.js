let express = require('express');

let router = express.Router();
let validateSession = require('../middleware/validate-jwt');
const { ResponseModel, ServicesModel } = require('../models');

//Create response
router.post('/respond/:serviceId', validateSession, async (req, res) => {
  const { company, reply, estimateTime } = req.body;
  const { id } = req.user;
  const serviceId = req.params.serviceId
  const responseEntry = {
    company,
    reply,
    estimateTime,
    userId: id,
    serviceId 
  }
  try {
    const newRequest = await ResponseModel.create(responseEntry);
    res.status(200).json(newRequest);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});
/*
 {  
         "company": "General Contracting",
         "reply": "water damage in hallway, drywall damaged",
        "estimateTime": 4
 }
*/

//!update response
router.put("/updateresponse/:entryId", validateSession, async (req, res) => {
  const { company, reply, estimateTime } = req.body;
  const serviceId = req.params.entryId;
  const userId = req.user.id;
  const query = {
    where: {
      id: serviceId,
      owner_id: userId
    }
  };
  const updatedResponse = {
    company: company,
    reply: reply,
    estimateTime: estimateTime

  }
  try {
    const update = await ResponseModel.update(updatedResponse, query);
    res.status(200).json(update);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

//delete response
router.delete('/deleteresponse/:id', validateSession, async(req, res) => {
  const userId = req.user.id;
  const responseId = req.params.id
  try{
    const query ={
      where:{
        id: responseId,
        owner_id: userId
      }
    }
    await ServicesModel.destroy(query)
    res.status(200).json({message: "Response has successfully been deleted"})
  }catch(err){
    res.status(500).json({
      message: "Failed to delete response"
    })
  }
});

//!get responses by contractor
router.get("/myresponses", validateSession, async(req, res) => {
  let {id} = req.user;
  try{
    const contractorRequest = await ResponseModel.findAll({
      where: {
        owner_id: id
      }
    });
    res.status(200).json(contractorRequest);
  }catch(err){
    res.status(500).json({error: err});
  }
});


module.exports = router;