  "use client";
  import React from "react";
  import { NotfoundIcon } from "../../public/icons/404-icon";
  export default function NotFound() {
    return (
      <div id="page-wrapper" data-404="true" className=" bg-[#555] text-white  ">
        <div className="flex  justify-between  items-center px-8  relative text-center pt-[20px] pb-[70px]">
          <div className="relative py-[100px]">
            <div className="rounded-[337px] bg-[rgba(23,25,90,0.8)] rotate-[-37deg] w-[1041px] h-[673px] relative"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <h1 className="font-[800] text-[190px] text-white leading-none">
                4<span className="text-[#fe5716]">0</span>4
              </h1>
              <h3 className="font-[700] text-[26px] uppercase mb-[19px]">
                USHBU OYNA MAVJUD EMAS!
              </h3>
              <p className="font-[400] text-[18px] leading-[1.78] text-center text-white mb-[41px]">
                Internetingizni tekshiring yoki ushbu oynaning texnik <br />{" "}
                ishlari tugatilguncha kuting.
              </p>

              <button
                onClick={() => window.history.back()}
                className="mt-8 inline-block px-[50px] py-[20px] bg-[#fe5716] text-white rounded-[30px] cursor-pointer hover:bg-[#e04e13] transition-colors"
              >
                Orqaga qaytish
              </button>
            </div>
          </div>
          <div className="top-0 absolute right-0">
            <a href="/">
              <NotfoundIcon />
            </a>
          </div>
        </div>
      </div>
    );
  }
