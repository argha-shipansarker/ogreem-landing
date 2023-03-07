import React from "react";
// import step1 from "./assets/1-signup.jpeg";
// import step2 from "./assets/2-pin.jpeg";
// import step3 from "./assets/3-ready.jpeg";
// import step4 from "./assets/4-earned.jpeg";
// import step5 from "./assets/5-withdraw.jpeg";
// import step6 from "./assets/6-status.jpeg";
import { Autoplay, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const integrationData = [
  {
    heading: "Identify yourselt",
    image: "/images/home/steps/1-signup.jpeg",
  },
  {
    heading: "Set your PIN",
    image: "/images/home/steps/2-pin.jpeg",
  },
  {
    heading: "Ready to go",
    image: "/images/home/steps/3-ready.jpeg",
  },
  {
    heading: "Your earned wage status",
    image: "/images/home/steps/4-earned.jpeg",
  },
  {
    heading: "Request for withdraw amount",
    image: "/images/home/steps/5-withdraw.jpeg",
  },
  {
    heading: "Check the request status",
    image: "/images/home/steps/6-status.jpeg",
  },
];

const HowToUse = () => {
  return (
    <div className="bg-organizationThoughtBG py-16 px-9 ">
      <div className="max-w-maximum mx-auto">
        <p className="text-5xl font-semibold text-center">How it works?</p>
        {/* <p className="lg:w-185 mt-2 mx-auto text-xl font-light text-center text-textMuted">
                Up and running in no time – with no change to processes, cash flow or
                costs.
            </p> */}

        <Swiper
          modules={[Autoplay, Keyboard]}
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
          }}
          speed={1000}
          className="mt-10 lg:mt-18 h-full"
        >
          {integrationData.map((benefit, index) => (
            <SwiperSlide key={index}>
              <div className={`grid justify-items-center content-between `}>
                <img
                  className="h-[560px] mx-auto border-4 mt-4"
                  src={benefit.image}
                  alt={benefit.heading}
                />

                <p className="mt-4 text-2xl font-medium whitespace-nowrap">
                  {benefit.heading}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 mt-16">
                {integrationData.map((benefit, index) => (
                    <div
                        className={`flex justify-center ${index === 2 || index === 5 ? "" : "lg:border-r-2"
                            }`}
                        key={index}
                    >
                        <div className="flex flex-col items-center" style={{ width: 270 }}>
                            <img
                                className="max-h-100 mx-auto border border-4 mt-4"
                                src={benefit.image}
                                alt={benefit.heading}
                            />

                            <p className="mt-4 text-2xl leading-8 font-medium ">
                                {benefit.heading}
                            </p>

                        </div>
                    </div>
                ))}
            </div> */}
      </div>
    </div>
  );
};

export default HowToUse;
