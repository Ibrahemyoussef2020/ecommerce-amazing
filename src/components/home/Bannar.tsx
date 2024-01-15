"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import { sliderOne, sliderTwo, sliderFour } from "@/assets";
import Image from "next/image";
import { Clock, Smartphone, Map, MailPlus } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {

  return (
    <>
    <section className="banner absolute top-[80px] left-0 right-0 h-[700px]">
      <Swiper
        loop={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000 }}
        className="h-full w-full bg-slate-200"
      >
        <SwiperSlide className="h-full w-full  min-h-full !flex items-center flex-nowrap">
          <div className=" max-sm:absolute w-2/3 lg:w-1/3 h-full bg-designColor ">
            <Image
                src={sliderOne}
                alt="the rings of power"
                className="h-[100%] max-w-[100%] relative right-[-150px] sm:right-[-50px] md:right-[-100px] lg:right-[-150px]"
            />
          </div>
          <div className="mx-auto lg:absolute lg:top-1/2 lg:left-2/3 max-w-[95%] sm:max-w-full mt-[100px] sm:mt-[50px] md:mt-0 p-3 transform transition-colors trasation duration-1000 max-sm:bg-white/70 hover:bg-white/70  lg:-translate-x-1/2 lg:-translate-y-1/2 flex flex-col items-center">
            <p className="text-xl uppercase mb-3">Get the Best products <span className=" hidden sm:inline">for you</span></p>
            <p className="lg:w-96 mb-2 text-center text-black md:text-zinc-600">
              Browse the latest phones in the Market and get the one you dreamt
              for you
            </p>
            <p className="text-2xl font-semibold">Phones in Demand</p>
            <button className="text-base mb-2 font-medium text-white bg-designColor rounded-md px-4 py-2  mt-3">
              Select a Product
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full w-full min-w-full min-h-full !flex items-center flex-nowrap">
          <div className=" max-sm:absolute w-2/3 lg:w-1/3 h-full bg-designColor ">
            <Image
                src={sliderTwo}
                alt="the rings of power"
                className="h-[100%] max-w-[100%] relative right-[-150px] sm:right-[-50px] md:right-[-100px] lg:right-[-150px]"
            />
          </div>
          <div className="mx-auto lg:absolute lg:top-1/2 lg:left-2/3 max-w-[95%] sm:max-w-full mt-[100px] sm:mt-[50px] md:mt-0 p-3 transform transition-colors trasation duration-1000 max-sm:bg-white/70 hover:bg-white/70  lg:-translate-x-1/2 lg:-translate-y-1/2 flex flex-col items-center">
            <p className="text-xl uppercase mb-3">Get the Best products <span className=" hidden sm:inline">for you</span></p>
            <p className="lg:w-96 mb-2 text-center text-black md:text-zinc-600">
              Browse the latest phones in the Market and get the one you dreamt
              for you
            </p>
            <p className="text-2xl font-semibold">Phones in Demand</p>
            <button className="text-base mb-2 font-medium text-white bg-designColor rounded-md px-4 py-2  mt-3">
              Select a Product
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full w-full min-w-full min-h-full !flex items-center flex-nowrap">
          <div className=" max-sm:absolute w-2/3 lg:w-1/3 h-full bg-designColor ">
            <Image
                src={sliderFour}
                alt="the rings of power"
                className="h-[100%] max-w-[100%] relative right-[-150px] sm:right-[-50px] md:right-[-100px] lg:right-[-150px]"
            />
          </div>
          <div className="mx-auto lg:absolute lg:top-1/2 lg:left-2/3 max-w-[95%] sm:max-w-full mt-[100px] sm:mt-[50px] md:mt-0 p-3 transform transition-colors trasation duration-1000 max-sm:bg-white/70 hover:bg-white/70  lg:-translate-x-1/2 lg:-translate-y-1/2 flex flex-col items-center">
            <p className="text-xl uppercase mb-3">Get the Best products <span className=" hidden sm:inline">for you</span></p>
            <p className="lg:w-96 mb-2 text-center text-black md:text-zinc-600">
              Browse the latest phones in the Market and get the one you dreamt
              for you
            </p>
            <p className="text-2xl font-semibold">Phones in Demand</p>
            <button className="text-base mb-2 font-medium text-white bg-designColor rounded-md px-4 py-2  mt-3">
              Select a Product
            </button>
          </div>
        </SwiperSlide>
      </Swiper> 

      {/* icons header */}  

    <div className=" relative w-full max-w-[100vw] top-[-70px] z-50  p-5 mt-initial text-nowrap whitespace-nowrap">
      <div className="w-[90%] flex justify-around gap-2 p-5 bg-white mx-auto border-3 border-solid border-yellow-700">
        <article className="gap-2 items-center hidden lg:flex">
          <Clock className="text-designColor h-8 w-8" />
            <div>
              <p>Saturday - Thursday</p>
              <p className="font-semibold">7:00 - 20:00</p>
            </div>
        </article>
        <article className="gap-2 items-center flex">
          <Smartphone className="text-designColor w-8 h-8" />
          <div>
            <p>+ 018 0000 0000</p>
            <p className="font-semibold">Order by Phone</p>
          </div>
        </article>
        <article className="gap-2 items-center hidden md:flex">
          <Map className="text-designColor w-8 h-8" />
          <div>
            <p>Mirpur, Dhaka</p>
            <p className="font-semibold">Address</p>
          </div>
        </article>
        <article className="gap-2 items-center hidden sm:flex">
          <MailPlus className="text-designColor w-8 h-8" />
          <div>
            <p>Get an invoice</p>
            <p className="font-semibold">Email us</p>
          </div>
        </article>
      </div> 
    </div> 
  </section>
  </>
  );
};

export default Banner;