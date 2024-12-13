import './App.css';
import {DashboardComponent} from "./assets/component/DashboardComponent.tsx";
import {createBrowserRouter, RouterProvider} from "react-router";
import {AddCustomer} from "./assets/component/AddCustomer.tsx";
import {ErrorPageComponent} from "./assets/component/ErrorPageComponent.tsx";

function App() {
    const route = createBrowserRouter([
        { path: "/" , element: <DashboardComponent/> },
        { path: "/add" , element: <AddCustomer/> },
        { path: "*" , element: <ErrorPageComponent/> }
    ])
    return (
        <>
            <RouterProvider router={route}>

            </RouterProvider>
        </>
    );
}

export default App;