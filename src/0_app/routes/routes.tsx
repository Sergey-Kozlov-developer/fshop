import LayoutApp from "@/0_app/layout/LayoutApp";
import { CombosPage } from "@/1_pages/combos";
import { JoggersPage } from "@/1_pages/joggers";
import { MenPage } from "@/1_pages/men";

import { ShopPage } from "@/1_pages/shop";
import { WomenPage } from "@/1_pages/women";

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
