import React from 'react';

//从零开始写一个React组件

class MyComponent extends React.Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }


    render() {
        return (<div>
                <h1>My First React Component!</h1>
            </div>)
    }
}

export default <MyComponent />
