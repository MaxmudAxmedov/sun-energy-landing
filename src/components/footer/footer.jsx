"use client";
import React from "react";
import { FooterLogoIcon } from "../../../public/icons/footer-logo-icon";
import { FacebookIcon } from "../../../public/icons/facebook-iocn";
import { WhatsappIcon } from "../../../public/icons/whatsapp-icon";
import { TelegramIcon } from "../../../public/icons/telegram-icon";
import { InstagramIcon } from "../../../public/icons/instagram-icon";

export const Footer = () => {
  return (
    <>
      <div className="bg-[url('/imgs/footer-bg.png')] bg-cover bg-center  pt-[54px] pb-[47px] ">
        <div className="container lg:w-[1200px] mx-auto ">
          <div className="flex gap-[179px] justify-center">
            <div className="w-[510px] ">
              <h3 className="font-[700] text-[24px] mb-[31px]">
                ОСТАВИТЬ ЗАЯВКУ
              </h3>
              <form>
                <div className="mb-[31px]">
                  <input
                    className=" pb-[10px] border-b-[1px] border-white font-[400] text-[14px] w-[100%] outline-none placeholder:font-[400]  placeholder:text-white placeholder:text-[14px]"
                    placeholder="Name"
                    type="text"
                  />
                </div>
                <div>
                  <input
                    className=" pb-[10px] border-b-[1px] border-white font-[400] text-[14px] w-[100%] outline-none placeholder:font-[400]  placeholder:text-white placeholder:text-[14px]"
                    placeholder="Phone"
                    type="text"
                  />
                </div>

                <div className="mt-[22px] text-right">
                  <button className=" font-[400] text-[14px] pt-[12px] pr-[12px] pb-[12px] pl-[19px] bg-yellow cursor-pointer">
                    Yuborish
                  </button>
                </div>
              </form>
            </div>
            <div className="flex flex-col justify-between">
              <h3 className="font-[700] text-[24px] mb-[31px] ">КОНТАКТЫ</h3>
              <div className="mb-[40px] ">
                <p className="mb-[20px]">
                  <a
                    className="font-[400] text-[18px] "
                    href="tel:+7 987 654-54-56"
                  >
                    +7 987 654-54-56
                  </a>
                </p>
                <p>
                  <a
                    className="font-[400] text-[18px]"
                    href="tel:++38 067 504-32-57"
                  >
                    +38 067 504-32-57
                  </a>
                </p>
              </div>
              <ul className="flex gap-5.5 items-center justify-center ">
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
          </div>
        </div>
      </div>
    </>
  );
};
