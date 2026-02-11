import PromoCards from "@/widgets/promo-cards/promoCards";
import SwiperSlider from "@/widgets/slider/slider";

const ShopPage = () => {
    return (
        <div className="w-full">
            <SwiperSlider />
            <div className="container mx-auto mt-32 mb-24">
                <PromoCards />
            </div>
        </div>
    );
};

export default ShopPage;
