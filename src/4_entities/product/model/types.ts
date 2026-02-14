export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}
export interface ProductState {
    products: Product[];
    isLoading: boolean;
    error: string | null;
}
export interface ProductActions {
    fetchProducts: () => Promise<void>;
}

export type ProductStore = ProductState & ProductActions;
