import { ProductsCatalog } from "@/2_widgets/products-catalog";
import { ProductFilteringSettings } from "@/2_widgets/product-filtering-settings";

export const CombosPage = () => {
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-[1fr_4fr]">
                <ProductFilteringSettings />
                <ProductsCatalog />
            </div>
        </div>
    );
};
