import { routes } from "@/0_app/routes/routes";
import "@/0_app/styles/index.css";

import { RouterProvider } from "react-router";

function App() {
    return (
        <>
            <RouterProvider router={routes} />
        </>
    );
}

export default App;
