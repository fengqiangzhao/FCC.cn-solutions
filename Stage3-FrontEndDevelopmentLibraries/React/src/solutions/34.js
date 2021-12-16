import React from "react";

//事件侦听器
//React封装了浏览器的事件系统,使用React开发不需要考虑浏览器兼容
//例如onClick() onChange()

//如果要把事件处理程序附加到document或者window对象，必须添加事件侦听器
//添加事件侦听器 addEventListener(事件，回调函数)
//移除事件侦听器 removeEventListener()
//在componentDidMount中 添加事件侦听器
//在componentWillUnmount中 移除事件侦听器
//在卸载和销毁 React 组件之前，最好在这个生命周期方法中对它们进行清理


class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }

        this.handleEnter = this.handleEnter.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this)
    }

    componentDidMount() {
        console.log("mount")
        document.addEventListener("keydown", this.handleKeyPress)
    }

    componentWillUnmount() {
        console.log("unmount")
        document.removeEventListener("keydown", this.handleKeyPress)
    }

    handleEnter() {
        this.setState(state => ({
            message: state.message + 'You pressed the enter key!'
        }))
    }

    handleKeyPress(event) {
        if (event.keyCode === 13) {
            this.handleEnter();
        }
    }

    render() {
        return (<div>
            <h1>My component</h1>
            <h2>{this.state.message}</h2>
        </div>)
    }
}

//使用MyComponent2模拟触发 Mycomponent的componentWillUnmount
class MyComponent2 extends React.Component {
    render() {
        return (<div>
            <h1>My component2</h1>
        </div>)
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: false
        }

        this.handleClick = this.handleClick.bind(this)
        // this.renderComponent = this.renderComponent.bind(this)
    }

    handleClick() {
        this.setState(state => ({
            type: !state.type
        }))
    }

    renderComponent = () => {
        if (!this.state.type) {
            return <MyComponent/>
        } else {
            return <MyComponent2/>
        }
    }

    render() {
        return (<div>
                <button onClick={this.handleClick}>Click me to change component</button>
                <div>
                    {this.renderComponent()}
                </div>
            </div>
        )
    }

}


export default <App/>
