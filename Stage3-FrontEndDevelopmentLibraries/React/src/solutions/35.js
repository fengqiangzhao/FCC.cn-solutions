import React from 'react';


// 生命周期 shouldComponentUpdate(nextProps, nextState) 优化重新渲染
// 返回一个bool值是否更新组件

// React默认行为是收到state/props时就会重新渲染，即使props没有改变
// 在这个声明周期函数内处理，限制只有props/state发生改变时，才会重新渲染ui


class OnlyFans extends React.Component {

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps) {
        console.log("Should I update?")
        return nextProps.value % 2 === 0;
    }


    render() {
        return (<h1>
            {this.props.value}
        </h1>)
    }
}


class Controller extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0
        }

        this.addValue = this.addValue.bind(this);
    }

    addValue() {
        this.setState(state => ({
            value: state.value + 1
        }))
    }

    render() {
        return (<div>
            <button onClick={this.addValue}>Add</button>
            <OnlyFans value={this.state.value}/>
        </div>)
    }
}


export default <Controller/>
