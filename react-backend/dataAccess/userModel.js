const Sequelize = require('sequelize')
const singleDbConnect = require('../dataAccess/da');

class UserModel{
    constructor(){
            this.User = singleDbConnect.sequelize.define('User',{
                userName: Sequelize.STRING,
                imgUrl: Sequelize.STRING
            });
            this.Parent = singleDbConnect.sequelize.define('Parent', {});

            this.setConnections();
    } 

    setConnections(){

        this.User.belongsToMany(this.User, { through: this.Parent, as: 'Parents', foreignKey: 'UserId' });
        this.User.belongsToMany(this.User, { through: this.Parent, as: 'Children', foreignKey: 'parentId' });
        
    }

    async createUser(userData , parentID){
       const newUser = await this.User.create(userData);
        if (parentID){  
            await this.Parent.create({UserId:newUser.id , parentId:parentID});
        }

        return newUser;
    }

    find(searchObject , includeChildren  , includeParents){ 

        const include =[];
        if (includeChildren){
            include.push({model:this.User , as:"Children" ,
                     include:[{model:this.User , as:"Children"}]});
        }
        if (includeParents){
            include.push({model:this.User , as:"Parents"});
        }       


       return  this.User.find({where : searchObject ,  
        include:include});
    }
}

const userModel= new UserModel();
module.exports  = userModel; 
