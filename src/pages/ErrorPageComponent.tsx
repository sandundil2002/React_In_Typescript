import {Link} from "react-router";
import('../App.css');

export const ErrorPageComponent = () => {
    return (
        <>
            <h1>404 Not Found</h1> <br/>
            <Link to="/">Go Back</Link>
        </>
    );
};