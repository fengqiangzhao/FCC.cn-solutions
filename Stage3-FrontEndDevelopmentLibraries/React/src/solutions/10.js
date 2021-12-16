import React from 'react';


// 使用React渲染嵌套组件
const TypesOfFruit = () => {
    return (
        <div>
            <h2>Fruits</h2>
            <ul>
                <li>Apples</li>
                <li>Blueberries</li>
                <li>Strawberries</li>
                <li>Bananas</li>
            </ul>
        </div>
    )
}

const Fruits = () => {
    return (
        <div>
            <TypesOfFruit />
        </div>
    )
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
                <Fruits />
            </div>
        )
    }
}

export default <TypesOfFood />
