import LayoutApp from "@/app/layout/LayoutApp";
import CombosPage from "@/pages/combos/ui/CombosPage";
import JoggersPage from "@/pages/joggers/ui/JoggersPage";
import MenPage from "@/pages/men/ui/MenPage";
import ShopPage from "@/pages/shop/ui/ShopPage";
import WomenPage from "@/pages/women/ui/WomenPage";
import { createBrowserRouter } from "react-router";

export const routes = createBrowserRouter([
    {
        path: "/",
        Component: LayoutApp,
        children: [
            {
                path: "/",
                Component: ShopPage,
            },
            {
                path: "/men",
                Component: MenPage,
            },
            {
                path: "/women",
                Component: WomenPage,
            },
            {
                path: "/combos",
                Component: CombosPage,
            },
            {
                path: "/shop",
                Component: ShopPage,
            },
            {
                path: "/joggers",
                Component: JoggersPage,
            },
        ],
    },
]);
