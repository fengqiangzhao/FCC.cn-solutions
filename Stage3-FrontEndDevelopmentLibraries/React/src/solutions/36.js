import React from 'react';

//使用css内联样式

class Colorful extends React.Component {
    render() {
        return (<div style={{color: "red", fontSize: 72}}>Big Read</div>)
    }
}

export default <Colorful />
