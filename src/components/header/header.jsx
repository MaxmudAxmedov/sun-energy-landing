// "use client";
import React from "react";
import { LogoIcon } from "../../../public/icons/logo-icon";
import Link from "next/link";
import { usePathname } from "next/navigation";
export const Header = () => {
    const pathname = usePathname();

    const isActive = (path) => {
        if (pathname === "/") return path === "/xizmatlar";
        return pathname === path;
    };
    const page = [
        {
            id: 1,
            title: "Xizmatlar",
            path: "/xizmatlar",
        },
        {
            id: 2,
            title: "Mahsulotlar",
            path: "/mahsulotlar",
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
    ];
    return (
        <>
            <div className="flex items-center justify-between mx-auto container  lg:w-[1200px] pt-[25px] pb-[144px]">
                <div className="flex gap-[61px] items-center">
                    <div>
                        <Link href={"/"}>
                            <LogoIcon />
                        </Link>
                    </div>
                    <ul className="flex items-center gap-[52px]">
                        {page.map((item) => (
                            <li key={item.id} className="cursor-pointer">
                                <h4>
                                    <Link
                                        href={item.path}
                                        className={`text-[18px] font-[700] transition-colors ${
                                            isActive(item.path)
                                                ? "text-[#007AFF]"
                                                : "hover:text-[#007AFF]"
                                        }`}
                                    >
                                        {item.title}
                                    </Link>
                                </h4>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <button className="font-[400] text-[14px] pt-[12px] pr-[12px] pb-[12px] pl-[19px] cursor-pointer bg-yellow">
                        <a href="#contact-form">Biz bilan bog’laning</a>
                    </button>
                </div>
            </div>
        </>
    );
};
