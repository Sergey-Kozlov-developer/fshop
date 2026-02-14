export interface IProduct {
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
export interface IProductState {
    products: IProduct[];
    isLoading: boolean;
    error: string | null;
}
export interface IProductActions {
    fetchProducts: () => Promise<void>;
}

export type ProductStore = IProductState & IProductActions;
