// "use client";
import React, { useEffect, useState } from "react";
import { LogoIcon } from "../../../public/icons/logo-icon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Hamburger from "../../../public/icons/hamburger";

export const Header = () => {
    const pathname = usePathname();
    const [open, onOpen] = useState(false);
    const isActive = (path) => {
        if (pathname === "/") return path === "/";
        return pathname === path;
    };
    const page = [
        // {
        //     id: 1,
        //     title: "Xizmatlar",
        //     path: "/xizmatlar",
        // },
        {
            id: 2,
            title: "Mahsulotlar",
            path: "/",
        },
        // {
        //   id: 3,
        //   title: "Loyihalar",
        //   path: "/loyihalar",
        // },

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
            <div className="flex items-center justify-between mx-auto container lg:w-[1200px] pt-[25px] pb-[144px] px-[10px]">
                <div className="flex gap-[61px] items-center">
                    <div>
                        <Link href={"/"}>
                            <LogoIcon />
                        </Link>
                    </div>
                    <ul className="hidden lg:flex items-center gap-[52px]">
                        {page.map((item) => (
                            <li key={item.id} className="cursor-pointer">
                                <h4>
                                    <Link
                                        href={item.path}
                                        className={`text-[18px] pb-1 font-[700] transition-colors ${
                                            isActive(item.path)
                                                ? "border-b text-yellow"
                                                : "hover:text-yellow"
                                        }`}
                                    >
                                        {item.title}
                                    </Link>
                                </h4>
                            </li>
                        ))}
                    </ul>

                    {open && (
                        <div className="flex flex-col absolute right-2 top-[120px] p-3 w-[180px] bg-gray-600">
                            <ul className="flex flex-col gap-3">
                                {page.map((item) => (
                                    <li
                                        key={item.id}
                                        className="cursor-pointer"
                                    >
                                        <h4>
                                            <Link
                                                href={item.path}
                                                onClick={() => onOpen(false)}
                                                className={`text-[14px] font-[700] transition-colors ${
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
                                <a href="#contact-form">Biz bilan bog’laning</a>
                            </button>
                        </div>
                    )}
                </div>
                <div className="flex gap-3">
                    <button
                        className="block lg:hidden"
                        onClick={() => onOpen(!open)}
                    >
                        <Hamburger />
                    </button>
                    <button className="hidden lg:block font-[400] text-[14px] pt-[12px] pr-[12px] pb-[12px] pl-[19px] cursor-pointer bg-yellow">
                        <a href="#contact-form">Biz bilan bog’laning</a>
                    </button>
                </div>
            </div>
        </>
    );
};
