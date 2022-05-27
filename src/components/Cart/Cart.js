import React from 'react'
import Modal from '../UI/Modal';

import classes from './Cart.module.css';

const Cart = (props) => {
    const CartItems = (
        <ul className={classes['cart-items']}>
            {[{
                id: 'c1',
                name: 'Ketoprak Aduk',
                amount: 2,
                price: 30
            }].map((item) => (
                <li>{item.name}</li>
            ))}
        </ul>
    )

    return (
        <Modal onClose={props.onClose}> 
            {CartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.000</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;

/*onCLose ={props.onClose}*/