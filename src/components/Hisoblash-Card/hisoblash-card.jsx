import { forceConvertDomain } from "@/lib/forceConvertDomain";
import React, { useState } from "react";

export const HisoblashCard = ({ item, step, selectedKvt }) => {
    console.log(selectedKvt);
    const [showMore, setShowMore] = useState(false);
    const maxLength = 100;
    const truncatedText =
        item.description.length > maxLength
            ? item.description.slice(
                  0,
                  item.description.slice(0, maxLength).lastIndexOf(" ")
              ) + "..."
            : item.description;
    return (
        <>
            <div className="w-[320px] h-[500px] bg-[#C9E2FF] rounded-4xl">
                <div className="rounded-4xl bg-white">
                    <img
                        className="w-[260px] h-[250px] mx-auto p-4"
                        src={forceConvertDomain(item.photo) || []}
                        alt="#"
                    />
                    {Math.round((selectedKvt * 1000) / item.watt) > 1 && (
                        <p className="p-3">
                            Tanlangan kwt bo'yicha{" "}
                            <strong>
                                {Math.round((selectedKvt * 1000) / item.watt)}
                            </strong>{" "}
                            dona yetarli
                        </p>
                    )}
                </div>

                <div className="p-4">
                    <h3 className="font-[700] text-[18px] mb-[11px] text-black">
                        {item.name}
                    </h3>
                    <p className="text-black text-[17px] font-bold">
                        Narxi:{" "}
                        {Number(item?.selling_price)?.toLocaleString("en-US")}{" "}
                        <small>sum</small>
                    </p>

                    <p className="font-[400] text-[14px] mb-[8px] h-[100px] overflow-y-scroll p-1 text-black">
                        {showMore ? item.description : truncatedText}
                        {item.description.length > maxLength && (
                            <button
                                onClick={() => setShowMore((prev) => !prev)}
                                className="text-yellow ml-1 underline"
                            >
                                {showMore ? "yopish" : "ko‘proq"}
                            </button>
                        )}
                    </p>
                </div>
            </div>
        </>
    );
};
