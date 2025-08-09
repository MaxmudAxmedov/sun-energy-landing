"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { InstagramIcon } from "../../../public/icons/instagram-icon";
import { TelegramIcon } from "../../../public/icons/telegram-icon";
import { WhatsappIcon } from "../../../public/icons/whatsapp-icon";
import { FacebookIcon } from "../../../public/icons/facebook-iocn";
import ServicesType from "../serivces-type/ServicesType";

export const HomeHero = () => {
    const SlideText = [
        {
            id: 1,
            title: "Quyosh panellarini o'rnatish orqali siz, elektr ta'minotiga qaram bo'lmaysiz.",
        },
        {
            id: 2,
            title: " Quyosh energiyasi bu tabiatning insoniyatga tuhfasi.",
        },
        {
            id: 3,
            title: "Quyosh panellarini o'rnating, daromadga ega bo‘ling.",
        },
        {
            id: 4,
            title: "Yashil iqtisodiyot kelajak bunyodkori.",
        },
        {
            id: 5,
            title: "Uy-ro‘zg‘or ehtiyojini yashil iqtisodiyotga topshiring.",
        },
    ];
    return (
        <div className="container max-w-[1100px] mx-auto">
            <h3 className="text-[14px] md:text-[16px] lg:text-[18px] font-[400]">
                Quyosh panellarining afzalliklari
            </h3>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
            >
                {SlideText?.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div key={item.id} className="mx-auto">
                            <h1 className="text-[28px] md:text-[48px] lg:text-[64px] font-bold pb-[249px] px-[10px]">
                                {item.title}
                            </h1>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* <div>
                <ul className="flex gap-5.5 items-center justify-center pb-[37px]">
                    <li>
                        <a target="_blank" href="https://www.instagram.com/">
                            <InstagramIcon />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.instagram.com/">
                            <TelegramIcon />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.instagram.com/">
                            <WhatsappIcon />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.instagram.com/">
                            <FacebookIcon />
                        </a>
                    </li>
                </ul>
            </div> */}
        </div>
    );
};
