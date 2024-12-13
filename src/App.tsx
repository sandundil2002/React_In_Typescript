import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router";
import {RootLayout} from "./component/RootLayout.tsx";
import {DashboardPage} from "./pages/DashboardPage.tsx";
import {AddCustomerPage} from "./pages/AddCustomerPage.tsx";
import {UpdateCustomerPage} from "./pages/UpdateCustomerPage.tsx";
import {SearchCustomerPage} from "./pages/SearchCustomerPage.tsx";
import {DeleteCustomerPage} from "./pages/DeleteCustomerPage.tsx";
import {ErrorPageComponent} from "./pages/ErrorPageComponent.tsx";

function App() {
    const route = createBrowserRouter([
        {
            path: "/",
            element: <RootLayout/>,
            children: [
                { path: "/", element: <DashboardPage/> },
                { path: "/add", element: <AddCustomerPage/> },
                { path: "/update", element: <UpdateCustomerPage/> },
                { path: "/search", element: <SearchCustomerPage/> },
                { path: "/delete", element: <DeleteCustomerPage/> },
            ]
        },
        {
            path: "*",
            element: <ErrorPageComponent/>
        }
    ])
    return (
        <>
            <RouterProvider router={route}></RouterProvider>
        </>
    );
}

export default App;