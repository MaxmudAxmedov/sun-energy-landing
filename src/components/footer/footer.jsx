"use client";

import React from "react";
import { FooterIcon } from "../../../public/icons/footer-icon";
import { TgIcon } from "../../../public/icons/tg-icon";
import { InstaIcon } from "../../../public/icons/insta-icon";
import { BtnPhone } from "../../../public/icons/btn-phone";

export const Footer = () => {
    return (
        <>
            <div
                style={{
                    backgroundImage: "url('/imgs/NewFooter.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
                className="py-[34px]"
            >
                <div className="max-w-[1400px] mx-auto px-5">
                    <div className="flex items-center justify-between mx-auto gap-5">
                        <div>
                            <div className="mb-[43px]">
                                <FooterIcon />
                            </div>
                            <div className="flex gap-[25px] mb-[43px]">
                                <div>
                                    <a
                                        href="https://t.me/BravoSunEnergy"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1"
                                    >
                                        <TgIcon />
                                        Telegram
                                    </a>
                                </div>
                                <div className="flex items-center gap-1">
                                    <a
                                        href="#"
                                        className="flex items-center gap-1"
                                    >
                                        <InstaIcon />
                                        Instagram
                                    </a>
                                </div>
                            </div>
                            <div className="hidden sm:block">
                                <h3 className="mb-[13px] font-[700] text-[22px] leading-[182%] capitalize text-white pl-[50px]">
                                    Aloqa
                                </h3>
                                <button className="bg-[#6acb20] rounded-[80px] font-[700] text-[18px] text-white flex items-center max-w-[440px] gap-[20px] pl-[31px] pr-[31px] pt-[15px] pb-[8px]">
                                    <div className="bg-[#fe5716] p-[18px] rounded-[100%]">
                                        <BtnPhone />
                                    </div>
                                    <div className="flex justify-between gap-3">
                                        <div className="flex flex-col">
                                            <a
                                                href="tel:/+998944808804"
                                                className="font-[400] text-[16px] text-white"
                                            >
                                                +998 94 480-88-04
                                            </a>
                                            <a
                                                href="tel:/+998946205002"
                                                className="font-[400] text-[16px] text-white"
                                            >
                                                +998 94 620-50-02
                                            </a>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="max-w-[435px]">
                            <h3 className="font-[700] text-[22px] leading-[182%] capitalize text-white mb-[25px]">
                                BSE Haqida
                            </h3>
                            <p className="font-[400] text-[16px] leading-[175%] text-[#fafafa] ">
                                Quyosh energiyasining energiya saqlash
                                tizimlari, elektromobillar va aqlli tarmoqlar
                                bilan mukammal uyg‘unligi tufayli, bu soha
                                texnologiya va tizimlarni yangilashning ilg‘or
                                yo‘nalishida faoliyat olib boradi.
                            </p>

                            <div className="block sm:hidden">
                                <h3 className="mb-[13px] font-[700] text-[22px] leading-[182%] capitalize text-white pl-[50px]">
                                    Aloqa
                                </h3>
                                <button className="bg-[#6acb20] rounded-[80px] font-[700] text-[18px] text-white flex items-center max-w-[440px] gap-[20px] pl-[31px] pr-[31px] pt-[15px] pb-[8px]">
                                    <div className="bg-[#fe5716] p-[18px] rounded-[100%]">
                                        <BtnPhone />
                                    </div>
                                    <div className="flex justify-between gap-3">
                                        <div className="flex flex-col">
                                            <a
                                                href="tel:/+998944808804"
                                                className="font-[400] text-[16px] text-white"
                                            >
                                                +998 94 480-88-04
                                            </a>
                                            <a
                                                href="tel:/+998946205002"
                                                className="font-[400] text-[16px] text-white"
                                            >
                                                +998 94 620-50-02
                                            </a>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between items-center mt-[16px]">
                        <p className=" font-[400]  text-[16px] leading-[250%] text-[#fafafa] capitalize">
                            © Copyright Energix 2025. All Rights Reserved.
                        </p>
                        <div className="flex max-w-[447px] justify-between">
                            <div>
                                <a href="#">Privacy Policy</a>
                            </div>
                            <div>
                                <a href="#"> Terms & Conditions </a>
                            </div>
                            <div>
                                <a href="#">About U</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
