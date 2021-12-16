import React from "react";

// 使用state切换元素

// 不推荐使用下面这种方式，因为setState操作是异步的
// this.setState({
//     counter: this.state.counter + this.props.increment
// })

// 建议使用带参函数
// this.setState((state, props) => ({
//     counter: state.counter + props.increment
// }))


class MyComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visibility: false
        }

        this.toggleVisibility = this.toggleVisibility.bind(this)
    }

    toggleVisibility() {
        this.setState((state) => ({
            visibility: !state.visibility
        }))
    }

    render() {
        if (this.state.visibility) {
            return (<div>
                <button onClick={this.toggleVisibility}>Click Me!</button>
                <h1>Now you see me!</h1>
            </div>)
        } else {
            return (<div>
                <button onClick={this.toggleVisibility}>Click Me!</button>
            </div>)
        }
    }

}

export default <MyComponent/>
