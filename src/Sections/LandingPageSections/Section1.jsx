import React, { useEffect } from "react";
import gsap from "gsap";
import "./Section1.css";

export default function LandingPageSection1() {
  const timeline = gsap.timeline({ paused: false });

  useEffect(() => {
    // Initialize SplitType
    // GSAP animation
    gsap.fromTo(
      ".landing-page-section-1 h1",
      {
        y: "1700px",
      },
      {
        y: "0px",
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.1,
      }
    );
  }, []);

  useEffect(() => {
    timeline.play();
  }, []);

  return (
    <div className="main-landing-page-section-1">
      <div className="landing-page-section-1">
        <h1>
          Welcome to BloggerDogger a Platform where everyone can bog freely!
        </h1>
      </div>
    </div>
  );
}
