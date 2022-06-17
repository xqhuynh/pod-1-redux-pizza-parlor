import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function PizzaList() {
  // Bring in useSelector
  const pizzaList = useSelector((store) => store.pizzaList);

  return (
    <>
      <div className="title-container">
        <h3 className="step-one">Step 1: Select Your Pizza</h3>
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
              <Button size="md" variant="primary">
                Add
              </Button>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}

export default PizzaList;
