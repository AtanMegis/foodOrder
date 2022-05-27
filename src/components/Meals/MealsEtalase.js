import React from "react";

import classes from './MealsEtalase.module.css';
import Card from "../UI/Card";
import MealProduct from "./MealsProduct,.js/MealProduct";

const MealsEtalase = () => {
    const DUMMY_MEALS = [
        {
            id: 'm1',
            name: 'Ketoprak Aduk',
            description: 'Di aduk aduk ampe pusing',
            price: 40,
        },
        {
            id: 'm2',
            name: 'Baso Malang',
            description: 'Khas Madura',
            price: 30,
        },
        {
            id: 'm3',
            name: 'Soto kaki kambing sebelah kiri',
            description: 'sebelah kanan lagi di cari',
            price: 50,
        },
        {
            id: 'm4',
            name: 'Sop buntut ayam',
            description: 'gada buntut, adanya leher',
            price: 25,
        },
    ];

    const mealsList = DUMMY_MEALS.map((meal) =>
        <MealProduct
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    )

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    )
}

export default MealsEtalase;