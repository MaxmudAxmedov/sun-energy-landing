"use client";

import { forceConvertDomain } from "@/lib/forceConvertDomain";
import Image from "next/image";
import Link from "next/link";
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
        <div className="w-[280px] bg-[#C9E2FF] rounded-4xl">
            <div className="rounded-4xl bg-white">
                <img
                    className="w-[260px] h-[250px] mx-auto p-4"
                    src={forceConvertDomain(item.photo) || []}
                    alt="#"
                />
            </div>

            <div className="p-4">
                <h3 className="font-[700] text-[18px] mb-[11px] text-black">
                    {item.name}
                </h3>
                <p className="text-black">{item.watt} watt</p>
                <p className="text-black text-[20px] font-bold">
                    Narxi: {Number(item.selling_price).toLocaleString()}{" "}
                    <small>sum</small>
                </p>
                <div className="flex justify-between items-end">
                    <div className="w-[85%]">
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
                    <div className="w-[12%]">
                        <Link
                            href={{
                                pathname: `/mahsulotlar/${item.id}`,
                                query: {
                                    data: encodeURIComponent(
                                        JSON.stringify(item)
                                    ),
                                },
                            }}
                        >
                            <Image
                                src="/arrow.svg"
                                alt="Uyda ornatish"
                                width={40}
                                height={40}
                                className="mx-auto"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
