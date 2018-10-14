const Sequelize = require('sequelize')
const singleDbConnect = require('../dataAccess/da')
const User = singleDbConnect.define('User',{
   userName: Sequelize.STRING,
   imgUrl: Sequelize.STRING
})


const Parent = singleDbConnect.define('Parent', {});

User.belongsToMany(User, { through: Parent, as: 'uid', otherKey: 'uid' });
User.belongsToMany(User, { through: Parent, as: 'parentId', otherKey: 'parentId' });

exports.User = User;
exports.Parent = Parent;
