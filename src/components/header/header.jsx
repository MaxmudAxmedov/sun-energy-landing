// "use client";
import React from "react";
import { LogoIcon } from "../../../public/icons/logo-icon";
import Link from "next/link";
export const Header = () => {
  const page = [
    {
      id: 1,
      title: "Xizmatlar",
      path: "#xizmatlar",
    },
    {
      id: 2,
      title: "Mahsulotlar",
      path: "#mahsulotlar",
    },
    {
      id: 3,
      title: "Loyihalar",
      path: "#loyihalar",
    },
    {
      id: 4,
      title: "Biz haqimizda",
      path: "#biz_haqimizda",
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
                  <a
                    href={item.path}
                    className="text-[18px] font-[700]  hover:text-yellow transition-colors"
                  >
                    {item.title}
                  </a>
                </h4>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button className="font-[400] text-[14px] pt-[12px] pr-[12px] pb-[12px] pl-[19px] cursor-pointer bg-yellow">
            Biz bilan bog’laning
          </button>
        </div>
      </div>
    </>
  );
};
