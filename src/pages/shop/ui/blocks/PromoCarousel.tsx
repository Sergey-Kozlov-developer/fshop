import { Card, CardContent } from "@/shared/ui/shadcn/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/shared/ui/shadcn/carousel";

const PromoCarousel = () => {
    return (
        <Carousel className="w-full ">
            <CarouselContent className="-ml-1">
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem
                        key={index}
                        className="pl-1 basis-1/2 lg:basis-1/3"
                    >
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex items-center justify-center p-6 aspect-square">
                                    <span className="text-2xl font-semibold">
                                        {index + 1}
                                    </span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
};

export default PromoCarousel;
