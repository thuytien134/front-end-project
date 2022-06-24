import React, { useState } from "react";
import { Form, Col, Row, Button } from 'react-bootstrap'

function PizzaForm({onAddPizza}) {
    const [topping, setTopping] = useState("")
    const [size, setSize] = useState("Small")
    const [isVegetarian,setIsVegetarian] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        const pizzaData = {
            topping: topping,
            size: size,
            vegetarian: isVegetarian
        }
       
        fetch("https://fast-inlet-56401.herokuapp.com/pizzas", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(pizzaData)
        })
        .then(r=> r.json())
        .then(newPizza => onAddPizza(newPizza))
    }

    return (
        <Form onSubmit={handleSubmit} style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", flexDirection: "column" }}>
            <Row>
                <Col xs={7}>
                    <Form.Control
                        className="mb-3"
                        name="Pizza"
                        placeholder="Pizza Topping"
                        onChange={(e)=> setTopping(e.target.value)}
                    />
                </Col>
                <Col xs="auto">
                    <Form.Select className="form-control" name="size" onChange={(e)=> setSize(e.target.value)}>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                    </Form.Select>
                </Col>
                <Col xs="auto">
                    <Form.Check
                        type="radio"
                        name="vegetarian"
                        className="mb-2"
                        label="vegetarian"
                        onChange={(e)=> setIsVegetarian(e.target.checked)}
                    />
                    <Form.Check
                        type="radio"
                        name="vegetarian"
                        className="mb-2"
                        label="Not Vegetarian"
                        
                    />
                </Col>
                <Col xs="auto">
                    <Button type="submit" variant="success">
                        Submit
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}

export default PizzaForm;