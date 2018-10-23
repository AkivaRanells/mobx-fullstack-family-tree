import React, { Component } from 'react';
import { action, observable } from 'mobx';
import { observer, inject } from 'mobx-react';


@inject('store')
@observer
class SearchForm extends Component{
    @observable uName = "";
    @action handleChange = (e) => {
        this.uName = e.target.value;
    }
    @action searchForUser=()=>{
        this.props.store.searchUser(this.uName); 
    }
    render(){
        return(
            <div>
                <input value={this.uName} onChange={this.handleChange}></input>
                <button onClick={this.searchForUser}>
                    Search for a User
                </button>
            </div>
        )
    }
}
export default SearchForm