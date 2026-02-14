import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface StoreState {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    products: any[];
    isLoading: boolean;
    error: string | null;
    fetchProducts: () => Promise<void>;
    // reset: () => void;
}

export const useStoreStore = create<StoreState>()(
    devtools(
        (set) => ({
            products: [],
            isLoading: false,
            error: null,
            fetchProducts: async () => {
                set(
                    { isLoading: true, error: null },
                    false,
                    "fetchdata/pending"
                );
                try {
                    const response = await fetch(
                        "https://fakestoreapi.com/products"
                    );
                    if (!response.ok) throw new Error("Failed to fetch");
                    const data = await response.json();
                    console.log(data);

                    set(
                        { products: data, isLoading: false },
                        false,
                        "fetchdata/fulfilled"
                    );
                } catch (error) {
                    set(
                        { error: (error as Error).message, isLoading: false },
                        false,
                        "fetchdata/rejected"
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
        { name: "StoreStore" }
    )
);