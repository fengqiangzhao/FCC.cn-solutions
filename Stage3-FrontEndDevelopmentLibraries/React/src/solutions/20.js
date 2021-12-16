import React from 'react';

class CampSite extends React.Component {

    render() {
        return (<div>
                <Camper name={"CamperBot"}/>
            </div>)
    }
}

class Camper extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <p>{this.props.name}</p>
    }
}

export default <CampSite />
