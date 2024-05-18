const baseService = require('./base-service');


const getAllUsers = async () =>{
    const allData = await baseService.getAllJSONdataFromText();
    return allData.users;
}
//POST
const createUser = async user =>{
    const createdUser = await baseService.createModel(user, 'users');
    return createdUser;
}




module.exports = {getAllUsers , createUser};