import React from "react";

//使用声明周期方法
// componentWillMount


class MyComponent extends React.Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {
        console.log(1231231231)
    }

    render() {
        return <div/>
    }
}

export default <MyComponent />
