import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router";
import {AddCustomer} from "./assets/component/AddCustomer.tsx";
import {DashboardComponent} from "./assets/component/DashboardComponent.tsx";
import {ErrorPageComponent} from "./assets/component/ErrorPageComponent.tsx";

function App() {
    const routes = createBrowserRouter([
        { path: "/" , element: <DashboardComponent/> },
        { path: "/add", element: <AddCustomer/> },
        { path: "*", element: <ErrorPageComponent/> }
    ]);

    return (
        <>
            <RouterProvider router={routes}>

            </RouterProvider>
        </>
    );
}

export default App;