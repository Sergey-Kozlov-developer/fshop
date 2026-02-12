import PromoCarousel from "@/pages/shop/ui/blocks/PromoCarousel";
import SectionDivider from "@/shared/ui/section-divider/section-divider";
import SavingZone from "@/widgets/saving-zone/ui/saving-zone";

const PromoCollection = () => {
    return (
        <div className="mb-24 ">
            <SectionDivider title="New Arrival" />
            {/* слайдер shadcn */}
            <PromoCarousel />
            <SectionDivider
                className="max-sm:mt-14 sm:mt-24 max-sm:mb-14 sm:mb-24"
                title="Big Saving Zone"
            />
            <SavingZone />
        </div>
    );
};

export default PromoCollection;
