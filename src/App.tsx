import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router";
import {RootLayout} from "./components/RootLayout.tsx";
import {DashboardPage} from "./pages/DashboardPage.tsx";
import {AddCustomerPage} from "./pages/AddCustomerPage.tsx";
import {DeleteCustomerPage} from "./pages/DeleteCustomerPage.tsx";
import {UpdateCustomerPage} from "./pages/UpdateCustomerPage.tsx";
import {CustomerProvider} from "./components/CustomerProvider.tsx";
import {ErrorPageComponent} from "./pages/ErrorPageComponent.tsx";

function App() {
    const route = createBrowserRouter([
        {
            path: "/",
            element: <RootLayout/>,
            children: [
                { path: "/", element: <DashboardPage/> },
                { path: "/add", element: <AddCustomerPage/> },
                { path : "/delete", element : <DeleteCustomerPage/>},
                { path : "/update", element : <UpdateCustomerPage/>}
            ]
        },
        {
            path: "*",
            element: <ErrorPageComponent/>
        }
    ])
    return (
        <>
            <CustomerProvider>
                <RouterProvider router={route} />
            </CustomerProvider>
        </>
    );
}

export default App;