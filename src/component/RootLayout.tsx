import { Outlet } from "react-router";
import { Navigations } from "./Navigations.tsx";

export const RootLayout = () => {
    return (
        <div>
            <Navigations />
            <main>
                <Outlet /> {/* Renders child routes */}
            </main>
        </div>
    );
};
