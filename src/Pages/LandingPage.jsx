import React from "react";
import gsap from "gsap";
import "./LandingPage.css";
import Navbar from "../Components/Navbar";
import LandingPageSection1 from "../Sections/LandingPageSections/Section1";

const LandingPage = () => {
  return (
    <div className="main-landing-page">
      <div className="landing-page">
        <Navbar />
        <LandingPageSection1></LandingPageSection1>
      </div>
    </div>
  );
};

export default LandingPage;
