import React from 'react';

// Component
// State
// Lifecycle ->
// UI -> render

export default class App extends React.Component {

    isAuthorised() {
        return true;
    }

    isExisting() {
        return true;
    }
    render() {
        let message = "";

        if (this.isAuthorised()) {
            message = "Welcome";
            if (this.isExisting()) {
                message += " Back"
            }
            message += "!"
        } else {
            message = "Login"
        }

        return (
            <div>
                {message}
            </div>
        )
    };
}
