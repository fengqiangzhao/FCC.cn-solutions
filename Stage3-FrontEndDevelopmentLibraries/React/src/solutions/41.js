import React from "react";

//三元表达式条件渲染


const inputStyle = {
    width: 25, margin: 5,
}

class CheckUserAge extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: '', userAge: '',
        }

        this.submit = this.submit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({
            input: e.target.value, userAge: ''
        })
    }

    submit() {
        this.setState(state => ({
            userAge: state.input
        }))
    }


    render() {
        const buttonOne = <button onClick={this.submit}>Submit</button>
        const buttonTwo = <button>You may enter</button>
        const buttonThree = <button>You shall not pass</button>
        return (<div>
            <h3>
                Enter your age to Continue
            </h3>
            <input type="number"
                   style={inputStyle}
                   value={this.state.input}
                   onChange={this.handleChange}/>
            <br/>

            {this.state.input === '' ? buttonOne : this.state.input >= 18 ? buttonTwo : buttonThree}
        </div>)
    }
}


export default <CheckUserAge />
