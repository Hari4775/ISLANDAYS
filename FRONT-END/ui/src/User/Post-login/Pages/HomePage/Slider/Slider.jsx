import React from "react";
import Slider from "react-slick";
import './Sllider.css'

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../../../../../Common/Cards/Card";
import { featers } from "../../../../../constants/index"

function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    cssEase: "linear"
  };

  return (
    <div className="slider-container w-11/12 mx-auto ">
      <h1 className=" slider-heading text-left  pt-10  ">All Packages includes</h1>
      <p className="slider-text text-left md:text-lg text-sm mb-5 "><span className="text-lg font-bold">without any additional costs </span> We provide these offers with our all packages</p>
      <Slider {...settings}>
        {featers.map((feature, index) => (
          <Card key={index} data={feature} />
        ))}
      </Slider>
    </div>
  );
}

export default AutoPlay;
