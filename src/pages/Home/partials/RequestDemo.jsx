import React from "react";
import { Link } from "react-router-dom";
import demo from './assets/demo.svg'
const RequestDemo = () => {
    return (
        <div className="min-h-[500px] mx-auto max-w-[1296px] flex flex-col md:flex-row">
            <div className="basis-1 md:basis-1/2 my-auto">
                <img
                    className="max-h-100 mx-auto"
                    src={demo}
                    alt="demo"
                />
            </div>
            <div className="basis-1 md:basis-1/2 my-auto">
                <h1 className="font-semibold text-5xl my-3 ml-10 text-indigo-900">
                    Request a demo
                </h1>
                <p className="font-light text-xl my-3 ml-10">
                    Employers can run their payroll on demand to any bank account in the
                    country to pay their employees timely.
                </p>
                <Link to="schedule-meeting">
                    <button className="flex-none py-3 px-6 ml-10 border-2 border-secondary rounded-lg text-indigo-800">
                        Schedule a Call
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default RequestDemo;
