import {useContext, useState} from "react";
import {CustomerContext} from "../components/CustomerProvider.tsx";
import {Customer} from "../models/customer.ts";
import('../App.css');

export const AddCustomerPage = () => {
    const [customers, setCustomers] = useContext(CustomerContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    function handleSubmit() {
        const newCustomer = new Customer(name, email, phone);
        setCustomers((customers: Customer[]) => [...customers, newCustomer]);
    }

    return (
        <>
            <h1>Add Customer</h1>
            <br/>

            <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)}/>
            <input type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
            <input type="number" placeholder='mobile' onChange={(e) => setPhone(e.target.value)}/>

            <br/>
            <button onClick={handleSubmit}>Add Customer</button>

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