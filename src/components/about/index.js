import React from "react";
import Home1 from "./Home1.png";
import Home2 from "./Home2.png";

const AboutOgreem = () => {
  return (
    <div className="px-9 py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
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
            Our mission is to provide a sustainable solution for all employees
            in breaking the cycle of debt caused by overdraft fees,
            high-interest credit or pay day loans and play a leading role in
            building financial wellness for lower- and middle-income workers in
            Asia.
          </p>
          <p className="text-xl leading-6 font-light text-textMuted mt-6">
            More than 80% of all asians are living from paycheck to paycheck. By
            eliminating the costly ‘waiting for pay’ penalties, we protect
            employees from having to rely on costly payday loans forcing them
            into debt traps between paychecks. Managing cashflow is the most
            pressing everyday issue for low- and middle income workers as they
            manage to cover basic needs throughout the month. Enabling fair
            financial services, employees reach financial resilience and
            wellness with us. Unexpected expenses between paychecks are causing
            substantial financial stress and vulnerability among employees. We
            aim to meaningfully combat the systemic burden and increase
            employees’ health and happiness.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutOgreem;
