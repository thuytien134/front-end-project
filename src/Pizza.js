import React from "react";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Pizza({pizza,onDelete}) { 
function handleDelete(){
  fetch(`https://fast-inlet-56401.herokuapp.com/pizzas/${pizza.id}`,{
    method:"DELETE",
  })
  .then(r=>r.json())
  .then(()=> onDelete(pizza))
}

  return (
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{pizza.vegetarian ? "Yes" : "No"}</td>
      <td>
        <Button  variant="primary" className="remove" onClick={handleDelete}>
          Remove
        </Button>
      </td>
    </tr>
  );
}

export default Pizza;
