import React, { useContext } from "react";

import classes from './HeaderCartButton.module.css'
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/CartContext";

const HeaderCartButton = (props ) => {
    
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items;
    
    return (
        <button className={classes.button} onClick={props.onKlikCartButton}>
            <span className={classes.icon}>
                <CartIcon  />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>3</span>
        </button>
    )
}

export default HeaderCartButton;
