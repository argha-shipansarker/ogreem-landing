import React from "react";

const data = [
    ["200+", "loading partner enterprises"],
    ["1 M+", "employee base"],
    ["400x", "growth in transacting users"],
    ["36%", "improvement in retention"],
];

const NumericMetrics = () => {
    return (
        <div className="bg-gray-200">
            <div className="min-h-screen mx-auto max-w-[1296px] flex flex-col md:flex-row bg-gray-200">
                {data.map((d, key) => (
                    <div key={key} className="basis-1 sm:basis-1/2 md:basis-1/4 m-auto">
                        <h1 className="text-4xl text-center">{d[0]}</h1>
                        <p className="text-center">{d[1]}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NumericMetrics;
