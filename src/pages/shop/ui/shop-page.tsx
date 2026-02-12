import NewArrivalCarousel from "@/pages/shop/ui/blocks/promo-carousel";
import SectionDivider from "@/shared/ui/section-divider/section-divider";
import PromoCards from "@/widgets/promo-cards/ui/promo-cards";
import SavingZone from "@/widgets/saving-zone/ui/saving-zone";
import { SwiperSlider } from "@/widgets/slider";

const ShopPage = () => {
    return (
        <div className="w-full">
            <SwiperSlider />
            <div className="container mx-auto">
                <div className="mb-24  max-sm:mt-14 sm:mt-20 lg:mt-32">
                    <PromoCards />
                </div>
                {/* Блок новой коллекцией, категорией женщин и мужчин и тд */}
                <div className="mb-24 ">
                    <SectionDivider title="New Arrival" />
                    {/* слайдер shadcn */}
                    <NewArrivalCarousel />
                    <SectionDivider
                        className="max-sm:mt-14 sm:mt-24 max-sm:mb-14 sm:mb-24"
                        title="Big Saving Zone"
                    />
                    <SavingZone />
                </div>
            </div>
        </div>
    );
};

export default ShopPage;
