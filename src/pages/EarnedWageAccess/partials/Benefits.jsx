import React from "react";
import benefitsData from "./assets/benefits-data";

const Benefits = () => {
  return (
    <>
      <div className="min-h-screen">
        <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl text-center">
          Why Ogreem?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {benefitsData.map((bd) => (
            <div
              key={bd.title}
              className="flex flex-col justify-center md:justify-start mx-auto"
            >
              <h3 className="mb-8 text-center md:text-start text-2xl lg:text-3xl font-normal text-gray-700 underline underline-offset-8 decoration-4 decoration-secondary">
                {bd.title}
              </h3>
              {bd.data.map((benefit, index) => (
                <div
                  className="flex flex-col md:flex-row justify-center lg:justify-start items-center mt-4"
                  key={index}
                >
                  <div
                    className="w-16 h-16 rounded-full flex justify-center items-center"
                    style={{ backgroundColor: benefit.bgColor }}
                  >
                    <img src={benefit.icon} alt="benefit" />
                  </div>
                  <div className="block max-w-sm px-6 mt-4 md:mt-0 basis-4/5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                      {benefit.heading}
                    </h5>
                    <p className="font-normal text-gray-700">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
    );
};

export default Benefits;
