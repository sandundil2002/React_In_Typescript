import { Link } from "react-router";

export const Navigations = () => {
    return (
        <div style={{display: "flex", gap: "1rem"}}>
            <li><Link to="/add">Add Customer</Link></li>
            <li><Link to="/update">Update Customer</Link></li>
            <li><Link to="/search">Search Customer</Link></li>
            <li><Link to="/delete">Delete Customer</Link></li>
        </div>
    );
};
