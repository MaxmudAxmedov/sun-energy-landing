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
export const HomeHero = () => {
  return (
    <>
      <h3 className="text-[18px] text-center pb-[30px]  font-[400] ">
        Quyosh panellarining afzalliklari
      </h3>
      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <div>
            <h1 className="text-[64px] font-bold mx-auto text-center container lg:w-[1600px] pb-[249px]">
              quyosh panellarini o'rnatish orqali siz, elektr ta'minotiga qaram
              bo'lmaysiz.
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <h1 className="text-[64px] font-bold mx-auto text-center container lg:w-[1600px] pb-[249px]">
              quyosh panellarini o'rnatish orqali siz, elektr ta'minotiga qaram
              bo'lmaysiz.
            </h1>
          </div>
        </SwiperSlide>
      </Swiper>

      <div>
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
      </div>
    </>
  );
};
