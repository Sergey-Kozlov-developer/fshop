import LayoutApp from "@/app/layout/LayoutApp";
import { CombosPage } from "@/pages/combos";
import { JoggersPage } from "@/pages/joggers";
import { MenPage } from "@/pages/men";

import { ShopPage } from "@/pages/shop";
import { WomenPage } from "@/pages/women";

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
