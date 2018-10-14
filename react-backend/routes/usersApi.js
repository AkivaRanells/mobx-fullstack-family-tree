const express = require('express');
const {User , Parent} = require ('../dataAccess/userModel');
const router = express.Router();
// User.sync();
// Parent.sync();
// User.create({userName: "Pops", imgUrl: "afs"});

// const addRelationship = async function(){
//     let user = await User.find({where: {userName: "SonnyJim"}});
//     let user_two = await User.find({where: {userName: "Pops"}});
//     let parent = await Parent.create({UserId: user.id, parentId: user_two.id}).catch(err=>console.log(err));
//     console.log(parent)
// }

// addRelationship()

router.get('/', function (request, response) {
    response.send({ name: 'John', age: 30 });
});

module.exports=router;
