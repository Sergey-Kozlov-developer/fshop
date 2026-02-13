import { Button } from "@/shared/ui/shadcn/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle,
} from "@/shared/ui/shadcn/card";
import type { CardSavingZoneProps } from "@/widgets/saving-zone/model/types";

const CardSavingZone = ({ item }: CardSavingZoneProps) => {
    return (
        <Card className="relative w-full h-full group py-0">
            <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden rounded-xl">
                <img
                    src={item.img}
                    alt="Event cover"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col items-end justify-between p-4 sm:p-5 md:p-6">
                    {item.id === 2 && (
                        <Button className="rounded bg-neutral-700">
                            Limited Stock
                        </Button>
                    )}
                    <div></div>
                    <div className="flex flex-col items-end text-right max-w-[90%] sm:max-w-[80%] md:max-w-[70%]">
                        <CardTitle>
                            <p className="text-white text-xl sm:text-2xl md:text-3xl font-semibold font-['Core_Sans_C'] leading-tight sm:leading-9 md:leading-10 tracking-wide mb-1 sm:mb-2">
                                {item.title}
                            </p>
                        </CardTitle>
                        <CardDescription>
                            <p className=" text-white text-xs sm:text-sm font-semibold font-['Causten'] mb-0.5 sm:mb-1">
                                {item.subTitle}
                            </p>
                        </CardDescription>

                        <CardContent>
                            <p className="text-white text-sm sm:text-base md:text-lg font-bold font-['Causten'] mb-2 sm:mb-3 md:mb-4">
                                {item.sale}
                            </p>
                        </CardContent>
                        <CardFooter className="flex-col">
                            {item.arrowDown}
                            <Button
                                variant="outline"
                                className="bg-transparent mt-7"
                            >
                                SHOP NOW
                            </Button>
                        </CardFooter>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default CardSavingZone;
