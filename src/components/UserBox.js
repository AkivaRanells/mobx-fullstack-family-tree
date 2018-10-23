import React, { Component } from 'react';
import '../App.css';


class UserBox extends Component{  
    
    renderChildren = () => {
        return  this.props.user.Children.map(child => {
            return(
                <UserBox key={child.id} user={child}></UserBox>
            )});
    }

    render(){ 
        return(
            <div className="box">
                <h3>{this.props.user.userName}</h3>
                <img src={this.props.user.imgUrl} alt=""></img>
                <div className="children">
        {this.props.user.Children?this.renderChildren():null}
                </div>
            </div>
        )
    }
}
export default UserBox