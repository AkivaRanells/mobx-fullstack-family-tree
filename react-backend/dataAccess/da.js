const Sequelize = require ('sequelize');
class singletonForDbConnect{
    constructor(){
        this.sequelize =  new Sequelize('mysql://sql7260485:jX2nX1md7W@sql7.freesqldatabase.com:3306/sql7260485');
        this.start();
    }

    start(){
        this.sequelize.authenticate()
        .then(()=>{
            console.log('Connection established')
        })
        .catch(err=>{
            console.error('Unable to cconnect')
        });
    }
    
}

const singleDbConnect = new singletonForDbConnect();
module.exports=singleDbConnect;

// export default singleDbConnect