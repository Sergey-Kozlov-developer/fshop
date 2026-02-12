import { Button } from "@/shared/ui/shadcn/button";
import type { CardSavingZoneProps } from "@/widgets/saving-zone/model/types";

const CardSavingZone = ({ item }: CardSavingZoneProps) => {
    return (
        <div className="relative w-full h-full group">
            <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden rounded-xl">
                {/* Изображение */}
                <img
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    src={item.img}
                    alt={item.title}
                />
                {/* Контент с текстом */}
                <div className="absolute inset-0 flex flex-col items-end justify-between p-4 sm:p-5 md:p-6">
                    {/* Бейдж */}
                    {item.id === 2 && (
                        <div className="bg-neutral-700/90 backdrop-blur-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded">
                            <span className="text-white text-[10px] sm:text-xs font-bold font-['Causten']">
                                Limited Stock
                            </span>
                        </div>
                    )}
                    <div></div>
                    {/* Текст и кнопка */}
                    <div className="flex flex-col items-end text-right max-w-[90%] sm:max-w-[80%] md:max-w-[70%]">
                        <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold font-['Core_Sans_C'] leading-tight sm:leading-9 md:leading-10 tracking-wide mb-1 sm:mb-2">
                            {item.title}
                        </h3>
                        <p className="text-white text-xs sm:text-sm font-semibold font-['Causten'] mb-0.5 sm:mb-1">
                            {item.subTitle}
                        </p>
                        <p className="text-white text-sm sm:text-base md:text-lg font-bold font-['Causten'] mb-2 sm:mb-3 md:mb-4">
                            {item.sale}
                        </p>

                        {/* Кнопка */}
                        <div className="flex flex-col items-center gap-2 sm:gap-3">
                            {item.arrowDown}
                            <Button
                                variant="outline"
                                className="bg-transparent"
                            >
                                SHOP NOW
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardSavingZone;
