import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppCard3 from "./AppCard3";
import AppCard1 from "./AppCard1";
import AppCard2 from "./AppCard2";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#82DE74" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#82DE74" }}
      onClick={onClick}
    />
  );
}
export default class MainWrapper3 extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <>
        <h2>Instructor Courses</h2>
        <div
          style={{
            padding: "40px",
            backgroundColor: "#F1FEF2",
            borderRadius: "16px",
          }}
        >
          <Slider {...settings}>
            <div>
              <AppCard1 />
            </div>
            <div>
              <AppCard2 />
            </div>
            <div>
              <AppCard3 />
            </div>
            <div>
              <AppCard1 />
            </div>
            <div>
              <AppCard2 />
            </div>
            <div>
              <AppCard3 />
            </div>
          </Slider>
        </div>
      </>
    );
  }
}
