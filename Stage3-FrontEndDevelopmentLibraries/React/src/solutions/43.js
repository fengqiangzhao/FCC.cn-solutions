import React from "react";

//条件渲染css

class GateKeeper extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({input: e.target.value})
    }

    render() {
        let inputStyle = {border: '1px solid black'}

        if (this.state.input.length > 15) {
            inputStyle['border'] = '1px solid red'
        }

        return (<div>
            <h3>Don't Type Too Much: </h3>
            <input type="text" style={inputStyle} value={this.state.input} onChange={this.handleChange}/>
        </div>)
    }
}


export default <GateKeeper/>
