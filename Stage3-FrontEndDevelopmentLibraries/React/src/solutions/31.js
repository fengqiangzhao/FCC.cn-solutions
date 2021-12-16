import React from 'react';

// 传递回调作为props

// 传递方法给子组件


class MyApps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({inputValue: event.target.value})
    }

    render() {
        return (
            <div>
                <GetInput input={this.state.inputValue} handleChange={this.handleChange}/>
                <RenderInput input={this.state.inputValue}/>
            </div>
        )
    }
}

class GetInput extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <h3>Get Input:</h3>
                <input type="text" value={this.props.input} onChange={this.props.handleChange}/>
            </div>
        )
    }

}

class RenderInput extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <h3>Input Render:</h3>
                <p>{this.props.input}</p>
            </div>
        )
    }
}

export default <MyApps/>
