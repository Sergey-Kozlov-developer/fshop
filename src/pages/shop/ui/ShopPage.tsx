import PromoCollection from "@/pages/shop/ui/blocks/PromoCollection";
import PromoCards from "@/widgets/promo-cards/ui/promoCards";
import SwiperSlider from "@/widgets/slider/ui/slider";

const ShopPage = () => {
    return (
        <div className="w-full">
            <SwiperSlider />
            <div className="container mx-auto">
                <div className="mb-24  max-sm:mt-14 sm:mt-20 lg:mt-32">
                    <PromoCards />
                </div>
                <PromoCollection />
            </div>
        </div>
    );
};

export default ShopPage;
