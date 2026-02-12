import promoOne from "@/shared/assets/image/promo-card/promo-1.png";
import promoTwo from "@/shared/assets/image/promo-card/promo-2.png";

const PromoCards = () => {
    const promoCard = [
        {
            id: 1,
            img: promoOne,
            article: "Low Price",
            title: "High Coziness",
            promoPrice: "UPTO 50% OFF",
            linkItem: "Explore Items",
        },
        {
            id: 2,
            img: promoTwo,
            article: "Beyoung Presents",
            title: "Breezy Summer Style",
            promoPrice: "UPTO 50% OFF",
            linkItem: "Explore Items",
        },
    ];

    return (
        <div className="grid justify-between md:grid-cols-2 sm:grid-cols-1 gap-x-7 sm:gap-y-7 max-sm:gap-y-7">
            {promoCard.map((item) => (
                <div key={item.id} className="relative max-sm:mx-5 ">
                    <img
                        className="rounded-xl shadow-[2px_2px_10px_2px_rgba(0,0,0,0.40)]"
                        src={item.img}
                        alt="Promo 1"
                    />
                    <div className="absolute justify-start max-sm:top-8 sm:top-16 md:top-6 lg:top-16 xl:top-32 left-7 ">
                        <p className="max-sm:mb-2.5 mb-6 text-white text-lg font-extrabold font-['Montserrat'] leading-8 tracking-tight">
                            {item.article}
                        </p>
                        <p className="mb-2 text-white text-4xl font-extrabold font-['Core_Sans_C'] max-sm:text-2xl md:text-4xl leading-10">
                            {item.title}
                        </p>
                        <p className="max-sm:mb-2 max-md:mb-2  text-white text-base font-medium font-['Core_Sans_C']  leading-6 tracking-tight">
                            {item.promoPrice}
                        </p>
                        <p className=" text-white text-xl font-extrabold font-['Core_Sans_C'] underline leading-8">
                            {item.linkItem}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PromoCards;
