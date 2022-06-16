import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

function PizzaList() {
    // Bring in useSelector
    const pizzaList = useSelector(store => store.pizzaList);

    return (
        <>
            <h3>Pizza List Test</h3>
        </>
    )
}

export default PizzaList;