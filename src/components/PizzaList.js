import React, { useState, useEffect } from "react";
import Pizza from "./Pizza";
import PizzaForm from "./PizzaForm";


function PizzaList() {
    const [pizzas, setPizzas] = useState([])
    useEffect(() => {
        fetch("https://fast-inlet-56401.herokuapp.com/pizzas")
            .then(r => r.json())
            .then(pizzas => setPizzas(pizzas))
    }, [])

    function handleAddPizza(newPizza) {
        setPizzas([...pizzas, newPizza])
    }

    function handleDelete(deletePizza) {
        const updatePizzas = pizzas.filter(pizza => pizza.id !== deletePizza.id)
        setPizzas(updatePizzas)
    }

    return (
        <>
            <PizzaForm onAddPizza={handleAddPizza} />
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Topping</th>
                        <th scope="col">Size</th>
                        <th scope="col">Vegetarian?</th>
                        <th scope="col">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        //render Pizza here
                        pizzas.map(pizza => {
                            return <Pizza key={pizza.id} pizza={pizza} onDelete={handleDelete}/>
                        })
                    }
                </tbody>
            </table>
        </>
    );
}

export default PizzaList;