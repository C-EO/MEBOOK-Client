import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../assets/style/home-hero-slider.sass";
import { Link } from "react-router-dom";

export default function HomeHeroSlider() {
  return (
    <div className="hero-slider">
      <div className="slider-btns-container">
        <div className="container">
          <button className="slider-btns-next">
            <i className="fal fa-arrow-left"></i>
          </button>
          <button className="slider-btns-prev">
            <i className="fal fa-arrow-right"></i>{" "}
          </button>
        </div>
      </div>
      <Swiper
        loop={true}
        modules={[Navigation, Pagination]}
        className="home-hero-swiper"
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: ".slider-btns-next",
          prevEl: ".slider-btns-prev",
        }}
        pagination={{ clickable: true, el: ".swiper-pagination" }}
      >
        <SwiperSlide className="hero-swiper-slide">
          <img
            className="slide-bg-img"
            src="https://wpbingosite.com/wordpress/bookio/wp-content/webp-express/webp-images/uploads/2021/08/slider1-1.jpg.webp"
            alt="bg"
          />
          <div className="overlay"></div>
          <div className="slide-content">
            <div className="container">
              <div className="row">
                <div className="text-center col-6 ms-5">
                  <div className="slide-info">
                    <h1>
                      bestselling <span>fiction</span> books
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <Link to={"/shop"}>
                      meet our bestsellers
                      <i className="fal fa-arrow-right ms-4"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="hero-swiper-slide">
          <img
            className="slide-bg-img"
            src="https://wpbingosite.com/wordpress/bookio/wp-content/webp-express/webp-images/uploads/2021/08/slider1-1.jpg.webp"
            alt="bg"
          />
          <div className="overlay"></div>
          <div className="slide-content">
            <div className="container">
              <div className="row">
                <div className="text-center col-6 ms-5">
                  <div className="slide-info">
                    <h1>
                      bestselling <span>fiction</span> books
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <Link to={"/shop"}>
                      meet our bestsellers
                      <i className="fal fa-arrow-right ms-4"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="hero-swiper-slide">
          <img
            className="slide-bg-img"
            src="https://wpbingosite.com/wordpress/bookio/wp-content/webp-express/webp-images/uploads/2021/08/slider1-1.jpg.webp"
            alt="bg"
          />
          <div className="overlay"></div>
          <div className="slide-content">
            <div className="container">
              <div className="row">
                <div className="text-center col-6 ms-5">
                  <div className="slide-info">
                    <h1>
                      bestselling <span>fiction</span> books
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <Link to={"/shop"}>
                      meet our bestsellers
                      <i className="fal fa-arrow-right ms-4"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
