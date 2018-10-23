import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import UserBox from './UserBox';
import { action } from 'mobx';
import '../App.css';


@inject(allStores => ({
    user: allStores.store.user
}))
@observer
class FamilyTree extends Component {
    
    render() {
       if (this.props.user){
        return (
            <div>
                <UserBox user={this.props.user}  ></UserBox>
            </div>
        )
         
    }
    else{
        return (
            <div>Please select a user.</div>
        )
    }
    }
}
export default FamilyTree;