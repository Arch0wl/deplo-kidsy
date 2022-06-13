import React from "react";
import Button from "@mui/material/Button";
import "./hero.css";

export default function Hero() {
  const handleGetStarted = () => {
    document.getElementById("main").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <div className="textBlock">
        <div className="allText">Every child is an artist.</div>
        <div className="textCell">
          <p className="textHeader">Save kids' Art and enjoy them later </p>
          <button onClick={handleGetStarted} className="button">
            Get started
          </button>
          {/* <div className="mainimage"></div> */}
        </div>
      </div>
    </div>
  );
}
