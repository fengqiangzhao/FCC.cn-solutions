import React from "react";

// 声明周期钩子函数
// componentDidMount

class MyComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeUsers: null
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({activeUsers: 1273})
        }, 2000)
    }

    render() {
        return (
            <div>
                <h1>Active Users: {this.state.activeUsers}</h1>
            </div>
        )
    }


}

export default <MyComponent/>
