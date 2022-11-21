import React from "react";
import Salary from "./salary.png";
import Setup from "./setup.png";
import Speed from "./speed.png";
import Hidden from "./hidden.png";
import Debt from "./nodebt.png";
import Loved from "./loved.png";
import Handshake from "./handshake.png";
import Nocost from "./nocost.png";

const employersBenefitData = [
  {
    bgColor: "#A5BEE2",
    heading: "Improve Productivity",
    description:
      "Improve employee productivity by eliminating financial stress",
    icon: Salary,
  },
  {
    bgColor: "#80E4CC",
    heading: "Attract Talent",
    description:
      "Attract talent & reduce employee turnover via earned salary access",
    icon: Setup,
  },
  {
    bgColor: "#E9AFAF",
    heading: "Mini HRMS Solution",
    description: "Zero-cost and compatible with your HRMS",
    icon: Speed,
  },
  {
    bgColor: null,
    heading: "Positive Workplace",
    description: "Positive attitude with clients and colleagues both .",
    icon: Loved,
  },
  {
    bgColor: null,
    heading: "Loyalty to the Company",
    description: "Employees tend to stay where they are taken care of.",
    icon: Handshake,
  },
  {
    bgColor: null,
    heading: "Free of Cost",
    description: "No signup fee",
    icon: Nocost,
  },
];
const employeeBenefitData = [
  {
    bgColor: "#A5BEE2",
    heading: "Salary on the fly",
    description:
      "Improve employee productivity by eliminating financial stress",
    icon: Salary,
  },
  {
    bgColor: "#80E4CC",
    heading: "Easy To Set Up",
    description: "Three simple steps to set up Ogreem account",
    icon: Setup,
  },
  {
    bgColor: "#E9AFAF",
    heading: "Speedy Withdrawal",
    description: "Withdraw earned salary via MFS or Bank in hours",
    icon: Speed,
  },
  {
    bgColor: null,
    heading: "No hidden charges",
    description: "Only pay if you transact.",
    icon: Hidden,
  },
  {
    bgColor: null,
    heading: "Free from debt",
    description: "No more credit cards or loans.",
    icon: Debt,
  },
  {
    bgColor: null,
    heading: "Share with loved ones",
    description: "Send money to your loved ones before payday.",
    icon: Loved,
  },
];

const Benefits = () => {
  return (
    <div>
      <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl text-center">
        Why Ogreem?
      </h1>
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-start mx-auto">
          <h3 className="mb-8 text-lg  font-normal text-gray-700 lg:text-3xl underline underline-offset-8 decoration-3 decoration-secondary">
            For Employees
          </h3>
          {employeeBenefitData.map((benefit, index) => (
            <div
              className="flex flex-row justify-start content-center my-4"
              key={index}
            >
              <div
                className={`w-16 h-16 rounded-full flex justify-center items-center`}
                style={{ backgroundColor: benefit.bgColor }}
              >
                {/* {benefit.icon} */}
                <img src={benefit.icon} alt="benefit" />
              </div>
              <div className="block max-w-sm px-6">
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
        <div className="flex flex-col justify-start mx-auto">
          <h3 className="mb-8 text-lg font-normal text-gray-700 lg:text-3xl underline underline-offset-8 decoration-3 decoration-secondary">
            For Employers
          </h3>
          {employersBenefitData.map((benefit, index) => (
            <div
              className="flex flex-row justify-start content-center my-4"
              key={index}
            >
              <div
                className={`w-16 h-16 rounded-full flex justify-center items-center`}
                style={{ backgroundColor: benefit.bgColor }}
              >
                {/* {benefit.icon} */}
                <img src={benefit.icon} alt="benefit" />
              </div>
              <div className="block max-w-sm px-6">
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
      </div>
    </div>
  );
};

export default Benefits;
