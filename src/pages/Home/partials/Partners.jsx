import React from "react";
import partnerCategory from "./assets/partner-data";

const Partners = () => {
    return (
        <div className="w-full bg-slate-200">
            <div className="min-h-screen mx-auto max-w-[1296px] flex">
                <div className="my-auto">
                    <h1 className="mb-8 text-xl text-gray-900 md:text-5xl lg:text-6xl text-center">
                        300+ Companies Financially Empowered, Are You?
                    </h1>
                    <div className="grid md:grid-cols-6 gap-4">
                        {partnerCategory.map((pc) => (
                            <div className="basis-1/6 flex flex-col" key={pc.type}>
                                <p className="text-base text-center">{pc.type}</p>
                                {pc.logos.map((pcl, id) => (
                                    <div key={id} className="p-8">
                                        <img
                                            key={pcl}
                                            className="h-[40px] object-contain m-auto"
                                            src={`https://img.logoipsum.com/${pcl}.svg`}
                                            alt="partners"
                                        />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;
