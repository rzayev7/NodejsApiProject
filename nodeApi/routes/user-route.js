
const userController = require('../controllers/user-controller');
const {HTTP_METHODS} = require('../helpers/enums');
const { USER_CREATE, USER_GET_ALL } = require('../helpers/urlHelper');

const handleUserRoutes = (req,res) =>{
    const {url} = req;
    switch (url) {
        case USER_CREATE:
            userController.createUser(req,res);
            break;
        case USER_GET_ALL:
            userController.getAllUsers(req,res);
            break;
        default:
            break;
    }
}
module.exports= {handleUserRoutes};