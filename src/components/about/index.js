import React from "react";
import Home1 from "./Home1.png";
import Home2 from "./Home2.png";

const AboutOgreem = () => {
    return (
        <div className="px-9 py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-200">
            <div className="lg:col-span-4 relative">
                <img src={Home2} className="mt-24 lg:mt-12 z-50 relative" alt="home" />
                <img
                    src={Home1}
                    className="absolute left-0 lg:left-39.25 top-0"
                    alt="home"
                />
            </div>
            <div className="lg:col-span-8">
                <div className="lg:pl-12 2xl:pl-0">
                    <p className="text-4.5xl font-semibold">About Ogreem</p>
                    <p className="text-xl leading-6 font-light text-textMuted mt-8">
                        Ogreem is the country’s leading Earned Wages Access provider, being a fully local startup offering financial wellness platform. We at Ogreem, strongly believe that financial freedom and wellness are critical to leading healthy lives.
                    </p>
                    <p className="text-xl leading-6 font-light text-textMuted mt-6">
                        With this in mind, in 2022 we launched Ogreem—a platform that ensures salary on-demand for employees across industries against their earned ones, to address any of their immediate financial needs. This in turn enables the employers in boosting the productivity of their employees, by ensuring a flexible access to their earned wages. Our endgame is to offer a complete and easily accessible financial solution to all the low income group employees, making their financial wellness a reality; at the same time, helping shape a world where living from pay cheque to pay cheque is extinct. We believe that if one works for 365 days a year, why would they only earn their salary 12 times only; it should be as and when earned.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutOgreem;
