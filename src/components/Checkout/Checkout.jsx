import { useSelector, useDispatch } from 'react-redux'; 

function Checkout (){
    // const dispatch = useDispatch();  
    const pizzaList = useSelector(store => store.pizzaList);

    function onCheckout(){
        window.alert("Order Submitted!");
        // [] post route to the DB 
        // [] clear cart reducer
        // [] navigate back to the home page 
    };

    // create a function to get total cost of pizzas in cart 

    return(

        <>
            <h2>Step 3: Checkout</h2>
            <p> Customer Name</p>
            <p> Customer Address </p>
            <p> Customer Address </p>
            <h4> Delivery or Pickup </h4>

            <table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                {pizzaList.map((pizza) => {
                    return <tr key={pizza.id} >
                        <td>{pizza.name}</td>
                        <td>{pizza.price}</td>
                        </tr>
                })} 
                </tbody>
            </table>

            <h4> Total: </h4>

            <button 
                type='submit'
                onClick={onCheckout}
            >
                CHECKOUT
            </button>
        </>
    )
}

export default Checkout; 
