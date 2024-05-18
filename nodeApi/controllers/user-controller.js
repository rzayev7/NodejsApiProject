
const user_service = require('../services/user-service');
const generateRespose = require('../utils/response-generator'); 
const parseRequestBody = require('../utils/parse');
const User = require('../models/user');
const getAllUsers = async (req,res)=>{
    const data = await user_service.getAllUsers();
    generateRespose(200,res,data);
}
const createUser = async (req,res)=>{
    const body =await parseRequestBody(req);
    const newUser = new User(body.email,body.fullname, body.username,body.password);
    const createdUser = await user_service.createUser(newUser);
    generateRespose(201, res, createdUser);
     
}
module.exports = {
    getAllUsers,
    createUser
}