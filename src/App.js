import React from "react";
import OrganizationThought from "./components/organization-thought";
import Partners from "./components/partners";
import UsersComment from "./components/users-comment";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <OrganizationThought />
      <Partners />
      <UsersComment />
      <Footer />
    </div>
  );
}

export default App;
