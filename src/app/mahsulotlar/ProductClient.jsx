"use client";

import { useState } from "react";
import { MahsulotlarCard } from "@/components/mahsulotlar-card/mahsulotlar-card";

const ProductClient = ({ products, categories }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredProducts = products.filter((item) => {
        const matchesCategory =
            selectedCategory === null ||
            item.category_name === selectedCategory;

        const matchesSearch = item.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    return (
        <div className="container lg:w-[1200px] mx-auto">
            <div id="mahsulotlar" className="mt-[87px] mb-[90px]">
                <div className="flex justify-between items-center mb-6 px-[10px] lg:px-0">
                    <h2 className="font-bold text-[24px] text-grey">
                        Mahsulotlar
                    </h2>

                    <input
                        type="text"
                        placeholder="Mahsulotni qidirish..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="text-black border-gray-300 rounded px-4 py-2 w-[450px] outline-none  focus:border-yellow border-2"
                    />
                </div>

                <div className="flex gap-8">
                    <div className="w-[200px]">
                        <ul className="space-y-3">
                            <li
                                onClick={() => setSelectedCategory(null)}
                                className={`cursor-pointer ${
                                    selectedCategory === null
                                        ? "font-bold text-yellow"
                                        : "text-gray-700"
                                }`}
                            >
                                Barchasi
                            </li>
                            {categories.map((cat) => (
                                <li
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`cursor-pointer capitalize ${
                                        selectedCategory === cat
                                            ? "font-bold text-yellow"
                                            : "text-gray-700"
                                    }`}
                                >
                                    {cat}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex-1 flex flex-wrap justify-between gap-[39px]">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((item) => (
                                <MahsulotlarCard key={item.id} item={item} />
                            ))
                        ) : (
                            <p className="text-center text-gray-500 w-full">
                                Mahsulot topilmadi.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductClient;
