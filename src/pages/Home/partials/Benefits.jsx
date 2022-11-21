import React from "react";
import benefitsData from "./assets/benefits-data";

const Benefits = () => {
  return (
    <div className="px-6">
      <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl text-center">
        Why Ogreem?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {benefitsData.map((bd) => (
          <div key={bd.title} className="flex flex-col justify-start mx-auto">
            <h3 className="mb-8 text-lg font-normal text-gray-700 lg:text-3xl underline underline-offset-8 decoration-3 decoration-secondary">
              For Employees
            </h3>
            {bd.data.map((benefit, index) => (
              <div
                className="flex flex-col md:flex-row justify-center md:justify-start content-center mt-4 flex-wrap"
                key={index}
              >
                <div
                  className={`w-16 h-16 rounded-full flex justify-center items-center`}
                  style={{ backgroundColor: benefit.bgColor }}
                >
                  <img src={benefit.icon} alt="benefit" />
                </div>
                <div className="block max-w-sm px-6 mt-4 md:mt-0">
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
  );
};

export default Benefits;
