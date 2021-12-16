import React from 'react';
import PropTypes from "prop-types";


const Items = (props) => {
    return <h1>Current Quantity of Items in Cart:{props.quantity}</h1>
}

Items.propTypes = {
    quantity: PropTypes.number
}

Items.defaultProps = {
    quantity: 0
}

class ShoppingCart extends React.Component {
    render() {
        return <Items quantity={100}/>
    }
}

export default <ShoppingCart />
