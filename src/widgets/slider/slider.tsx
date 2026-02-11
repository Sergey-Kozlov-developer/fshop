import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import sliderOne from "@/shared/assets/image/slider/slider-2.png";
import sliderTwo from "@/shared/assets/image/slider/slider-1.png";
import ButtonPrevIcon from "@/widgets/slider/ButtonPrevIcon";
import ButtonNextIcon from "@/widgets/slider/ButtonNextIcon";

const SwiperSlider = () => {
    return (
        <>
            <div className="relative w-full ">
                <Swiper
                    className="w-full "
                    navigation={{
                        nextEl: ".image-swiper-button-next",
                        prevEl: ".image-swiper-button-prev",
                        // disabledClass: "swiper-button-disabled",
                    }}
                    modules={[Navigation, Pagination]}
                    pagination={{
                        clickable: true,
                    }}
                    style={{
                        height: "70vh",
                    }}
                >
                    <SwiperSlide>
                        <img
                            className="object-cover w-full h-full"
                            src={sliderOne}
                            alt="Shop"
                        />
                        {/* Текст и кнопка */}
                        <div className="absolute inset-0 z-10 flex items-center">
                            <div className="container px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
                                <div className="max-w-full ml-0 md:max-w-lg md:ml-8 lg:ml-16 xl:ml-24">
                                    {/* Мобильная версия текста (центрированная) */}
                                    <div className="text-center md:text-left">
                                        {/* Категория */}
                                        <p className="mb-3 text-sm font-medium text-white sm:text-base md:text-lg lg:text-xl md:mb-4 lg:mb-6 opacity-90">
                                            T-shirt / Tops
                                        </p>

                                        {/* Заголовок */}
                                        <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl md:mb-6 lg:mb-8">
                                            <span className="block">
                                                Summer
                                            </span>
                                            <span className="block">
                                                Value Pack
                                            </span>
                                        </h2>

                                        {/* Описание */}
                                        <p className="max-w-xs mx-auto mb-6 text-sm text-white sm:text-base md:text-lg lg:text-xl md:mb-8 lg:mb-10 opacity-90 md:mx-0 md:max-w-md">
                                            cool / colorful / comfy
                                        </p>

                                        {/* Кнопка */}
                                        <div className="flex justify-center md:justify-start">
                                            <button className="px-6 py-3 text-sm font-semibold text-gray-800 transition-all duration-300 transform bg-white rounded-lg shadow-lg button-details hover:bg-gray-100 hover:text-gray-900 md:py-3 md:px-8 lg:py-4 lg:px-10 sm:text-base md:text-lg hover:scale-105 active:scale-95 hover:shadow-xl">
                                                Shop Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="object-cover w-full h-full"
                            src={sliderTwo}
                            alt="Shop"
                        />
                        {/* Текст и кнопка */}
                        <div className="absolute inset-0 z-10 flex items-center">
                            <div className="container px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
                                <div className="max-w-full ml-0 md:max-w-lg md:ml-8 lg:ml-16 xl:ml-24">
                                    {/* Мобильная версия текста (центрированная) */}
                                    <div className="text-center md:text-left">
                                        {/* Категория */}
                                        <p className="mb-3 text-sm font-medium text-white sm:text-base md:text-lg lg:text-xl md:mb-4 lg:mb-6 opacity-90">
                                            T-shirt / Tops
                                        </p>

                                        {/* Заголовок */}
                                        <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl md:mb-6 lg:mb-8">
                                            <span className="block">
                                                Summer
                                            </span>
                                            <span className="block">
                                                Value Pack
                                            </span>
                                        </h2>

                                        {/* Описание */}
                                        <p className="max-w-xs mx-auto mb-6 text-sm text-white sm:text-base md:text-lg lg:text-xl md:mb-8 lg:mb-10 opacity-90 md:mx-0 md:max-w-md">
                                            cool / colorful / comfy
                                        </p>

                                        {/* Кнопка */}
                                        <div className="flex justify-center md:justify-start">
                                            <button className="px-6 py-3 text-sm font-semibold text-gray-800 transition-all duration-300 transform bg-white rounded-lg shadow-lg button-details hover:bg-gray-100 hover:text-gray-900 md:py-3 md:px-8 lg:py-4 lg:px-10 sm:text-base md:text-lg hover:scale-105 active:scale-95 hover:shadow-xl">
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
                {/* Индикаторы пагинации  */}
                <div className="swiper-pagination">
                    <div className="swiper-pagination-bullet"></div>
                    <div className="swiper-pagination-bullet"></div>
                </div>
            </div>
        </>
    );
};
export default SwiperSlider;
