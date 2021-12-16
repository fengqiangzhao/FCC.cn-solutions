import React from "react";

// 使用js语法渲染数据

class MyComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'freeCodeCamp'
        }
    }

    render() {
        let name = this.state.name;
        return <div>
            {name}
        </div>
    }
}

export default <MyComponent />
