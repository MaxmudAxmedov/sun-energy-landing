"use client";

import { useEffect, useState } from "react";
import { MahsulotlarCard } from "@/components/mahsulotlar-card/mahsulotlar-card";
import Image from "next/image";

const ProductClient = ({ products, categories }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [open, isOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const productsPerPage = 12; // Adjust this number as needed

    // Filter products
    const filteredProducts = products.filter((item) => {
        const matchesCategory =
            selectedCategory === null ||
            item.category_name === selectedCategory;

        const matchesSearch = item.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    // Calculate pagination details
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    // Handle page change
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        // Optional: Scroll to top of products section
        document
            .getElementById("mahsulotlar")
            ?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="container lg:w-[1200px] mx-auto">
            <div id="mahsulotlar" className="mt-[87px] mb-[90px]">
                <div className="flex gap-8 relative">
                    <Image
                        src="/category.svg"
                        alt="Uyda ornatish"
                        width={50}
                        height={50}
                        onClick={() => isOpen(!open)}
                        className="block md:hidden absolute right-2 top-[-70px] bg-[#12169D] p-2 rounded-2xl"
                    />
                    <div className="absolute md:static z-10 w-[300px]">
                        <ul className="bg-[#12169D] hidden md:block space-y-3 p-7 rounded-3xl text-[20px]">
                            <li className="flex">
                                <h2 className="font-bold text-[35px] text-white">
                                    Mahsulotlar
                                </h2>
                            </li>
                            <li
                                onClick={() => {
                                    setSelectedCategory(null);
                                    setCurrentPage(1);
                                }}
                                className={`cursor-pointer ${
                                    selectedCategory === null
                                        ? "font-bold bg-gradient-to-r from-[#3B9CFF] to-[#12169D] py-1 px-2 rounded-xl"
                                        : "text-[#FFFFFF]"
                                }`}
                            >
                                Barchasi
                            </li>
                            {categories.map((cat) => (
                                <li
                                    key={cat}
                                    onClick={() => {
                                        setSelectedCategory(cat);
                                        setCurrentPage(1);
                                    }}
                                    className={`cursor-pointer capitalize ${
                                        selectedCategory === cat
                                            ? "font-bold bg-gradient-to-r from-[#3B9CFF] to-[#12169D] py-1 px-2 rounded-xl"
                                            : "text-[#FFFFFF]"
                                    }`}
                                >
                                    {cat}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {open && isMobile && (
                        <div className="absolute md:static right-0 z-10 w-[300px]">
                            <ul className="bg-[#12169D] space-y-3 p-7 rounded-3xl text-[20px]">
                                <li className="flex">
                                    <h2 className="font-bold text-[35px] text-white">
                                        Mahsulotlar
                                    </h2>
                                </li>
                                <li
                                    onClick={() => {
                                        setSelectedCategory(null);
                                        setCurrentPage(1);
                                    }}
                                    className={`cursor-pointer ${
                                        selectedCategory === null
                                            ? "font-bold bg-gradient-to-r from-[#3B9CFF] to-[#12169D] py-1 px-2 rounded-xl"
                                            : "text-[#FFFFFF]"
                                    }`}
                                >
                                    Barchasi
                                </li>
                                {categories.map((cat) => (
                                    <li
                                        key={cat}
                                        onClick={() => {
                                            setSelectedCategory(cat);
                                            setCurrentPage(1);
                                        }}
                                        className={`cursor-pointer capitalize ${
                                            selectedCategory === cat
                                                ? "font-bold bg-gradient-to-r from-[#3B9CFF] to-[#12169D] py-1 px-2 rounded-xl"
                                                : "text-[#FFFFFF]"
                                        }`}
                                    >
                                        {cat}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="flex flex-col w-full">
                        <div className="flex flex-wrap justify-center lg:justify-between gap-8">
                            {currentProducts.length > 0 ? (
                                currentProducts.map((item) => (
                                    <MahsulotlarCard
                                        key={item.id}
                                        item={item}
                                    />
                                ))
                            ) : (
                                <p className="text-center text-gray-500 w-full">
                                    Mahsulot topilmadi.
                                </p>
                            )}
                        </div>

                        {/* Pagination Controls */}
                        {totalPages > 1 && (
                            <div className="hidden lg:flex justify-center mt-8 gap-2">
                                <button
                                    onClick={() => paginate(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className="px-4 py-2 bg-[#12169D] text-white rounded-lg disabled:opacity-50"
                                >
                                    Oldingi
                                </button>

                                {pageNumbers.map((number) => (
                                    <button
                                        key={number}
                                        onClick={() => paginate(number)}
                                        className={`px-4 py-2 rounded-lg ${
                                            currentPage === number
                                                ? "bg-[#3B9CFF] text-white"
                                                : "bg-gray-200 text-black"
                                        }`}
                                    >
                                        {number}
                                    </button>
                                ))}

                                <button
                                    onClick={() => paginate(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    className="px-4 py-2 bg-[#12169D] text-white rounded-lg disabled:opacity-50"
                                >
                                    Keyingi
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                {totalPages > 1 && (
                    <div className="flex lg:hidden justify-center mt-8 gap-2">
                        <button
                            onClick={() => paginate(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="px-4 py-2 bg-[#12169D] text-white rounded-lg disabled:opacity-50"
                        >
                            Oldingi
                        </button>

                        {pageNumbers.map((number) => (
                            <button
                                key={number}
                                onClick={() => paginate(number)}
                                className={`px-4 py-2 rounded-lg ${
                                    currentPage === number
                                        ? "bg-[#3B9CFF] text-white"
                                        : "bg-gray-200 text-black"
                                }`}
                            >
                                {number}
                            </button>
                        ))}

                        <button
                            onClick={() => paginate(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 bg-[#12169D] text-white rounded-lg disabled:opacity-50"
                        >
                            Keyingi
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductClient;
