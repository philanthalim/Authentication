import React from "react";
import "./Home.css";
import Footer from "../components/Footer";
import black3 from "./black3.png";
import black2 from "./black2.jpeg";

const Home = () => {
  return (
    <div>
      <img src={black3} alt="" className="section-one"></img>
      <div className="section-two">
        <div className="header-container">
          <h3>New Arrivals</h3>
        </div>
        <div className="outer-sub-container">
          <div className="inner-sub-container">
            <img className="img" alt="black2" src={black2}></img>
            <div className="text-container">
              <h3>Rock On Music Festival</h3>
              <p style={{ color: "white" }}>Singapore</p>
            </div>
          </div>
          <div className="inner-sub-container">
            <img className="img" alt="black2" src={black2}></img>
            <div className="text-container">
              <h3>Rock On Music Festival</h3>
              <p style={{ color: "white" }}>Dubai</p>
            </div>
          </div>
          <div className="inner-sub-container">
            <img className="img" alt="black2" src={black2}></img>
            <div className="text-container">
              <h3>Rock On Music Festival</h3>
              <p style={{ color: "white" }}>Japan</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-three">
        <div className="left">
          <img className="last-img" alt="green2" src={black2}></img>
        </div>
        <div className="right">
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
