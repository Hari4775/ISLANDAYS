import React from "react";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../../../../../Common/Cards/Card";
import { featers } from "../../../../../constants/index"

function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    cssEase: "linear"
  };

  return (
    <div className="slider-container w-11/12 mx-auto ">
      <h1 className="text-left text-white pt-10 mb-10">Our Service Includes</h1>
      <Slider {...settings}>
        {featers.map((feature, index) => (
          <Card key={index} data={feature} />
        ))}
      </Slider>
    </div>
  );
}

export default AutoPlay;
