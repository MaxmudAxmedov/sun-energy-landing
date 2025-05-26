import { forceConvertDomain } from "@/lib/forceConvertDomain";
import React from "react";

export const HisoblashCard = ({ item }) => {
  console.log(item);
    return (
        <>
            <div>
                <div className="mb-[25px]">
                    <img
                        className="w-[548px] h-[414px]"
                        src={forceConvertDomain(item.photo)}
                        alt="#"
                    />
                </div>
                <div>
                    <h2 className="mb-[11px] text-[18px] font-[700] ">
                        {item.name}
                    </h2>
                    <p className="font-[400] text-[14px] mb-[24px] ">
                        {item.description}
                    </p>
                    <div>
                        <p className="font-[400] text-[16px] mb-[24px]">
                            Quvvati:
                            <span className="text-[19px] font-[400]">
                                {item.watt}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
