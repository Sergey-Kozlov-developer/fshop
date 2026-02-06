import Header from "@/widgets/header/ui/Header";
import { Outlet } from "react-router";

const LayoutApp = () => {
    return (
        <>
            <Header />
            <main className="container">
                <Outlet />
            </main>
        </>
    );
};

export default LayoutApp;
