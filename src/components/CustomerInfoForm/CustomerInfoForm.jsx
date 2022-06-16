function CustomerInfoForm() {
    console.log('In Customer Info Form');
    return (
        <>
            <form>
                <div>
                    <h3>Step 2: Customer Information</h3>


                    <input type="radio" id="pickup" name="pickup_or_delivery"
                        value="Pickup" />
                    <label htmlFor="pickup">Pickup</label><br />
                    <input type="radio" id="delivery" name="pickup_or_delivery"
                        value="Delivery" />
                    <label htmlFor="delivery">Delivery</label><br />

                    <input id="name" type="text" placeholder="Name" />
                    <input id="address" placeholder="Street Address" />
                    <input id="city" type="text" placeholder="City" />
                    <input id="zip" type="number" placeholder="Zip" />

                </div>
                <button type="submit">NEXT</button>
            </form>
        </>
    )
}


export default CustomerInfoForm;