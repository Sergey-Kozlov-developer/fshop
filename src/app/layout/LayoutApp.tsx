import Header from "@/widgets/header/ui/Header";
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
