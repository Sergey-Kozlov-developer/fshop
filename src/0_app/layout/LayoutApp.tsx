import { Header } from "@/2_widgets/header";
import { Outlet } from "react-router";

const LayoutApp = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default LayoutApp;
