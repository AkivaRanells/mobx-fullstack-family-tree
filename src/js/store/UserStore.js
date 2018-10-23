import { observable, action } from 'mobx';
import axios from 'axios'
class UserStore {

    @observable user; 

    searchUser = (uName) => {
        axios.get('/users?NAME='+uName)
            .then( (response) =>{
                this.setUser(response.data);
            })
            .catch( (error)=> {
                console.log(error);
            });
    }

    @action setUser = (data)=>{
        this.user  = data; 
    }
}

const store = new UserStore();
export default store; 