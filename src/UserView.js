import React, { Component } from 'react';
import './styles/GreenBorder.css'

class UserView extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: props.user.firstName,
            lastName: props.user.lastName
        };
    }

    handleChange = (event) => {
        const newState = JSON.parse(JSON.stringify(this.state));
        newState.lastName = event.target.value; // text in the box
        super.setState(newState);
    }

    render(){
        return(
            <div className="greenBorder">
                <p className="CompLabel">UserView</p>
                <h5>Current user is: {this.state.firstName + " " + this.state.lastName}</h5>
                <input type="text" defaultValue={this.state.lastName}
                       onChange={this.handleChange}/>
            </div>
        )


    }




}

export default UserView;