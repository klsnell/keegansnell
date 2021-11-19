const UserModel = require('./user');
const ServicesModel = require('./services');
const ResponseModel = require('./responseModel');

UserModel.hasMany(ServicesModel);
UserModel.hasMany(ResponseModel);

ServicesModel.belongsTo(UserModel);
ServicesModel.hasMany(ResponseModel);

ResponseModel.belongsTo(ServicesModel);


module.exports = {
    UserModel,
    ServicesModel,
    ResponseModel
}