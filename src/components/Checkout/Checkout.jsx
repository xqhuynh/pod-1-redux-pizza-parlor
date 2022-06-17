import { useSelector, useDispatch } from 'react-redux'; 
import { useHistory } from 'react-router-dom';


function Checkout ({customerInfo}){
    const history = useHistory();
    const dispatch = useDispatch();  
    const cart = useSelector(store => store.cart);

    let info = {
        customer_name:customerInfo.name, 
        street_address:customerInfo.address, 
        city:customerInfo.city, 
        zip:customerInfo.zip,
        type:customerInfo.type  
    }

    function onCheckout(){
        window.alert("Order Submitted!");
        // [] post route to the DB 
        axios.post(`/api/order`, info)
        .then(() => {
            // [] clear cart reducer
            dispatch({ type: 'CLEAR_CART' }); 
                    
            history.push('/' );
    });
}
    return(

        <>
            <h2> Step 3: Checkout </h2>
            <p> {customerInfo.name} </p>
            <p> {customerInfo.address} </p>
            <p> {customerInfo.city}, {customerInfo.zip} </p>
            <h4> {customerInfo.type} </h4>

            <table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                {cart.map((pizza) => {
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
