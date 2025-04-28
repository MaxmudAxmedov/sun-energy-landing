import React from "react";

export const MahsulotlarCard = ({ item }) => {
  return (
    <>
      <div className="">
        <div>
          <img src={item.img} alt="#" />
        </div>
        <div className="w-[518px] mt-[25px] ml-[16px]">
          <h3 className="font-[700] text-[18px] mb-[11px] text-black">
            {item.title}
          </h3>
          <p className="font-[400] text-[14px] mb-[65px] text-black">
            {item.des}
          </p>
          <div className="text-right">
            <button>
              <a
                href="#contact-form"
                className="font-[400] text-[14px] bg-yellow py-[14px] px-[18px] text-white cursor-pointer"
              >
                Biz bilan bog’laning
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
