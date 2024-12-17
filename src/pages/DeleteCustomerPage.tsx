import {Customer} from "../models/customer.ts";
import {useContext, useState} from "react";
import {CustomerContext} from "../components/CustomerProvider.tsx";
import('../App.css');

export const DeleteCustomerPage = () => {
    const [customers, setCustomers] = useContext(CustomerContext);

    const [email, setEmail] = useState("");

    function handleSubmit() {
        setCustomers(customers => customers.filter(customer => customer.email !== email));
    }

    return (
        <>
            <h1>Delete Customer</h1>
            <br/>

            <input type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)}/>

            <br/>
            <button onClick={handleSubmit}>Delete Customer</button>

            <div className="customer-list">
                {(
                    <ul>
                        {customers.map((customer: Customer, index: number) => (
                            <p key={index}>
                                <strong>Name:</strong> {customer.name},
                                <strong>Email:</strong> {customer.email},
                                <strong>Phone:</strong> {customer.mobile}
                            </p>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};