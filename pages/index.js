import AboutOgreem from "../components/Home/About";
import Benefits from "../components/Home/Benefits";
import EarnedWageHero from "../components/Home/EarnedWageHero";
import RequestDemo from "../components/Home/RequestDemo";
import HowToUse from "../components/Home/HowToUse";
import Banner from "../components/Home/Banner";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>Ogreem</title>
                <meta property="og:title" content="Ogreem" key="title" />
            </Head>
            <Banner />
            <AboutOgreem />
            <EarnedWageHero />
            <Benefits />
            {/* <NumericMetrics /> */}
            {/* <Partners /> */}
            <HowToUse />
            <RequestDemo />
            {/* <EmployeesBenefit />
      <EmployersBenefit /> */}
        </>
    );
}
