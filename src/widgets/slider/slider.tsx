import "swiper/css";
// import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import sliderOne from "@/shared/assets/image/slider/slider-2.png";
import ButtonPrevIcon from "@/widgets/slider/ButtonPrevIcon";
import ButtonNextIcon from "@/widgets/slider/ButtonNextIcon";

const SwiperSlider = () => {
    return (
        <>
            <div className="hidden md:block relative w-full">
                <Swiper
                    className="h-64 md:h-80 lg:h-96 xl:h-190 w-full"
                    navigation={{
                        nextEl: ".image-swiper-button-next",
                        prevEl: ".image-swiper-button-prev",
                        // disabledClass: "swiper-button-disabled",
                    }}
                    modules={[Navigation]}
                >
                    <SwiperSlide className="!w-full">
                        <img
                            className="w-full h-full object-cover"
                            src={sliderOne}
                            alt="Shop"
                        />
                        {/* Текст и кнопка */}
                        <div className="absolute inset-0 flex items-center z-10  ">
                            <div className="container  px-10">
                                <div className="max-w-lg ml-8 lg:ml-16 xl:ml-24">
                                    <p className="text-base md:text-lg lg:text-xl text-white mb-4 md:mb-6 opacity-90">
                                        T-shirt / Tops
                                    </p>
                                    <h2 className="text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-bold leading-[93.62px] text-white mb-3 md:mb-10">
                                        Summer <br />
                                        Value Pack
                                    </h2>
                                    <p className="text-base md:text-lg lg:text-xl text-white mb-4 md:mb-10 opacity-90">
                                        cool / colorful / comfy
                                    </p>
                                    <button className="button-details">
                                        Shop Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                {/* кастомные стрелки для swiper */}
                <div className="image-swiper-button-next ">
                    <ButtonNextIcon />
                </div>

                <div className="image-swiper-button-prev">
                    <ButtonPrevIcon />
                </div>
            </div>

            {/* Мобильная версия (альтернатива слайдеру) */}
            <div className="block md:hidden w-full bg-gray-100 h-48 flex items-center justify-center">
                <div className="text-center px-4">
                    <h3 className="text-lg font-semibold mb-2">
                        Мобильная версия
                    </h3>
                    <p className="text-gray-600 mb-4">
                        Здесь может быть баннер или другой контент
                    </p>
                    <button className="bg-blue-600 text-white py-2 px-6 rounded">
                        Кнопка
                    </button>
                </div>
            </div>
        </>
    );
};
export default SwiperSlider;
