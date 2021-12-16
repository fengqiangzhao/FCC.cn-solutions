import React from "react";


// 组件 传值
// 使用props给子组件传值, 单向传递
// 将state状态管理和 ui渲染分离
// 一个单一的有状态组件管理state逻辑,多个无状态的子组件从props接收数据渲染UI

class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'CamperBot'
        }
    }

    render() {
        return (<div>
            <NavBar name={this.state.name}/>
        </div>)
    }
}

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <h1>Hello, my name is: {this.props.name}</h1>
        </div>)
    }

}

export default <MyApp/>
