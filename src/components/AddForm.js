import React, { Component } from 'react';
import { action, observable } from 'mobx';
import { observer, inject } from 'mobx-react';


@inject('store')
@observer
class AddForm extends Component{
    @observable user = {uName : "" , img:""};
    @action handleChange = (e) => {
        this.user[e.target.name] = e.target.value;
    }
    @action AddUser=()=>{
        this.props.store.searchUser('/users?NAME=', this.user); 
    }
    render(){
        return(
            <div>
                <input value={this.user.uName} name="uName" onChange={this.handleChange}></input>
                <button onClick={this.AddUser}>
                    Search for a User
                </button>
            </div>
        )
    }
}
export default AddForm