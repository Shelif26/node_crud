const express = require("express");
const route =express.Router()


const services = require('../services/render')
const controller = require("../controllers/controller")


//------root route-------
route.get('/',services.homeRoutes);


//------add user-----------
route.get('/add_user',services.add_user)


//------for updating user--------
route.get('/update_user',services.update_user)


//------API------
route.post('/api/users',controller.create) 
route.get('/api/users',controller.find) 
route.put('/api/users/:id',controller.update) 
route.delete('/api/users/:id',controller.delete) 


module.exports=route