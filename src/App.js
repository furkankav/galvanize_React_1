import React, {Component} from 'react';
import './App.css';
import TodoList from './TodoList';
import BreakTime from './BreakTime';
import UserView from './UserView';
import Nav from './Nav';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "todos": [
                {"title": "clean house", "state": "in progress"},
                {"title": "mow lawn", "state": "queued"}
            ],
            "user": {"firstName": "Douglas", "lastName": "Engelbart"},
            selectedView: "TodoList"
        }

        setInterval(() => {
            const newState = JSON.parse(JSON.stringify(this.state));
            newState.todos.push({"title": "another thing", "state": "always more to do!"});
            this.setState(newState);
        }, 6000);
    }

    newTodo = (title, state) => {
        const newState = JSON.parse(JSON.stringify(this.state));
        newState.todos.push({"title": title, "state": state});
        super.setState(newState);
    }


    displayBreakTimeComp = () => {
        const newState = JSON.parse(JSON.stringify(this.state));
        newState.selectedView = 'BreakTime';
        super.setState(newState);
    };

    displayTodoList = () => {
        const newState = JSON.parse(JSON.stringify(this.state));
        newState.selectedView = 'TodoList';
        super.setState(newState);
    };



    render() {
        let currentView;
        if(this.state.selectedView === "TodoList") {
            currentView = <TodoList todos={this.state.todos} addOne={this.newTodo} switchView={this.displayBreakTimeComp}/>
        }else {
            currentView = <BreakTime  switchView={this.displayTodoList}/>
        }
        return (
            <div className="App">
                <Nav/>
                <UserView user={this.state.user}/>
                {currentView}
            </div>
        );
    }
}

export default App;
