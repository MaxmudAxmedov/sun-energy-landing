import { forceConvertDomain } from "@/lib/forceConvertDomain";
import React, { useState } from "react";

export const HisoblashCard = ({ item }) => {
    const [showMore, setShowMore] = useState(false);
    const maxLength = 30;
    const truncatedText =
        item.description.length > maxLength
            ? item.description.slice(
                  0,
                  item.description.slice(0, maxLength).lastIndexOf(" ")
              ) + "..."
            : item.description;
    return (
        <>
            <div className="h-[520px] w-[280px]">
                <div className="mb-[25px]">
                    <img
                        className="w-[280px] h-[250px]"
                        src={forceConvertDomain(item.photo)}
                        alt="#"
                    />
                    {item.neededCount && (
                        <p>
                            Tanlangan kvt bo'yicha{" "}
                            <span className="fonts-[500] text-[18px] text-yellow">
                                {item.neededCount}
                            </span>{" "}
                            dona yetarli
                        </p>
                    )}
                </div>
                <div>
                    <h2 className="mb-[11px] text-[18px] font-[700]">
                        {item.name}
                    </h2>
                    <p>{Number(item.selling_price).toLocaleString()} sum</p>
                    <p className="font-[400] text-[14px] mb-[8px] text-black h-[120px] overflow-y-scroll p-1 w-[280px]">
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
