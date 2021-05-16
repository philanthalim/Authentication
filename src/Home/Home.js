import React from "react";
import "./Home.css";
import Footer from "../components/Footer";
import korea from "./korea.jpeg";
import mel from "./melbourne.jpg";
import japan from "./japan.jpeg";
import black2 from "./black2.jpeg";
import black4 from "./b4.jpeg";

const Home = () => {
  return (
    <div>
      <img src={black4} alt="" className="section-one"></img>
      <div className="section-two">
        <div className="header-container">
          <h3>OUR ACCOMPLISHMENTS</h3>
        </div>
        <div className="outer-sub-container">
          <div className="inner-sub-container">
            <img className="img" alt="black2" src={korea}></img>
            <div className="text-container">
              <h3>SSD Conference</h3>
              <p style={{ color: "white" }}>South Korea</p>
            </div>
          </div>
          <div className="inner-sub-container">
            <img className="img" alt="black2" src={mel}></img>
            <div className="text-container">
              <h3>Global Leaders Talk</h3>
              <p style={{ color: "white" }}>Melbourne</p>
            </div>
          </div>
          <div className="inner-sub-container">
            <img className="img" alt="black2" src={japan}></img>
            <div className="text-container">
              <h3>Rock On Music Festival</h3>
              <p style={{ color: "white" }}>Japan</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-three">
        <div className="left">
          <div className="sub-left">
            <h2 className="text">Why choose us?</h2>
            <p>
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
              dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit
              amet
            </p>
          </div>
        </div>
        <div className="right">
          <img className="last-img" alt="green2" src={black2}></img>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
