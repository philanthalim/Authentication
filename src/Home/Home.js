import React from "react";
import fruit from "./green.jpg";
import green2 from "./green2.jpg";
import green3 from "./green3.jpg";
import "./Home.css";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <img className="section-one" alt="fruit" src={green2}></img>
      <div className="section-two">
        <img className="img" alt="green2" src={fruit}></img>
        <img className="img" alt="green3" src={green3}></img>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
