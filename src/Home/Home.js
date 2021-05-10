import React from "react";
import skin1 from "./skin1.jpeg";
import "./Home.css";
import Footer from "../components/Footer";
import Slider from "react-slick";
import onne1 from "./onne1.jpeg";
import onne2 from "./onne2.jpeg";
import onne3 from "./onne3.jpeg";
import onne4 from "./onne4.jpeg";

const Home = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick, to } = props;
    return (
      <button
        type="button"
        onClick={onClick}
        className={`button button--text button--icon ${className}`}
      ></button>
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick, to } = props;
    return (
      <button
        type="button"
        onClick={onClick}
        className={`button button--text button--icon ${className}`}
      ></button>
    );
  }
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow to="next" />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <img className="section-one" alt="fruit" src={skin1}></img>
      <div className="section-two">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.5rem",
          }}
        >
          <h3>New Arrivals</h3>
        </div>

        <Slider {...settings}>
          <div>
            <img className="img" alt="green2" src={onne1}></img>
          </div>
          <div>
            <img className="img" alt="green2" src={onne2}></img>
          </div>
          <div>
            <img className="img" alt="green2" src={onne3}></img>
          </div>
          <div>
            <img className="img" alt="green2" src={onne4}></img>
          </div>
          <div>
            <img className="img" alt="green2" src={skin1}></img>
          </div>
        </Slider>
      </div>
      <div className="section-three">
        <div className='left'>
          <img className="last-img" alt="green2" src={skin1}></img>
        </div>
        <div className='right'>
          <p className='text'>
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
