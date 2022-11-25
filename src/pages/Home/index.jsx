import React from "react";
// import EmployeesBenefit from "../../components/employees-benefit";
// import EmployersBenefit from "../../components/employers-benefit";
import EarnedWageHero from "./partials/EarnedWageHero";
// import Partners from "./partials/Partners";
import RequestDemo from "./partials/RequestDemo";
// import NumericMetrics from "./partials/NumericMetrics";
import AboutOgreem from "../../components/about";
import Benefits from "../EarnedWageAccess/partials/Benefits";
import IntegrationProcess from "../HowToUse/partials/IntegrationProcess";

const Home = () => {
    return (
        <>
            <AboutOgreem />
            <EarnedWageHero />
            <Benefits />
            {/* <NumericMetrics /> */}
            {/* <Partners /> */}
            <IntegrationProcess />
            <RequestDemo />
            {/* <EmployeesBenefit />
      <EmployersBenefit /> */}
        </>
    );
};

export default Home;
