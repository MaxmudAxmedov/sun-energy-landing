"use client";

import React, { useState, useMemo } from "react";
import { HisoblashCard } from "../Hisoblash-Card/hisoblash-card";

export default function HisoblashComp({ products }) {
    const [selectedPowerSystem, setSelectedPowerSystem] = useState("on-grid");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedKvt, setSelectedKvt] = useState();

    const selectedWatt = selectedKvt ? parseFloat(selectedKvt) * 1000 : 0;

    const filteredProducts = products.filter((item) => {
        const matchesPowerSystem =
            item.power_system?.toLowerCase() === selectedPowerSystem;
        const matchesCategory =
            selectedCategory === "all" ||
            item.category_name?.toLowerCase() ===
                selectedCategory.toLowerCase();
        const isNotExcludedCategory =
            item.category_name?.toLowerCase() !== "elektrika aksesuarlari";

        return matchesPowerSystem && matchesCategory && isNotExcludedCategory;
    });

    const categoryOptions = useMemo(() => {
        const set = new Set();
        products.forEach((item) => {
            const isMatchingPowerSystem =
                item.power_system?.toLowerCase() === selectedPowerSystem;
            const isNotExcludedCategory =
                item.category_name?.toLowerCase() !== "elektrika aksesuarlari";

            if (
                isMatchingPowerSystem &&
                isNotExcludedCategory &&
                item.category_name
            ) {
                set.add(item.category_name);
            }
        });
        return Array.from(set);
    }, [selectedPowerSystem, products]);

    let limitedProducts;

    if (!selectedKvt) {
        limitedProducts = filteredProducts.map((item) => ({
            ...item,
            neededCount: null,
        }));
    } else {
        let wattSum = 0;
        limitedProducts = [];

        for (const product of filteredProducts) {
            if (product.watt && wattSum + product.watt <= selectedWatt) {
                wattSum += product.watt;
                const count = Math.ceil(selectedWatt / product.watt);
                limitedProducts.push({
                    ...product,
                    neededCount: count,
                });
            }
        }
    }

    return (
        <div className="container lg:max-w-[1200px] mx-auto mb-6">
            <div className="flex items-center flex-col-reverse md:flex-row justify-center md:justify-between md:gap-[20px] lg:gap-[72px] mt-[35px] mb-5 md:mb-[57px]">
                <div>
                    <div>
                        <div className="flex gap-[169px] items-center mb-[20px]">
                            <h4 className="text-[14px] md:text-[16px] font-[400]  text-black">
                                Stansiya turini tanlang
                            </h4>
                            <p className="text-black font-[400] text-[14px] md:text-[16px]">
                                <span className="text-yellow">kvt</span> ni
                                tanlang
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-[25px] mb-6">
                        <ul className="flex gap-4 items-center">
                            {["on-grid", "off-grid", "hybrid"].map((type) => (
                                <li key={type}>
                                    <label className="flex items-center gap-2 cursor-pointer text-black">
                                        <input
                                            type="radio"
                                            name="choice"
                                            value={type}
                                            checked={
                                                selectedPowerSystem === type
                                            }
                                            onChange={() => {
                                                setSelectedPowerSystem(type);
                                                setSelectedCategory("all");
                                            }}
                                            className="sr-only peer"
                                        />
                                        <div className="w-4 h-4 rounded-full border border-gray-400 peer-checked:bg-yellow peer-checked:border-yellow transition-all" />
                                        <span className="capitalize text-[12px] md:text-[14px]">
                                            {type}
                                        </span>
                                    </label>
                                </li>
                            ))}
                        </ul>

                        <div>
                            <select
                                onChange={(e) => setSelectedKvt(e.target.value)}
                                className="border border-yellow w-[100px] rounded-[12px] py-[7px] pr-[7px] text-right text-black outline-none text-[12px] md:text-[14px]"
                            >
                                <option value="">Kvt</option>
                                {[
                                    3, 4.2, 5, 6, 8, 10, 11, 15, 20, 25, 30, 40,
                                    50, 60, 70, 80, 90, 100,
                                ].map((kvt) => (
                                    <option key={kvt} value={kvt}>
                                        {kvt} kvt
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="bg-yellow rounded-[12px] py-[17px] px-[20px] max-w-[667px] mb-5 md:mb-0">
                    <h3 className="text-[15px] md:text-[17px] font-[400] mb-[20px] text-wrap">
                        “ Hurmatli mijoz siz xarid qilmasdan turib o’z
                        ehtiyojingizga qarab mahsulotlarni <br />
                        tanlashingiz mumkin, biz sizga hisoblab beramiz”.
                    </h3>

                    <div>
                        <p className="font-[400] text-[14px] md:text-[16px] mb-[11px]">
                            1 - Stansiya turini tanlang.
                        </p>
                        <p className="font-[400] text-[14px] md:text-[16px] mb-[11px]">
                            2 - Ehtiyojingizga qarab kvt ni belgilang.
                        </p>
                        <p className="font-[400] text-[14px] md:text-[16px] mb-[11px]">
                            3 - Istalgan mahsulotni tanlang.
                        </p>
                        <p className="font-[400] text-[14px] md:text-[16px] mb-[11px]">
                            4 - Hisoblash tugmasini bosing.
                        </p>
                    </div>
                </div>
            </div>

            <ul className="flex gap-4 mb-6 justify-center md:justify-start">
                <li
                    key="all"
                    className={`cursor-pointer px-4 py-2 rounded text-[12px] md:text-[14px] ${
                        selectedCategory === "all"
                            ? "bg-yellow font-bold"
                            : "bg-gray-200 text-black"
                    }`}
                    onClick={() => setSelectedCategory("all")}
                >
                    Barchasi
                </li>
                {categoryOptions.map((category) => (
                    <li
                        key={category}
                        className={`cursor-pointer px-4 py-2 rounded text-[12px] md:text-[14px] ${
                            selectedCategory === category
                                ? "bg-yellow font-bold"
                                : "bg-gray-200 text-black"
                        }`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </li>
                ))}
            </ul>

            <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-4 text-black mt-6 md:mt-[135px]">
                {limitedProducts.map((item) => (
                    <HisoblashCard item={item} key={item.id} />
                ))}
            </div>
        </div>
    );
}
