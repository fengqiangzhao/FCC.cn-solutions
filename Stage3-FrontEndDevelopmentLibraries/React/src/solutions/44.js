import React from "react";

//Array.map动态渲染元素

const textAreaStyles = {
    width: 235, margin: 5
}

class MyToDoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInput: '', toDoList: [],
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }


    handleChange(e) {
        this.setState({userInput: e.target.value})
    }

    handleSubmit() {
        const itemsArray = this.state.userInput.split(',')
        this.setState({toDoList: itemsArray})
    }

    render() {
        // const items = this.state.toDoList
        const items = this.state.toDoList.map(
            (item, index) => <li key={index}>{item}</li>
        )
        console.log(items)
        return (<div>
                <textarea name="textarea" id="textarea"
                          cols="30" rows="10"
                          onChange={this.handleChange}
                          value={this.state.userInput}
                          style={textAreaStyles}
                          placeholder='Separate Items With Commas'/>
            <br/>

            <button onClick={this.handleSubmit}>Create List</button>

            <h1>My "To Do" List:</h1>
            <ul>{items}</ul>
        </div>)
    }
}

export default <MyToDoList/>
