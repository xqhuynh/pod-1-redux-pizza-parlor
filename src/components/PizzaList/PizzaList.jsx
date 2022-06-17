import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";

function PizzaList() {
  // Bring in useSelector for pizzaList
  const pizzaList = useSelector((store) => store.pizzaList);
  const dispatch = useDispatch();

  return (
    <>
      <div className="title-container">
        <h3 className="step-one">Step 1: Select Your Pizza</h3>

        <h3 className="cart">
          <ShoppingCartOutlined className="cart-icon" />
          Total: $Placeholder
        </h3>
      </div>
      <div className="pizza-container">
        {pizzaList.map((pizza) => (
          <div key={pizza.id}>
            <Card border="primary" style={{ width: "16rem", height: "100%" }}>
              <Card.Img variant="top" src={pizza.image_path} />
              <Card.Body>
                <Card.Title>{pizza.name}</Card.Title>
                <Card.Text className="description-text">
                  {pizza.description}
                </Card.Text>
              </Card.Body>
              <Card.Text className="price-text">${pizza.price}</Card.Text>
              <Button
                onClick={() =>
                  dispatch({
                    type: "SET_CART",
                    payload: [pizza.name, pizza.price],
                  })
                }
                size="md"
                variant="primary"
              >
                Add
              </Button>
            </Card>
          </div>
        ))}
      </div>
      <Button className="next-button" size="md" variant="primary">
        Next
      </Button>
    </>
  );
}

export default PizzaList;
