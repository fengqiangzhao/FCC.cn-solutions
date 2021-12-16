import React from 'react';

const ShoppingCart = (props) => {
    return (<div>
            <h1>Shopping Cart Component</h1>
            <p>{props.items}</p>
        </div>)

}

ShoppingCart.defaultProps = {items: 0}

export default <ShoppingCart/>
