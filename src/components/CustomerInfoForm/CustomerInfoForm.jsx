import react from 'react';
import { useState } from 'react';

function CustomerInfoForm() {
    console.log('In Customer Info Form');
    // setting loacl state
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');

    const [pickup_or_delivery, set_Pickup_or_delivery] = useState('pickup');

    const [customerInfo, setCustomerInfo] = useState([]);
    
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

                    <div onChange={handleChange}>
                        <input type="radio" id="pickup" name="pickup_or_delivery"
                            value="Pickup"
                        />
                        <label htmlFor="pickup">Pickup</label><br />

                        <input type="radio" id="delivery" name="pickup_or_delivery"
                            value="Delivery"
                        />
                        <label htmlFor="delivery">Delivery</label><br />
                    </div>




                    <input id="name" type="text" placeholder="Name"
                        onChange={e => setName(e.target.value)}
                        value={name}
                    />
                    <input id="address" placeholder="Street Address"
                        onChange={e => setAddress(e.target.value)}
                        value={address}
                    />
                    <input id="city" type="text" placeholder="City"
                        onChange={e => setCity(e.target.value)}
                        value={city}
                    />
                    <input id="zip" type="number" placeholder="Zip"
                        onChange={e => setZip(e.target.value)}
                        value={zip}
                    />



                </div>
                <button type="submit">NEXT</button>
            </form>
        </>
    )
}


export default CustomerInfoForm;