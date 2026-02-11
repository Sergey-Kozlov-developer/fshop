import PromoCarousel from "@/pages/shop/ui/blocks/PromoCarousel";

const PromoCollection = () => {
    return (
        <div className="mb-24">
            <div className="flex items-center gap-5">
                <div className="w-1.5 h-7 bg-purple-600 rounded-[10px]" />
                <p className="text-4xl font-semibold text-neutral-700">
                    New Arrival
                </p>
            </div>
            {/* слайдер shadcn */}
            <PromoCarousel />
        </div>
    );
};

export default PromoCollection;
