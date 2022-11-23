import React from "react";

const RequestDemo = () => {
    return (
        <div className="min-h-screen mx-auto max-w-[1296px] flex flex-col md:flex-row">
            <div className="basis-1 md:basis-1/2 my-auto">
                <img
                    className="h-60 mx-auto"
                    src="https://img.icons8.com/external-nawicon-flat-nawicon/256/000000/external-computer-online-learning-nawicon-flat-nawicon.png"
                    alt="demo"
                />
            </div>
            <div className="basis-1 md:basis-1/2 my-auto">
                <h1 className="font-medium text-5xl my-3 ml-10 text-indigo-900">
                    Request a demo
                </h1>
                <p className="font-light text-xl my-3 ml-10">
                    Employers can run their payroll on demand to any bank account in the
                    country to pay their employees timely.
                </p>
                <button className="flex-none py-3 px-6 ml-10 border-2 border-secondary rounded-lg text-indigo-800">
                    Schedule a Call
                </button>
            </div>
        </div>
    );
};

export default RequestDemo;
