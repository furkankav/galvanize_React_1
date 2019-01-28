import React, {Component} from 'react';
import "./styles/GreenBorder.css"

class BreakTime extends Component {

    render() {
        return (
            <div className="greenBorder">
                <p className="CompLabel">BreakTime</p>
                <p>Time for a break! Go grab a coffee.</p>
                <div>
                    <button onClick={() => this.props.switchView()}>Back To Work</button>
                </div>

            </div>
        );
    }
}

export default BreakTime;