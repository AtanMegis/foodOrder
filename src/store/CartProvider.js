import React, { useState, useReducer } from 'react'
import CartContext from './CartContext'


const defaultCartState = {
    items: [],
    totalAmount: 0,
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedItems = state.item.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            item: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState;

}


const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)


    const addItemHandler = item => {
        dispatchCartAction({ type: 'ADD', item: item })
    }

    const removeItemHandler = id => {
        dispatchCartAction({ type: 'REMOVE', remove: remove })
    }



    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
    }


    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider