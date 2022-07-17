import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.css";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavbarComp from "../components/NavbarComp";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavbarComp />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
