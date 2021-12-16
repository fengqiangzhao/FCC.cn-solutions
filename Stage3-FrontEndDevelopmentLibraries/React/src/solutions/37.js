import React from "react";

//使用css内联样式

const style = {
    fontSize: 40,
    color: "purple",
    border: "2px solid purple",
}

class Colorful extends React.Component {
    render() {
        return (<div style={style}>
            Style Me!
        </div>)
    }
}

export default <Colorful />
