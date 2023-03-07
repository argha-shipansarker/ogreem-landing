import React from "react";

const AboutOgreem = () => {
    return (
        <div className="px-4 lg:px-0 py-16 bg-slate-200">
            <div className="max-w-maximum mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-4 relative">
                    <img
                        src="/images/home/about.svg"
                        alt="about"
                        className="mt-24 lg:mt-12"
                    />
                </div>
                <div className="lg:col-span-8">
                    <div className="lg:pl-12 2xl:pl-0">
                        <div className="text-4xl sm:text-5xl font-semibold">About
                            <img
                                src="/images/logo.svg"
                                className="inline h-9 sm:h-12 ml-4"
                                alt="ogreem Logo"
                            />

                        </div>
                        <p className="text-xl leading-6 font-light text-textMuted mt-8">
                            Ogreem is the country’s leading Earned Wages Access provider, being
                            a fully local startup offering financial wellness platform. We at
                            Ogreem, strongly believe that financial freedom and wellness are
                            critical to leading healthy lives.
                        </p>
                        <p className="text-xl leading-6 font-light text-textMuted mt-6">
                            With this in mind, in 2022 we launched Ogreem—a platform that
                            ensures salary on-demand for employees across industries against
                            their earned ones, to address any of their immediate financial
                            needs. This in turn enables the employers in boosting the
                            productivity of their employees, by ensuring a flexible access to
                            their earned wages. Our endgame is to offer a complete and easily
                            accessible financial solution to all the low income group employees,
                            making their financial wellness a reality; at the same time, helping
                            shape a world where living from pay cheque to pay cheque is extinct.
                            We believe that if one works for 365 days a year, why would they
                            only earn their salary 12 times only; it should be as and when
                            earned.
                        </p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default AboutOgreem;
