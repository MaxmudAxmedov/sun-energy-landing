import { LoyihalarimizSwiper } from "@/components/loyihalarimizSwiper/loyihalarimizCard";
import React from "react";

const Loyihalar = () => {
  return (
    <>
      <div className="container lg:w-[1200px] mx-auto">
        <div
          id="loyihalar"
          className="loyihalarimiz mt-[87px]  mb-[107px] text-black"
        >
          <h2 className="font-[700] text-[24px] text-grey mb-[60px]">
            Loyihalarimiz
          </h2>
          <div>
            <LoyihalarimizSwiper />
          </div>
        </div>
      </div>
    </>
  );
};

export default Loyihalar;
