import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                <Welcome name={"React!"}/>
            </div>
        )
    }

}

class Welcome extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>Hello,<strong>{this.props.name}</strong>!</p>
            </div>
        );
    }
}

export default <App />
