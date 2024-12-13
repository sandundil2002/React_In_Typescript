import {Link} from "react-router";

export const DashboardComponent= () => {
    return (
        <>
            <h1>Dashboard</h1>
            <Link to="/add">Add Customer</Link>
        </>
    );
};