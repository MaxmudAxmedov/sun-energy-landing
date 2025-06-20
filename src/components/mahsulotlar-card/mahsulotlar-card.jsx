"use client";

import { forceConvertDomain } from "@/lib/forceConvertDomain";
import React, { useState } from "react";

export const MahsulotlarCard = ({ item }) => {
  const [showMore, setShowMore] = useState(false);
  const maxLength = 90;
  const truncatedText =
    item.description.length > maxLength
      ? item.description.slice(
          0,
          item.description.slice(0, maxLength).lastIndexOf(" ")
        ) + "..."
      : item.description;
  return (
    <div className="w-[220px]">
      <img
        className="w-[280px] h-[250px]"
        src={forceConvertDomain(item.photo) || []}
        alt="#"
      />
      <div className="mt-[25px]">
        <h3 className="font-[700] text-[18px] mb-[11px] text-black">
          {item.name}
        </h3>
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
  );
};
