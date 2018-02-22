import React, {Component} from 'react';
import './ClickCounter.css';

class ClickCounter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        }
        this.incrementCounter = this.incrementCounter.bind(this);
        this.clearCounter = this.clearCounter.bind(this);
    }

    render() {
        return (
            <div className="ClickCounter">
                <h2 className="ClickCounter-title"> ClickCounter </h2>
                <div className="ClickCounter-content">
                <p>Anzahl der Klicks: { this.state.counter }</p>
                <button onClick={ this.incrementCounter }>Click</button>
                <button onClick={ this.clearCounter }>Clear</button>
                </div>
            </div>
        )
    }

    incrementCounter() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    clearCounter() {
        this.setState({
            counter: 0
        })
    }



}

export default ClickCounter;