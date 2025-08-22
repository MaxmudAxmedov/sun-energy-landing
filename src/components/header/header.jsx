// "use client";
import React, { useEffect, useState } from "react";
import { LogoIcon } from "../../../public/icons/logo-icon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Hamburger from "../../../public/icons/hamburger";
import { CallIcon } from "../../../public/icons/call-icon";

export const Header = () => {
    const pathname = usePathname();
    const [open, onOpen] = useState(false);
    const isActive = (path) => {
        if (pathname === "/") return path === "/";
        return pathname === path;
    };
    const page = [
        {
            id: 1,
            title: "Asosiy",
            path: "/",
        },
        {
            id: 2,
            title: "Mahsulotlar",
            path: "/mahsulotlar",
        },
        {
            id: 4,
            title: "Hisoblash",
            path: "/hisoblash",
        },
        {
            id: 5,
            title: "Biz haqimizda",
            path: "/biz-haqimizda",
        },
        {
            id: 6,
            title: "Bilishingiz kerak",
            path: "/info",
        },
    ];
    return (
        <>
            <div className="bg-blue-400 lg:h-[109px] lg:pb-[100px] mb-[200px] relative">
                <div className="    ">
                    <div className="flex items-center justify-between mx-auto container    px-[10px]">
                        <div className="flex gap-[25px]  lg:pl-[92px] lg:py-[20px] py-[5px] ">
                            <div className="flex gap-2 items-center font-[700] text-[16px]">
                                <a
                                    href="https://t.me/BravoSunEnergy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Telegram
                                </a>
                            </div>
                            <div className="flex gap-2 items-center font-[700] text-[16px]">
                                Instagram
                            </div>
                        </div>
                        <div className="block lg:block ">
                            <button
                                className="block lg:hidden"
                                onClick={() => onOpen(!open)}
                            >
                                <Hamburger />
                            </button>
                            {open && (
                                <div className="flex flex-col absolute right-2 top-[120px] p-3 w-[180px] bg-gray-600 z-50">
                                    <ul className="flex flex-col gap-3">
                                        {page.map((item) => (
                                            <li
                                                key={item.id}
                                                className="cursor-pointer"
                                            >
                                                <h4>
                                                    <Link
                                                        href={item.path}
                                                        onClick={() =>
                                                            onOpen(false)
                                                        }
                                                        className={`text-[14px] font-[700] transition-colors z-50 ${
                                                            isActive(item.path)
                                                                ? "text-yellow"
                                                                : "hover:text-[#007AFF]"
                                                        }`}
                                                    >
                                                        {item.title}
                                                    </Link>
                                                </h4>
                                            </li>
                                        ))}
                                    </ul>
                                    <button
                                        onClick={() => onOpen(false)}
                                        className="font-[400] mt-3 text-left text-[14px] pl-[12px] pt-[12px] pb-[12px] cursor-pointer bg-yellow"
                                    >
                                        {/* <a href="#contact-form">Biz bilan bog’laning</a> */}
                                        <Link href={"/boglanish"}>
                                            Biz bilan bog’laning
                                        </Link>
                                    </button>
                                </div>
                            )}
                        </div>

                        <div
                            className="hidden lg:flex justify-between w-[80%] 
  mx-auto items-center bg-white  text-[#414A22] pl-[67px] pr-[37px]  rounded-[80px] absolute left-0 right-0  lg:translate-y-[75%] top-0 maxLg2:bg-red-400 
"
                        >
                            <div className="lg:flex  ">
                                <div>
                                    <Link href={"/"}>
                                        <LogoIcon />
                                    </Link>
                                </div>
                            </div>
                            <ul className="hidden lg:flex items-center gap-[20px]">
                                {page.map((item) => (
                                    <li
                                        key={item.id}
                                        className="cursor-pointer"
                                    >
                                        <h4>
                                            <Link
                                                href={item.path}
                                                className={`text-[16px]  font-[300] transition-colors  ${
                                                    isActive(item.path)
                                                        ? "bg-[#c9f529] text-black p-[15px] rounded-[30px] font-[400]"
                                                        : ""
                                                }`}
                                            >
                                                {item.title}
                                            </Link>
                                        </h4>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex gap-3">
                                <button className="hidden lg:block font-[700] text-[16px] pt-[29px] pr-[44px] pb-[26px] pl-[41px] cursor-pointer bg-[#c9f529] rounded-[80px] text-[#414a22] ">
                                    {/* <a href="#contact-form" className="flex items-center gap-2"> */}
                                    <Link
                                        href={"/boglanish"}
                                        className="flex items-center gap-2"
                                    >
                                        Bog'lanish
                                        <CallIcon />
                                    </Link>

                                    {/* </a> */}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
