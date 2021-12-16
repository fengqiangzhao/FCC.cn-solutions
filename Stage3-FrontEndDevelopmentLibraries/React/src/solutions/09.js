import React from "react";

// 以组合方式创建一个React组件

const ChildComponent = () => {
    return (
        <div>
            <p>I am the child</p>
        </div>
    )
}

class ParentComponent extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>I am the parent</h1>
                <ChildComponent />
            </div>
        )
    }
}

export default <ParentComponent />
