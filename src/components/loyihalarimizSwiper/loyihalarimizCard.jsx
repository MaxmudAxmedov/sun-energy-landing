"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
SwiperCore.use([Navigation]);
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { SwiperLeftIcon } from "../../../public/icons/swiper-left-icon";
import { SwiperRightIcon } from "../../../public/icons/swiper-right-icon";
const LoyihalarimizData = [
  {
    id: 1,
    img: "/imgs/loyihalar1.jpg",
  },
  {
    id: 2,
    img: "/imgs/loyihalar1.jpg",
  },
  {
    id: 3,
    img: "/imgs/loyihalar1.jpg",
  },
  {
    id: 4,
    img: "/imgs/loyihalar1.jpg",
  },
];
export const LoyihalarimizSwiper = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {LoyihalarimizData?.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="">
              <div>
                <img className="w-[378px] h-[358px]" src={item.img} alt="#" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex gap-[22px] ml-[226px] mt-[32px]">
        <div className=" flex gap-[10px]">
          <div>
            <button className="arrow-left  text-black cursor-pointer">
              <SwiperLeftIcon />
            </button>
          </div>
          <div>
            <button className="arrow-right cursor-pointer">
              <SwiperRightIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
