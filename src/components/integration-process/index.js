import React from "react";

const integrationData = [
  {
    heading: "Identify",
    description:
      "We start with identifying your specific needs so you get the most benefit",
  },
  {
    heading: "Connect",
    description:
      "We work closely with your HR-department to help onboard you to our platform",
  },
  {
    heading: "Launch",
    description:
      "We tailor the communication plan for you and your employees ensures a successful launch",
  },
];

const IntegrationProcess = () => {
  return (
    <div className="bg-organizationThoughtBG py-16 px-9 ">
      <p className="text-4.5xl font-semibold text-center">
        Seamless integration
      </p>
      <p className="lg:w-185 mt-2 mx-auto text-xl font-light text-center text-textMuted">
        Up and running in no time – with no change to processes, cash flow or
        costs.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 mt-16">
        {integrationData.map((benefit, index) => (
          <div
            className={`flex justify-center ${
              index === 2 || index === 5 ? "" : "lg:border-r-2"
            }`}
            key={index}
          >
            <div className="flex flex-col items-center" style={{ width: 270 }}>
              <p className="mt-4 text-2xl leading-8 font-medium">
                {benefit.heading}
              </p>
              <p className="font-light text-textMuted mt-2 text-center">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntegrationProcess;
