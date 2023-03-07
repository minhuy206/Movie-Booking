import React from "react";
import Slider from "react-slick";
import "./Carousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "../button/Button";

export const Carousel = ({ sliders, ...props }) => {
  function NextArrow(props) {
    const { className, onClick, children } = props;
    return (
      <div className={className} onClick={onClick}>
        {children}
      </div>
    );
  }

  function PrevArrow(props) {
    const { className, onClick, children } = props;
    return (
      <div className={className} onClick={onClick}>
        {children}
      </div>
    );
  }

  const settings = {
    arrow: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    nextArrow: (
      <NextArrow
        children={
          <FontAwesomeIcon icon={faChevronRight} className="text-2xl" />
        }
      />
    ),
    prevArrow: (
      <PrevArrow
        children={<FontAwesomeIcon icon={faChevronLeft} className="text-2xl" />}
      />
    ),
  };
  const renderSlider = () => {
    return sliders.map((slider, index) => {
      const sliderStyle = {
        height: "85vh",
        backgroundImage: `url(${slider.hinhAnh})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        position: "relative",
      };
      return (
        <div key={index}>
          <div style={sliderStyle}>
            <img
              className="w-full h-full opacity-0"
              src={slider.hinhAnh}
              alt={slider.hinhAnh}
            />
            <div className="desc absolute left-10 w-1/3 hidden md:block">
              <p className="text-primary text-xl">
                Fantasy | 1 hour 50 minutes | English
              </p>
              <p className="text-primary text-sm mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur temporibus enim labore accusamus excepturi optio in
                voluptatem, reprehenderit adipisci laborum!
              </p>
            </div>
            <div className="carouselContent w-full absolute md:hidden flex flex-col items-center justify-around left-1/2 -translate-x-1/2 ">
              <div className="left-1/2 md:hidden block text-center desc">
                <p className="text-primary text-lg">
                  Fantasy | 1 hour 50 minutes | English
                </p>
              </div>
              <Button
                size={"large"}
                tailwindClasses={["carouselBtn"]}
                label={<span className="text-sm">BOOK NOW</span>}
              />
              <div className="moreInfoText hover:opacity-75 md:hidden flex z-50 transition ease-in-out duration-300">
                <div className="flex ">
                  <div className="mr-2 infoIcon flex items-center justify-center rounded-full">
                    <span className="text-primary">i</span>
                  </div>
                  <p className="text-primary">More info</p>
                </div>
              </div>
            </div>
            <button className="carouselBtn text-sm text-white font-Viga md:block hidden relative z-10">
              BOOK NOW
            </button>
          </div>
        </div>
      );
    });
  };
  return (
    <section className="carousel">
      <div className="relative">
        <Slider {...settings}>{renderSlider()}</Slider>
      </div>
    </section>
  );
};
