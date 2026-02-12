import { Card } from "@/shared/ui/shadcn/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/shared/ui/shadcn/carousel";

import joggerImg from "@/shared/assets/image/promo-collection/jogger.png";
import sleeveImg from "@/shared/assets/image/promo-collection/full-sleeve.png";
import tShortImg from "@/shared/assets/image/promo-collection/t-shirts.png";
import shirtImg from "@/shared/assets/image/promo-collection/shirts.png";
import flowersImg from "@/shared/assets/image/promo-collection/flowers.webp";
import girlStyleImg from "@/shared/assets/image/promo-collection/girl-style.jpg";
import swimmerImg from "@/shared/assets/image/promo-collection/swimmer.jpg";
import styleImg from "@/shared/assets/image/promo-collection/style.jpg";

const NewArrivalCarousel = () => {
    const itemsCard = [
        { id: 1, img: joggerImg, article: "Knitted Joggers" },
        { id: 2, img: sleeveImg, article: "Full Sleeve" },
        { id: 3, img: tShortImg, article: "Active T-Shirts" },
        { id: 4, img: shirtImg, article: "Urban Shirts" },
        { id: 5, img: flowersImg, article: "Exclusive design" },
        { id: 6, img: girlStyleImg, article: "Be stylish" },
        { id: 7, img: swimmerImg, article: "Going to the pool" },
        { id: 8, img: styleImg, article: "Be stylish" },
    ];

    return (
        <Carousel className="w-full max-sm:px-5 sm:px-0">
            <CarouselContent className="-ml-1">
                {itemsCard.map((item) => (
                    <CarouselItem
                        key={item.id}
                        className="pl-1 
                            basis-full        
                            sm:basis-1/2      
                            md:basis-1/3      
                            lg:basis-1/4      
                            xl:basis-1/4      
                            2xl:basis-1/4
                     "
                    >
                        <div className="p-1">
                            <Card className="overflow-hidden p-0">
                                <img
                                    src={item.img}
                                    alt="Event cover"
                                    className="w-full h-full object-cover aspect-square"
                                />
                            </Card>
                            <p className="mt-8 justify-start text-neutral-700 text-xl font-bold font-['Causten'] tracking-tight">
                                {item.article}
                            </p>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="max-sm:ml-14 sm:ml-auto" />
            <CarouselNext className="max-sm:mr-14 sm:mr-auto" />
        </Carousel>
    );
};

export default NewArrivalCarousel;
