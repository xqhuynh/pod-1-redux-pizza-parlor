import react from 'react';
import { useState } from 'react';

function CustomerInfoForm() {
    console.log('In Customer Info Form');
    // setting loacl state
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');

    function onSubmitCustomer( event ) {
        event.preventDefault();

        dispatch({
            type: 'CUSTOMER_FORM',
            payload:{
                name,
                address,
                city,
                zip     
            }
        })

        console.log('In on submit');

    }

    return (
        <>
            {/* Setting on submit funtion */}
            <form onSubmit={onSubmitCustomer}>

                <div>
                    <h3>Step 2: Customer Information</h3>


                    <input type="radio" id="pickup" name="pickup_or_delivery"
                        value="Pickup" />
                    <label htmlFor="pickup">Pickup</label><br />
                    <input type="radio" id="delivery" name="pickup_or_delivery"
                        value="Delivery" />
                    <label htmlFor="delivery">Delivery</label><br />

                    <input id="name" type="text" placeholder="Name"
                        onChange={e => setName(e.target.value) } 
                        value={name}
                    />
                    <input id="address" placeholder="Street Address"
                        onChange={e => setAddress(e.target.value) }
                        value={address}
                    />
                    <input id="city" type="text" placeholder="City" 
                        onChange={e => setCity(e.target.value) }
                        value={city}
                    />
                    <input id="zip" type="number" placeholder="Zip"
                        onChange={e => setZip(e.target.value) }
                        value={zip}
                    />



                </div>
                <button type="submit">NEXT</button>
            </form>
        </>
    )
}


export default CustomerInfoForm;