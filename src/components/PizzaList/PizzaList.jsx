import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

function PizzaList() {
    // Bring in useSelector
    const pizzaList = useSelector(store => store.pizzaList);

    return (
        <>
            <h3>Pizza List Test</h3>
            <div className="pizza-container">
                {pizzaList.map((pizza) => 
                <div className="pizza-card"key={pizza.id}>
                  <img className="picture" src={pizza.image_path} />
                    <h3 className="pizza-name">{pizza.name}</h3>
                    <p>{pizza.description}</p>
                    <p className="pizza-price">{pizza.price}</p>
                    <button className="pizza-button">Add</button>
                </div>)}
            </div>
        </>
    )
}

export default PizzaList;