const express = require('express');
const userModel = require('../dataAccess/userModel');
const router = express.Router();
// User.sync();
// Parent.sync();
// User.create({userName: "sonnyBob", imgUrl: "ads"});

// const addRelationship = async function(){
//     let user = await User.find({where: {userName: "sonnyBob"}});
//     let user_two = await User.find({where: {userName: "Pops"}});
//     let parent = await Parent.create({UserId: user.id, parentId: user_two.id}).catch(err=>console.log(err));
//     console.log(parent)
// }

// addRelationship()

// User.find({where: {UserId:1},
//     include:[{
//         model: User,
//         through:{
//           attributes: ['parentId'],
//         }
//     }]
// }).then(m=>console.log(m.get({plain:true})));

// router.get('/users', function (request, response, next) {
//     let name = request.query.NAME ;
//     let user = User.find({where:{userName: name}}).then(function(user){
//       response.send(user);
//     })
//   });

// User.findById(3).then(user=>user.update({imgUrl:'https://static.comicvine.com/uploads/scale_small/0/77/1878856-hueyduck.gif'}));

const getAllChildren = async function (res , name) {
  try{
   const user = await userModel.find( { userName: name } ,true, false  )
  res.send(user);
  }
  catch(err){
    console.error(err);
    res.status(500).send(err);
  }
}

router.get('/users', function (request, response, next) {
  let name = request.query.NAME;
  getAllChildren(response , name);
})

  module.exports = router;
