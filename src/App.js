import React from "react";
import OrganizationThought from "./components/organization-thought";
import Partners from "./components/partners";
import UsersComment from "./components/users-comment";
import Footer from "./components/footer";
import AboutOgreem from "./components/about";
import EmployersBenefit from "./components/employers-benefit";
import EmployeesBenefit from "./components/employees-benefit";
import OgreemOverview from "./components/ogreem-overview";
import Banner from "./components/banner";

function App() {
  return (
    <div className="App">
      <Banner/>
      <OgreemOverview/>
      <EmployeesBenefit/>
      <EmployersBenefit/>
      <AboutOgreem/>
      <OrganizationThought />
      <Partners />
      <UsersComment />
      <Footer />
    </div>
  );
}

export default App;
