import React from "react";
// import OrganizationThought from "./components/organization-thought";
// import Partners from "./components/partners";
// import UsersComment from "./components/users-comment";
import Footer from "./components/footer";
import AboutOgreem from "./components/about";
// import EmployersBenefit from "./components/employers-benefit";
// import EmployeesBenefit from "./components/employees-benefit";
// import OgreemOverview from "./components/ogreem-overview";
import Banner from "./components/banner";
import IntegrationProcess from "./components/integration-process";
import Navbar from "./components/layouts/Navigation/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      {/* <OgreemOverview /> */}
      <Home />
      <AboutOgreem />
      <IntegrationProcess />
      {/* <OrganizationThought /> */}
      {/* <Partners /> */}
      {/* <UsersComment /> */}
      <Footer />
    </div>
  );
}

export default App;
