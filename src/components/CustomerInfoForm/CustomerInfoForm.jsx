import react from 'react';
import { useState } from 'react';

import './CustomerInfoForm.css';
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";

function CustomerInfoForm({setCustomerInfo})
    console.log('In Customer Info Form');
    // setting local state
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [pickup_or_delivery, set_Pickup_or_delivery] = useState('pickup');

    const handleChange = (event) => {
        set_Pickup_or_delivery(event.target.value)
    }

    function onSubmitCustomer(event) {
        event.preventDefault();

        setCustomerInfo({
            name,
            address,
            city,
            zip,
            type: pickup_or_delivery,
        });

        console.log('customer info is', customerInfo);

        console.log('In on submit');


    }

    return (
        <>
            {/* Setting on submit funtion */}
            <form onSubmit={onSubmitCustomer}>

                <div>
                    <h3>Step 2: Customer Information</h3>
                    
                    <div className='radioBtns' onChange={handleChange}>
                        <input type="radio" id="pickup" name="pickup_or_delivery"
                            value="Pickup"
                        />
                        <label htmlFor="pickup">Pickup</label><br />

                        <input type="radio" id="delivery" name="pickup_or_delivery"
                            value="Delivery"
                        />
                        <label htmlFor="delivery">Delivery</label><br />
                    </div>


                    <div className='textInputs'>

                        <input id="name" type="text" placeholder="Name"
                            onChange={e => setName(e.target.value)}
                            value={name}
                        /><p></p>
                        <input id="address" placeholder="Street Address"
                            onChange={e => setAddress(e.target.value)}
                            value={address}
                        /><p></p>
                        <input id="city" type="text" placeholder="City"
                            onChange={e => setCity(e.target.value)}
                            value={city}
                        /><p></p>
                        <input id="zip" type="number" placeholder="Zip"
                            onChange={e => setZip(e.target.value)}
                            value={zip}
                        /><p></p>

                    </div>

                </div>
                <Link to={'/checkout'} >
                    <Button type="submit" className="next-button" size="md" variant="primary">
                        Next
                    </Button>
                    {/* <button type="submit">NEXT</button> */}
                </Link>
            </form>
        </>
    )
}


export default CustomerInfoForm;