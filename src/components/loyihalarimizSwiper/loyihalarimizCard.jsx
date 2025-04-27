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
    title: "Shaxsiy uy uchun 1",
    location: "Расположение: Харьковская обл., г. Харьков",
    netWorth:
      "Чистый доход за вычетом налогов с мая 2017 г. по май 2019 г. 13 900 $.",
    remont: "Смонтирована: апрель 2017 г.",
    srok: "Срок службы: 25-30 лет",
  },
  {
    id: 2,
    img: "/imgs/loyihalar1.jpg",
    title: "Shaxsiy uy uchun 2",
    location: "Расположение: Харьковская обл., г. Харьков",
    netWorth:
      "Чистый доход за вычетом налогов с мая 2017 г. по май 2019 г. 13 900 $.",
    remont: "Смонтирована: апрель 2017 г.",
    srok: "Срок службы: 25-30 лет",
  },
  {
    id: 3,
    img: "/imgs/loyihalar1.jpg",
    title: "Shaxsiy uy uchun3 ",
    location: "Расположение: Харьковская обл., г. Харьков",
    netWorth:
      "Чистый доход за вычетом налогов с мая 2017 г. по май 2019 г. 13 900 $.",
    remont: "Смонтирована: апрель 2017 г.",
    srok: "Срок службы: 25-30 лет",
  },
  {
    id: 4,
    img: "/imgs/loyihalar1.jpg",
    title: "Shaxsiy uy uchun4",
    location: "Расположение: Харьковская обл., г. Харьков",
    netWorth:
      "Чистый доход за вычетом налогов с мая 2017 г. по май 2019 г. 13 900 $.",
    remont: "Смонтирована: апрель 2017 г.",
    srok: "Срок службы: 25-30 лет",
  },
];
export const LoyihalarimizSwiper = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
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
            <div className="flex gap-[91px] select-none">
              <div>
                <img src={item.img} alt="#" />
              </div>
              <div>
                <h1 className="font-[700] text-[18px] mb-[55px] text-black">
                  {item.title}
                </h1>
                <p className="font-[400] text-[14px] text-black mb-[15px]">
                  {item.location}
                </p>
                <p className="font-[400] text-[14px] text-black mb-[15px]">
                  {item.netWorth}
                </p>
                <p className="font-[400] text-[14px] text-black mb-[15px]">
                  {item.remont}
                </p>
                <p className="font-[400] text-[14px] text-black mb-[15px]">
                  {item.srok}
                </p>
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
