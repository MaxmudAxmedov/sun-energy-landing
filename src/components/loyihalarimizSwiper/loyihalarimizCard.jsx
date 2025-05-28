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
        id: 2,
        img: "/imgs/loyihalar-5.jpg",
    },
    {
        id: 3,
        img: "/imgs/loyihalar-6.jpg",
    },
    {
        id: 4,
        img: "/imgs/loyihalar-7.jpg",
    },
    {
        id: 5,
        img: "/imgs/loyihalar-8.jpg",
    },
    {
        id: 6,
        img: "/imgs/loyihalar-9.jpg",
    },
    {
        id: 7,
        img: "/imgs/loyihalar-10.jpg",
    },
    {
        id: 8,
        img: "/imgs/loyihalar-11.jpg",
    },
    {
        id: 9,
        img: "/imgs/loyihalar-12.jpg",
    },
    {
        id: 10,
        img: "/imgs/loyihalar-13.jpg",
    },
    {
        id: 11,
        img: "/imgs/loyihalar-14.jpg",
    },
    {
        id: 12,
        img: "/imgs/loyihalar-15.jpg",
    },
    {
        id: 13,
        img: "/imgs/loyihalar-16.jpg",
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
                                <img
                                    className="w-[378px] h-[358px]"
                                    src={item.img}
                                    alt="#"
                                />
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
