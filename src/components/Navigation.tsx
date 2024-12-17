import { Link } from "react-router";
import("../App.css");

export const Navigation = () => {
    return (
        <header>
            <nav>
                <ul>
                    <Link to='/' className="nav-bar">Dashboard</Link>
                    <Link to='/add' className="nav-bar">Add Customer</Link>
                    <Link to='/update' className="nav-bar">Update Customer</Link>
                    <Link to='/delete' className="nav-bar">Delete Customer</Link>
                </ul>
            </nav>
        </header>
    );
};
