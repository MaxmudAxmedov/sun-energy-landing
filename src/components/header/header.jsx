// "use client";
import React from "react";
import { LogoIcon } from "../../../public/icons/logo-icon";

export const Header = () => {
  return (
    <>
      <div className="flex items-center justify-between mx-auto container  lg:w-[1200px] pt-[25px] pb-[144px]">
        <div>
          <LogoIcon />
        </div>
        <ul>
          <li>l1</li>
        </ul>
        <div>
          <button className="bg-black">'hello</button>
        </div>
      </div>
    </>
  );
};
