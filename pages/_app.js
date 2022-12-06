import Navbar from "../components/layouts/Navigation/Navbar";
import Footer from "../components/layouts/Footer";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col">
      <Navbar />
      {/* {location.pathname.includes("schedule-meeting") ? "" : <Banner />} */}
      <Component {...pageProps} />)
      <Footer />
    </div>
  );
}

export default MyApp;
