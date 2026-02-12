import PromoCarousel from "@/pages/shop/ui/blocks/PromoCarousel";
import SectionDivider from "@/shared/ui/section-divider/section-divider";
import SavingZone from "@/widgets/saving-zone/saving-zone";

const PromoCollection = () => {
    return (
        <div className="mb-24 ">
            <SectionDivider title="New Arrival" />
            {/* слайдер shadcn */}
            <PromoCarousel />
            <SectionDivider className="mt-24" title="Big Saving Zone" />
            <SavingZone />
        </div>
    );
};

export default PromoCollection;
