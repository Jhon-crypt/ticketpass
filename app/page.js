import BootstrapClientJs from "./components/bootstrapJsClient/bootstrapClient"
import Link from "next/link";
import Header from "./components/header/header";
import LandingPageHero from "./components/hero/landingPageHero";
import WhatsPoppingSection from "./components/section/whatsPoppingSection";
import './components/styles/landing-page-style/style.css'
import Footer from "./components/footer/footer";

export default function LandingPage() {

  const Section = {
    background: "#6A3CB5",
    height: "37rem",
    display: "flex",
    flexDirection: "column", // Enclose "column" in quotes
    alignItems: "bottom",
  };




  return (
    <>

      <div>
        <section style={Section}>
          <Header />

          <LandingPageHero />

          <WhatsPoppingSection />

          <Footer />

        </section>
      </div>

    </>
  )
}
