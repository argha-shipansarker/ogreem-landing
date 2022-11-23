import React from "react";
// import EmployeesBenefit from "../../components/employees-benefit";
// import EmployersBenefit from "../../components/employers-benefit";
import EarnedWageHero from "./partials/EarnedWageHero";
import Partners from "./partials/Partners";
import RequestDemo from "./partials/RequestDemo";
import NumericMetrics from "./partials/NumericMetrics";

const Home = () => {
    return (
        <>
            <EarnedWageHero />
            {/* <Benefits /> */}
            <NumericMetrics />
            <Partners />
            <RequestDemo />
            {/* <EmployeesBenefit />
      <EmployersBenefit /> */}
        </>
    );
};

export default Home;
