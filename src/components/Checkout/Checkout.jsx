

function Checkout (){

    function onCheckout(){
        window.alert("Order Submitted!");
        // [] post route to the DB 
        // [] clear cart reducer
        // [] navigate back to the home page 
    };

    return(

        // [] 

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
                    <tr>
                        <td>Pizza 1</td>
                        <td>19.95</td>
                    </tr>
                    <tr>
                        <td>Pizza 12</td>
                        <td>19.95</td>
                    </tr>
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

