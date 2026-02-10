// import "swiper/css";
// import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import sliderOne from "@/shared/assets/image/slider/slider-2.png";
import ButtonPrevIcon from "@/widgets/slider/ButtonPrevIcon";
import ButtonNextIcon from "@/widgets/slider/ButtonNextIcon";

const SwiperSlider = () => {
    return (
        <>
            <div className=" relative w-full">
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
                        <div className="absolute inset-0 flex items-center z-10">
                            <div className="container px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
                                <div className="max-w-full md:max-w-lg ml-0 md:ml-8 lg:ml-16 xl:ml-24">
                                    {/* Мобильная версия текста (центрированная) */}
                                    <div className="text-center md:text-left">
                                        {/* Категория */}
                                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-3 md:mb-4 lg:mb-6 opacity-90 font-medium">
                                            T-shirt / Tops
                                        </p>

                                        {/* Заголовок */}
                                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-4 md:mb-6 lg:mb-8">
                                            <span className="block">
                                                Summer
                                            </span>
                                            <span className="block">
                                                Value Pack
                                            </span>
                                        </h2>

                                        {/* Описание */}
                                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-6 md:mb-8 lg:mb-10 opacity-90 max-w-xs mx-auto md:mx-0 md:max-w-md">
                                            cool / colorful / comfy
                                        </p>

                                        {/* Кнопка */}
                                        <div className="flex justify-center md:justify-start">
                                            <button className="button-details bg-white hover:bg-gray-100 text-gray-800 hover:text-gray-900 font-semibold py-3 px-6 md:py-3 md:px-8 lg:py-4 lg:px-10 rounded-lg text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
                                                Shop Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                {/* кастомные стрелки для swiper */}
                <div className="image-swiper-button-next">
                    <ButtonNextIcon />
                </div>

                <div className="image-swiper-button-prev">
                    <ButtonPrevIcon />
                </div>
            </div>

            {/* Мобильная версия (альтернатива слайдеру) */}
            {/* <div className="block md:hidden w-full bg-gray-100 h-48 flex items-center justify-center">
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
            </div> */}
        </>
    );
};
export default SwiperSlider;
