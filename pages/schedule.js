import Head from "next/head";

export default function Schedule() {
    return (
        <>
            <Head>
                <title>Ogreem | Request a demo</title>
            </Head>
            <div className="container p-6 mx-auto">
                {/* <InlineWidget url="https://calendly.com/ogreem/30min" /> */}
                <iframe
                    title="calendly"
                    src="https://calendly.com/ogreem/30min"
                    width="100%"
                    height="950"
                    scrolling="no"
                    frameborder="0"
                ></iframe>
            </div>
        </>
    );
}
