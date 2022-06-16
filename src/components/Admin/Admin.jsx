import './Admin.css'

const Admin = () => {


    return (
        <>
           <table className="admin-order-list">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Time Order Placed</th>
                    <th>Type</th>
                    <th>Cost</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Chris</td>
                    <td>4/5/2022 at 10:00AM</td>
                    <td>Delivery</td>
                    <td>$39.79</td>
                </tr>
            </tbody>
           </table>
        </>
    )
}


export default Admin;