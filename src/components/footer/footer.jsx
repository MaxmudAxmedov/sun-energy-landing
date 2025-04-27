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
      <div className="bg-[url('/imgs/footer-bg.png')] bg-cover bg-center  pt-[67px] pb-[47px] ">
        <div className="container lg:w-[1200px] mx-auto ">
          <div className="flex justify-between mb-[145px]">
            <div className="w-[510px] ">
              <h3 className="font-[700] text-[24px] mb-[58px]">
                ОСТАВИТЬ ЗАЯВКУ
              </h3>
              <form>
                <div className="mb-[58px]">
                  <input
                    className=" pb-[10px] border-b-[1px] border-white font-[400] text-[14px] w-[100%] outline-none placeholder:font-[400]  placeholder:text-white placeholder:text-[14px]"
                    placeholder="Имя"
                    type="text"
                  />
                </div>
                <div>
                  <input
                    className=" pb-[10px] border-b-[1px] border-white font-[400] text-[14px] w-[100%] outline-none placeholder:font-[400]  placeholder:text-white placeholder:text-[14px]"
                    placeholder="Имя"
                    type="text"
                  />
                </div>

                <div className="mt-[100px] text-right">
                  <button className=" font-[400] text-[14px] pt-[12px] pr-[12px] pb-[12px] pl-[19px] bg-[#A9A32A] cursor-pointer">
                    Biz bilan bog’laning
                  </button>
                </div>
              </form>
            </div>
            <div>
              <h3 className="font-[700] text-[24px] mb-[58px] ">КОНТАКТЫ</h3>
              <p className="font-[400] text-[18px] mb-[30px]">
                Центральный офис: <br className="lg:block hidden" /> г. Москва,
                ул,Гоголя 13, 1й этаж
              </p>
              <p className="font-[400] text-[18px] mb-[30px]">
                Представительство в Киеве: <br className="lg:block hidden" /> г.
                Киев, ул. Є. Коновальця, 103 оф. 410
              </p>
              <p className="font-[400] text-[18px] mb-[30px]">
                Представительства в Харькове, Одессе, Ростове, Сочи, Белгороде
              </p>
              <div className="mb-[30px] ">
                <p>
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
              <p className="font-[400] text-[18px] ">Ежедневно 08:00 - 20:00</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-[400] text-[14px] cursor-pointer select-none">
              Политика конфиденциальности
            </p>
            <div>
              <FooterLogoIcon />
            </div>
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
        </div>
      </div>
    </>
  );
};
