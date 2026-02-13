import { FilteredProducts } from "@/widgets/filtered-products";
import { ProductFilteringSettings } from "@/widgets/product-filtering-settings";

export const CombosPage = () => {
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-[1fr_4fr]">
                <ProductFilteringSettings />
                <FilteredProducts />
            </div>
        </div>
    );
};
