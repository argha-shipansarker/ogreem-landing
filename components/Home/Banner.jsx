import React from "react";
// import { Pagination, Autoplay } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
    return (
        <div className="max-w-maximum mx-auto pt-7 px-4 lg:px-0 pb-8 lg:pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-[56px] mx-auto">
                <div className="lg:col-span-6 2xl:col-span-7">
                    <div>
                        <img
                            src="/images/logo.svg"
                            className="h-6 mr-3 mt-3 sm:h-8"
                            alt="ogreem Logo"
                        />                           {/* <p className="text-4.5xl leading-big font-light text-textMuted">
                                Ogreem
                            </p> */}
                        <p className="text-6xl lg:text-7xl leading-vvvBig font-bold text-primary mt-8">
                            Get Your Earned Salary Whenever, Wherever.
                        </p>
                        <p className="text-xl leading-6 font-light text-textMuted mt-4">
                            <span className="font-bold">Ogreem</span> is the maiden Bangladeshi Fintech Solution that financially empowers your employees, providing earned wage access.
                        </p>
                    </div>

                    {/* <button className='mt-14 h-14 w-63.5 flex justify-center items-center rounded-xl text-2xl font-bold leading-8 text-white bg-primary'>
                                Know More
                            </button> */}
                </div>

                <div className="lg:col-span-6 2xl:col-span-5">
                    <img src="images/banner.svg" alt="banner-img-1" />
                </div>
            </div>
            {/*  <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                speed={3000}

            >
                <SwiperSlide>

                </SwiperSlide>

                <SwiperSlide>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-6 2xl:col-span-7">
                            <div>
                                <p className="text-4.5xl leading-big font-light text-textMuted">
                                    Ogreem
                                </p>
                                <p className="text-6xl lg:text-7xl leading-vvvBig font-bold text-primary mt-8">
                                    Make your workforce future-ready!
                                </p>
                                <p className="text-xl leading-6 font-light text-textMuted mt-4">
                                    Allow your employees to access already earned but unpaid wages
                                    to reduce financial stress and boost their productivity,
                                    motivation and retention.
                                </p>
                            </div>
                        </div>
                        <div className="lg:col-span-6 2xl:col-span-5">
                            <img src="images/banner2.svg" alt="banner-img-1" className="w-full h-full" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper> */}
        </div>
    );
};

export default Banner;
