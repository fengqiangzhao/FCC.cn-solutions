import React from "react";

class Fruits extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Fruits:</h2>
                <NonCitrus/>
                <Citrus/>
            </div>
        )
    }

}

const NonCitrus = () => {
    return (
        <div>
            <h3>NonCitrus:</h3>
            <ul>
                <li>Apples</li>
                <li>Bananas</li>
            </ul>
        </div>
    )
}


const Citrus = () => {
    return (
        <div>
            <h3>Citrus:</h3>
            <ul>
                <li>Tangerine</li>
                <li>Orange</li>
            </ul>
        </div>
    )
}

class Vegetables extends React.Component {
    render() {
        return (
            <div>
                <h2>Vegetables:</h2>
                <ul>
                    <li>Cabbages</li>
                    <li>Cucumber</li>
                    <li>Tomato</li>
                    <li>Potato</li>
                </ul>
            </div>
        )
    }
}


class TypesOfFood extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Types of Food:</h1>
                <Fruits/>
                <Vegetables/>
            </div>
        )
    }
}

export default <TypesOfFood/>
