import { routes } from "@/app/routes/routes";
import "@/app/styles/index.css";

import { RouterProvider } from "react-router";

function App() {
    return (
        <>
            <RouterProvider router={routes} />
        </>
    );
}

export default App;
