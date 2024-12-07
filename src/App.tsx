import { useState } from "react";
import './App.css';
import { Customer } from "./customer";

function App() {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");

    function addCustomer() {
        const newCustomer: Customer = { name, address, email, mobile };
        setCustomers(customers => [...customers, newCustomer]);
    }

    function deleteCustomer() {
        setCustomers(customers => customers.slice(0, -1));
    }

    function deleteByEmail() {
        setCustomers(customers => customers.filter(customer => customer.email !== email));
    }

    function updateCustomer() {
        setCustomers(customers => customers.map(customer => {
            if (customer.email === email) {
                return { name, address, email, mobile };
            }
            return customer;
        }));
    }

    return (
        <>
            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Address" onChange={(e) => setAddress(e.target.value)} />
            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="Mobile" onChange={(e) => setMobile(e.target.value)} /> <br/>
            <button onClick={addCustomer}>Add Customer</button>
            <button onClick={deleteCustomer}>Delete Customer</button>
            <button onClick={deleteByEmail}>Delete by Email</button>
            <button onClick={updateCustomer}>Update Customer</button>
            <ul>
                {customers.map((customer, index) => (
                    <div key={index}>
                        {customer.name + " "}
                        {customer.address + " "}
                        {customer.email + " "}
                        {customer.mobile + " "}
                    </div>
                ))}
            </ul>
        </>
    );
}

export default App;