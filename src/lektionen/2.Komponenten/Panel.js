import React, {Component} from 'react';
import './Panel.css';

class Panel extends Component {
    render() {
        return (
            <div className="Panel">
                <h4 className="Panel-title"> {this.props.label} </h4>
                <p className="Panel-content">{this.props.text}</p>
            </div>
        )
    }
}

export default Panel;