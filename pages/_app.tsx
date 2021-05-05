import "../src/styles/tailwind.css";
import Head from "next/head";
import { Navbar } from "../src/components/Navbar";
import { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <Component {...pageProps} />
        </>
    );
}
