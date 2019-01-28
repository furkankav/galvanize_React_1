import React, { Component } from 'react';
import './styles/GreenBorder.css'

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: ""
        }
    }

    handleChange = (event) => {
        const newState = JSON.parse(JSON.stringify(this.state));
        newState.title = event.target.value; // text in the box
        super.setState(newState);
    }


    render() {
        return(
            <div className="greenBorder">
                <h5>To do List: </h5>
                <ol>
                    {this.props.todos.map( toDo => <li>{toDo.title}</li>)}
                </ol>
                <div className="TodoBtns">
                    <input type="text" onChange={this.handleChange}/>
                    <button onClick={() => this.props.addOne(this.state.title, 'queued')}>Add</button>
                    <button onClick={() => this.props.switchView()}>I need a break!</button>
                </div>
            </div>
        )


    }
}

export default TodoList;