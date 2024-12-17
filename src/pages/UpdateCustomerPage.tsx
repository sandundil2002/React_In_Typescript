import {useContext, useState} from "react";
import {CustomerContext} from "../components/CustomerProvider.tsx";
import {Customer} from "../models/customer.ts";

import('../App.css');

export const UpdateCustomerPage = () => {
    const [customers, setCustomers] = useContext(CustomerContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    function handleSubmit() {
        setCustomers(customers => customers.map(customer => {
            if (customer.email === email) {
                return {
                    ...customer,
                    name,
                    mobile: phone
                }
            }
            return customer;
        }));
    }
    return (
        <>
            <h1>Update Customer</h1>
            <br/>

            <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)}/>
            <input type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
            <input type="number" placeholder='mobile' onChange={(e) => setPhone(e.target.value)}/>

            <br/>
            <button onClick={handleSubmit}>Update Customer</button>

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