import React from "react";
import heroImg from "../assets/images/undraw_.svg";
import { Button } from "./Button";
import { Link } from "react-router-dom";
export const Landing = () => {
  const primaryHeading = "Build an Intelligent Enterprise";
  const secondaryHeading = "AI, Automation and Analytics to Inspire";
  const subtitle =
    "Revolutionary platform for forward-looking teams to deliver lasting business impact. AI-powered automation to deliver sophisticated insights at scale without expanding support teams.";
  return (
    <>
      <div className="main">
        <div className="main-content">
          <h1 className="heading-primary">{primaryHeading}</h1>
          <h3 className="heading-secondary">{secondaryHeading}</h3>
          <p className="subtitle">{subtitle}</p>

          <div className="cta-buttons">
            <Link to="/chart">
              <Button type="primary" label="View Chart" />
            </Link>
            <Link to="/dashboard">
              <Button type="primary" label="View Dashboard" />
            </Link>
          </div>
        </div>
        <div className="main-image">
          <img src={heroImg} alt="hero-img" />
        </div>
      </div>
    </>
  );
};
