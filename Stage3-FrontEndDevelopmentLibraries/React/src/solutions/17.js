import React from 'react';

const Items = (props) => {
    return <h1>Current Quantity of Items in Cart:{props.quantity}</h1>
}

Items.defaultProps = {quantity: 0}

class ShoppingCart extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Items quantity={10}/>
            // <Items />
        )
    }

}

export default <ShoppingCart />
