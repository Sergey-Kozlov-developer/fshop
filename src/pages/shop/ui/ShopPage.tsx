import PromoCards from "@/widgets/promo-cards/promoCards";
import SwiperSlider from "@/widgets/slider/slider";

const ShopPage = () => {
    return (
        <div className="w-full">
            <SwiperSlider />
            <div className="container mx-auto mb-24 max-sm:mt-14 sm:mt-20 lg:mt-32">
                <PromoCards />
            </div>
        </div>
    );
};

export default ShopPage;
