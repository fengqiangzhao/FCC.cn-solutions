import React from "react";


//创建一个可控制的输入框
// 类方法传参

class ControlledInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        //此处不需要引用state的值，不需要使用函数包装，直接返回对象
        this.setState({input: event.target.value})
    }

    render() {
        return (<div>
            <input type="text" value={this.state.input} onChange={this.handleChange}/>
            <h4>Controlled Input:</h4>
            <p>{this.state.input}</p>
        </div>)
    }
}

export default <ControlledInput/>
