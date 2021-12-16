import React from 'react';

//有状态组件
//state是完全封装在组件内部的，除非使用props传递给子组件
class StatefulComponment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'fengqiangzhao'
        }
    }

    render() {
        return (<div>
            <h1>{this.state.name}</h1>
        </div>)
    }
}

export default <StatefulComponment/>
