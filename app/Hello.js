import React, {Component} from 'react';

class Hello extends Component {
    render() {
        let message = "Hello";

        if (this.props.name) {
            message += " " + this.props.name;
        }
        message += "!";

        return (
            <div>
                {message}
            </div>
        );
    }
}

export default Hello;
