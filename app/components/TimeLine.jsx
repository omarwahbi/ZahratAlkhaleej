"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation } from "swiper/modules";

export default function TimeLine() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          minHeight: "60vh",
          marginBottom: "50px",
          borderRadius: "8px",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper w-full"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            backgroundImage:
              "url(https://cdn.corporatefinanceinstitute.com/assets/affiliated-companies.jpeg)",
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="title ms-10" data-swiper-parallax="-300">
            <p className="text-black font-extrabold">2000</p>
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p className="text-black text-xl">
              Establishing Bahar Company as a general trading & retail company
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="title text-black font-bold"
            data-swiper-parallax="-300"
          >
            <p className="text-black font-extrabold">2010</p>
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p className="text-black text-lg">
              Establishing Bahar Company as a general trading & retail company
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            <p className="text-black font-extrabold">2021</p>
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p className="text-black text-lg">
              Establishing Bahar Company as a general trading & retail company
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
