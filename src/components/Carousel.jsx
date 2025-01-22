import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

const CarouselComponent = () => {
  const data = [
    {
      id: "1",
      imgSrc: "/food-banner-1.jpg",
    },
    {
      id: "2",
      imgSrc: "/food-option.png",
    },
    {
      id: "3",
      imgSrc: "/food-categories.png",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: true,
  };

  return (
    <div className="CarouselSlider">
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id}>
            <img src={item.imgSrc} alt={`slide-${item.id}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselComponent;
