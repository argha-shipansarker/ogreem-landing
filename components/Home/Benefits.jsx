import React from "react";
import benefitsData from "./assets/benefits-data";

const Benefits = () => {
    return (
        <div className="w-full bg-primaryMuted">
            <div className="max-w-maximum my-20 mx-auto">
                <h1 className="mb-10 text-5xl font-semibold text-gray-900 text-center">
                    Why <img
                        src="/images/logo.svg"
                        className="inline h-9 sm:h-12 ml-4"
                        alt="ogreem Logo"
                    />?
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
                    {benefitsData.map((bd) => (
                        <div
                            key={bd.title}
                            className="flex flex-col justify-center md:justify-start mx-auto mt-10 md:mt-0"
                        >
                            <h3 className="mb-8 text-center md:text-start md:ml-[88px] text-2xl lg:text-3xl font-normal text-gray-700 underline underline-offset-8 decoration-4 decoration-secondary">
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
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-center md:text-start text-gray-900">
                                            {benefit.heading}
                                        </h5>
                                        <p className="font-normal text-gray-700 text-center md:text-start">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Benefits;
