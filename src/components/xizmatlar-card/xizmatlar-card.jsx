import React from "react";

export const XizmatlarCard = ({ item }) => {
    return (
        <>
            <div className=" block  lg:flex justify-between lg:odd:flex-row-reverse mb-[73px] px-[10px] ">
                <div>
                    <img src={item.img} alt="#" />
                </div>
                <div className="mt-[19px]">
                    <h2 className="text-black text-[21px] font-[700] mb-[38px]">
                        {item.title}
                    </h2>
                    <p className=" text-[19px] text-black mb-[66px] w-[328px]">
                        {item.des}
                    </p>
                    <div>
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
