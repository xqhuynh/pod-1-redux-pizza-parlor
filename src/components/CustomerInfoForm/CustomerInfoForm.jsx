function CustomerInfoForm() {
    console.log('In Customer Info Form');
    return (
        <>
            <form>
                <h2>Step 2: Customer Information</h2>

                
                    <input id="name" type="text" placeholder="Name" />
                    <input id="address" placeholder="Street Address" />
                    <input id="city" type="text" placeholder="City" />
                    <input id="zip" type="number" placeholder="Zip" />
            
            </form>
        </>
    )
}


export default CustomerInfoForm;