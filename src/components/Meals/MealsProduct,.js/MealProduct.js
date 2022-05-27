import React from "react";
import MealForm from "./MealForm";

import classes from './MealProduct.module.css'

const MealProduct = (props) => {
    const price = `Rp ${props.price.toFixed(3)}`

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
      <MealForm/>
      </div>
    </li>
  );
};

export default MealProduct;