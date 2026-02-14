import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { api } from "@/5_shared/api/fake-store";
import type { ProductStore } from "./types";

export const useProductStore = create<ProductStore>()(
    devtools(
        (set) => ({
            products: [],
            isLoading: false,
            error: null,
            fetchProducts: async () => {
                set(
                    { isLoading: true, error: null },
                    false,
                    "products/fetch/pending"
                );
                try {
                    const data = await api.getProducts();
                    set(
                        { products: data, isLoading: false },
                        false,
                        "products/fetch/fulfilled"
                    );
                } catch (error) {
                    set(
                        { error: (error as Error).message, isLoading: false },
                        false,
                        "products/fetch/rejected"
                    );
                }
            },
            // reset: () =>
            //     set(
            //         { users: [], isLoading: false, error: null },
            //         false,
            //         "reset"
            //     ),
        }),
        { name: "ProductEntity" }
    )
);
