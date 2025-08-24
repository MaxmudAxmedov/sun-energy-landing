"use client";

import React, { useState, useMemo } from "react";
import { HisoblashCard } from "../Hisoblash-Card/hisoblash-card";
import { toast } from "react-toastify";
import Image from "next/image";
const categoryOnGrid = [
    "Inverter On-grid",
    "Quyosh panellari",
    "Metall kanstruksiya ",
];
const categoryHybrid = [
    "Inverter Hybrid",
    "Quyosh panellari",
    "Metall kanstruksiya ",
    "Akkumliyator ",
];

const kwtOnGrid = [3, 5, 6, 10, 12, 15, 20, 25, 30, 40, 50, 100, 125];
const kwtHybrid = [3.2, 4.2, 5, 6.2, 8.5, 10, 11, 12];

export default function HisoblashComp({ products }) {
    const [selectedPowerSystem, setSelectedPowerSystem] = useState("on-grid");
    const [selectedKvt, setSelectedKvt] = useState();
    const [step, setStep] = useState(0);
    const [selectedProducts, setSelectedProducts] = useState({});
    const [showCart, setShowCart] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({ name: "", phone: "" });
    const selectedWatt = selectedKvt ? parseFloat(selectedKvt) * 1000 : 0;

    const categoryOptions = useMemo(
        () =>
            selectedPowerSystem === "on-grid" ? categoryOnGrid : categoryHybrid,
        [selectedPowerSystem]
    );

    const kwtOptions = useMemo(
        () => (selectedPowerSystem === "on-grid" ? kwtOnGrid : kwtHybrid),
        [selectedPowerSystem]
    );

    const currentCategory = categoryOptions[step] || null;

    const filteredProducts = products.filter((item) => {
        if (!currentCategory) return false;
        const isNotExcluded =
            item.category_name?.toLowerCase() !== "elektrika aksesuarlari";
        const matchesCategory =
            item.category_name?.toLowerCase() === currentCategory.toLowerCase();
        const inverterCategories = ["Inverter On-grid", "Inverter Hybrid"];

        if (inverterCategories.includes(currentCategory)) {
            const matchesPowerSystem =
                item.power_system?.toLowerCase() === selectedPowerSystem;
            return matchesPowerSystem && matchesCategory && isNotExcluded;
        }
        return matchesCategory && isNotExcluded;
    });

    const limitedProducts = filteredProducts
        .map((item) => {
            const inverterCategories = ["Inverter On-grid", "Inverter Hybrid"];
            if (!selectedKvt) return { ...item, neededCount: null };

            if (inverterCategories.includes(currentCategory)) {
                return item.watt === selectedWatt
                    ? { ...item, neededCount: 1 }
                    : null;
            } else if (currentCategory === "Akkumliyator ") {
                const kvt = parseFloat(selectedKvt);
                let count = 0;

                if (kvt === 3.2 || kvt === 4.2) {
                    if (item.watt === 100) count = 2;
                    if (item.watt === 200) count = 1;
                } else if (kvt === 5 || kvt === 6.2 || kvt === 8.5) {
                    if (item.watt === 100) count = 4;
                    if (item.watt === 200) count = 2;
                } else {
                    if (item.watt === 100) count = 4;
                    if (item.watt === 200) count = 2;
                }

                return { ...item, neededCount: count };
            } else {
                const count = item.watt
                    ? Math.round(selectedWatt / item.watt)
                    : null;
                return { ...item, neededCount: count };
            }
        })
        .filter(Boolean);

    const handleSelectProduct = (product) => {
        setSelectedProducts((prev) => ({
            ...prev,
            [currentCategory]: product,
        }));
    };

    const handleNext = () => {
        if (step < categoryOptions.length - 1) {
            setStep((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (step > 0) setStep((prev) => prev - 1);
    };

    const allStepsCompleted =
        step === categoryOptions.length - 1 &&
        Object.keys(selectedProducts).length === categoryOptions.length;

    const totalSum = Object.values(selectedProducts).reduce((acc, product) => {
        const count = product.neededCount || 1;
        const price = product.selling_price || 0;
        return acc + price * count;
    }, 0);

    const handleSubmitOrder = async () => {
        const orderProducts = Object.entries(selectedProducts).map(
            ([category, product]) => ({
                category,
                product_name: product.name,
                quantity: product.neededCount,
                price: product.selling_price,
                total: product.selling_price * product.neededCount,
            })
        );

        const productsText = orderProducts
            .map(
                (item, index) =>
                    `${index + 1}) ${item.category}: ${item.product_name} | ${
                        item.quantity
                    } dona | ${item.total.toLocaleString()} so'm`
            )
            .join("\n");

        const message = `
💡 Yangi Buyurtma:
Ismi: ${formData.name}
Telefon: ${formData.phone}
Stansiya turi: ${selectedPowerSystem}
Kwt: ${selectedKvt} kwt
Mahsulotlar:
${productsText}
Accessory: ${(selectedKvt * 300000).toLocaleString()} so'm
O'rnatish: ${(selectedKvt * 300000).toLocaleString()} so'm
Mahsulotlar : ${totalSum.toLocaleString()} so'm
Umumiy summa: ${(
            selectedKvt * 300000 +
            selectedKvt * 300000 +
            totalSum
        ).toLocaleString()} so'm
        `;

        const url = `https://api.telegram.org/bot7756346699:AAGJvRdpDiVqLRUdIoHkIL9dGUfnJlBSUoQ/sendMessage`;

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: "-1002287931753",
                    text: message,
                }),
            });

            if (response.ok) {
                toast.success("Muvaffaqiyatli yuborildi");
                setShowForm(false);
                setShowCart(false);
                setSelectedProducts({});
                setSelectedKvt("");
                setStep(0);
                setFormData({ name: "", phone: "" });
            } else {
                toast.error("Xatolik yuz berdi");
            }
        } catch (error) {
            toast.error("Xatolik yuz berdi");
            console.error(error);
        }
    };

    return (
        <div className="mb-6">
            <div className="flex justify-between py-10 container lg:max-w-[1200px] mx-auto text-black">
                <div className="w-[870px]">
                    <h2 className="text-[48px]">
                        Kerakli quvvat va uskunalarni <br /> hisoblang
                    </h2>
                    <h3 className="text-[16px] md:text-[19px] font-[400] mb-[20px]">
                        “Hurmatli mijoz, siz xarid qilmasdan turib <br />{" "}
                        mahsulotlarni tanlashingiz mumkin, biz hisoblab
                        beramiz”.
                    </h3>
                    <div className="text-[15px] md:text-[18px]">
                        <p>1 - Stansiya turini tanlang.</p>
                        <p>2 - Kwt ni tanlang.</p>
                        <p>3 - Mahsulotlarni ketma-ket tanlang.</p>
                    </div>
                </div>
                <div>
                    <Image
                        src="/hisoblash.png"
                        alt="Uyda ornatish"
                        width={500}
                        height={270}
                        // className="mx-auto absolute right-4 bottom-4"
                    />
                </div>
            </div>
            <div className="py-[90px] bg-white">
                <div className="flex justify-center container lg:max-w-[1200px] mx-auto">
                    {categoryOptions.map((category, index) => (
                        <div key={category} className="flex items-center">
                            <div
                                className={`flex items-center justify-center w-8 h-8 rounded-full text-white 
                                    ${
                                        index === step
                                            ? "bg-[#3B9CFF] text-black font-bold"
                                            : index < step
                                            ? "bg-green-500"
                                            : "bg-[#8B8B8B]"
                                    }`}
                            >
                                {index < step ? "✔" : index + 1}
                            </div>
                            <span
                                className={`ml-2 text-sm ${
                                    index === step
                                        ? "font-semibold text-black"
                                        : "text-gray-500"
                                }`}
                            >
                                {category}
                            </span>
                            {index !== categoryOptions.length - 1 && (
                                <div className="w-10 h-[2px] bg-gray-300 mx-2"></div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="container lg:max-w-[1200px] mx-auto flex items-center flex-col-reverse md:flex-row justify-center md:justify-between md:gap-[20px] lg:gap-[72px] mt-[35px] mb-5 md:mb-[57px]">
                    <div>
                        {/* <div className="flex gap-[169px] items-center mb-[20px]">
                        <h4 className="text-[14px] md:text-[17px] font-[400] text-black">
                            Stansiya turini tanlang
                        </h4>
                        <p className="text-black font-[400] text-[14px] md:text-[17px]">
                            <span className="text-yellow">kwt</span> ni tanlang
                        </p>
                    </div> */}

                        <div className="w-[490px] flex flex-col p-7 rounded-2xl justify-between gap-[25px] mb-6 shadow">
                            <ul className="flex flex-col gap-4">
                                {["on-grid", "hybrid"].map((type) => (
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
                                                    setSelectedPowerSystem(
                                                        type
                                                    );
                                                    setSelectedKvt("");
                                                    setSelectedProducts({});
                                                    setStep(0);
                                                }}
                                                className="sr-only peer"
                                            />
                                            <div className="w-4 h-4 rounded-full border border-gray-400 peer-checked:bg-[#3B9CFF] peer-checked:border-[#3B9CFF] transition-all" />

                                            <div className="flex flex-col">
                                                <span className="capitalize text-[12px] md:text-[14px]">
                                                    {type}
                                                </span>
                                                <p>
                                                    {type == "on-grid"
                                                        ? "Tarmoqda ishlovchi – Elektr tarmog‘iga ulangan"
                                                        : "Tarmoq + batareya zaxirasi"}
                                                </p>
                                            </div>
                                        </label>
                                    </li>
                                ))}
                            </ul>

                            <div>
                                <p className="text-black mb-2">
                                    Kerakli (kwt) ni tanlang
                                </p>
                                <select
                                    onChange={(e) => {
                                        setSelectedKvt(e.target.value);
                                        setSelectedProducts({});
                                        setStep(0);
                                    }}
                                    value={selectedKvt || ""}
                                    className="bg-[#F9F9F9] w-full text-left rounded-[12px] p-3 text-[#3B9CFF] outline-none text-[12px] md:text-[14px] appearance-none font-[700] leading-[100%]"
                                >
                                    <option value="">Kwt</option>
                                    {kwtOptions.map((kvt) => (
                                        <option key={kvt} value={kvt}>
                                            {kvt} kwt
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Image
                            src="/hisoblash-2.png"
                            alt="Uyda ornatish"
                            width={500}
                            height={270}
                            // className="mx-auto absolute right-4 bottom-4"
                        />
                    </div>
                </div>

                <div className="container lg:max-w-[1200px] mx-auto">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={handlePrev}
                            disabled={step === 0}
                            className="px-4 py-2 bg-[#fff] rounded text-[#DFDFDF] border border-[#DFDFDF]"
                        >
                            Orqaga
                        </button>
                        <p className="text-[#3B9CFF]">
                            {step + 1}/
                            {selectedPowerSystem == "on-grid" ? 3 : 4} qadam
                        </p>
                        <button
                            onClick={handleNext}
                            disabled={!selectedProducts[currentCategory]}
                            className="px-4 py-2 bg-[#3B9CFF] rounded"
                        >
                            Keyingi
                        </button>
                    </div>
                </div>
            </div>

            <div className="container lg:max-w-[1200px] mx-auto">
                {showForm && (
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-white rounded-lg p-6 w-full max-w-[500px] text-black">
                            <h2 className="text-xl font-bold mb-4">
                                Ariza qoldirish
                            </h2>
                            <div className="mb-4">
                                <label className="block mb-1">Ism:</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            name: e.target.value,
                                        })
                                    }
                                    className="w-full border p-2 rounded"
                                    placeholder="Ismingiz"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1">Telefon:</label>
                                <input
                                    type="text"
                                    value={formData.phone}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            phone: e.target.value,
                                        })
                                    }
                                    className="w-full border p-2 rounded"
                                    placeholder="Telefon raqam"
                                />
                            </div>
                            <div className="flex justify-between">
                                <button
                                    onClick={() => setShowForm(false)}
                                    className="px-4 py-2 bg-gray-300 rounded"
                                >
                                    Bekor qilish
                                </button>
                                <button
                                    onClick={handleSubmitOrder}
                                    className="px-4 py-2 bg-[#3B9CFF] text-white rounded"
                                >
                                    Yuborish
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {selectedKvt && !allStepsCompleted && (
                    <div className="mt-6">
                        {/* <h4 className="text-center text-[18px] font-semibold mb-4">
                            {currentCategory}
                        </h4> */}

                        <div className="relative grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-4 text-black pb-5">
                            {limitedProducts.length ? (
                                limitedProducts.map((item) => (
                                    <div
                                        key={item.id}
                                        onClick={() =>
                                            handleSelectProduct(item)
                                        }
                                        className={`cursor-pointer ${
                                            selectedProducts[currentCategory]
                                                ?.id === item.id
                                                ? "opacity-50"
                                                : "border-gray-300"
                                        }`}
                                    >
                                        <HisoblashCard
                                            selectedKvt={selectedKvt}
                                            item={item}
                                            step={step}
                                        />
                                    </div>
                                ))
                            ) : (
                                <p className="absolute top-[-15px] text-[20px]">
                                    Tanlangan kwt bo'yicha mahsulot topilmadi
                                </p>
                            )}
                        </div>

                        {/* <div className="flex justify-between mt-8">
                        <button
                            onClick={handlePrev}
                            disabled={step === 0}
                            className="px-4 py-2 bg-gray-300 rounded"
                        >
                            Orqaga
                        </button>
                        {step === categoryOptions.length - 1 ? (
                            <button
                                onClick={() => setShowCart(true)}
                                disabled={!selectedProducts[currentCategory]}
                                className="px-4 py-2 bg-yellow rounded"
                            >
                                Hisoblash
                            </button>
                        ) : (
                            <button
                                onClick={handleNext}
                                disabled={!selectedProducts[currentCategory]}
                                className="px-4 py-2 bg-yellow rounded"
                            >
                                Keyingi
                            </button>
                        )}
                    </div> */}
                    </div>
                )}

                {/* {!selectedKvt && (
                    <div className="flex flex-col justify-center items-center text-black">
                        <img width={100} src="icons/no-data.png" alt="" />
                        <p className="text-[18px]">
                            Sizda hali mahsulot yuq, kwt ni tanlang
                        </p>
                    </div>
                )} */}

                {allStepsCompleted && (
                    <div className="flex justify-between mt-8 p-4 bg-[#F9F9F9] w-[900px] mx-auto">
                        <div className="flex justify-center items-center z-10">
                            <div className="bg-white rounded-lg p-6 w-full max-w-[640px] text-black">
                                <p className="text-[20px] font-bold mb-4">
                                    {selectedKvt} kwt uchun tanlangan
                                    mahsulotlar
                                </p>
                                {Object.entries(selectedProducts).map(
                                    ([cat, product]) => (
                                        <div
                                            key={cat}
                                            className="mb-2 text-left"
                                        >
                                            <p>
                                                <strong>{cat}:</strong>{" "}
                                                {product.name} |{" "}
                                                {product.neededCount} dona
                                            </p>

                                            <p className="bg-[#F9F9F9] p-2">
                                                {(
                                                    product.selling_price *
                                                    (product.neededCount || 1)
                                                ).toLocaleString()}{" "}
                                                so'm
                                            </p>
                                        </div>
                                    )
                                )}
                                <div className="gap-2">
                                    <div>
                                        <strong className="text-left block">
                                            Accessory:
                                        </strong>
                                        <p className="bg-[#F9F9F9] p-2 w-full text-left">
                                            {(
                                                selectedKvt * 300000
                                            ).toLocaleString()}{" "}
                                            sum
                                        </p>
                                    </div>

                                    <div>
                                        <strong className="text-left block">
                                            O'rnatish:
                                        </strong>
                                        <p className="bg-[#F9F9F9] p-2 w-full text-left">
                                            {(
                                                selectedKvt * 300000
                                            ).toLocaleString()}{" "}
                                            sum
                                        </p>
                                    </div>

                                    <div>
                                        <strong className="text-left block">
                                            Mahsulotlar:
                                        </strong>
                                        <p className="bg-[#F9F9F9] p-2 w-full text-left">
                                            {totalSum.toLocaleString()} sum
                                        </p>
                                    </div>

                                    <div>
                                        <strong className="text-left block">
                                            Umumiy summa:
                                        </strong>
                                        <p className="bg-[#F9F9F9] p-2 w-full text-left">
                                            {(
                                                selectedKvt * 300000 +
                                                selectedKvt * 300000 +
                                                totalSum
                                            ).toLocaleString()}{" "}
                                            sum
                                        </p>
                                    </div>
                                </div>

                                <div className="flex justify-between">
                                    {/* <button
                                        onClick={() => setShowCart(false)}
                                        className="mt-4 px-4 py-2 bg-yellow rounded text-white"
                                    >
                                        Yopish
                                    </button> */}
                                    <button
                                        onClick={() => {
                                            setShowForm(true);
                                            setShowCart(false);
                                        }}
                                        className="w-full mt-4 px-4 py-2 bg-[#3B9CFF] rounded text-white"
                                    >
                                        Ariza qoldirish
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="h-[400px]">
                            <Image
                                src="/ariza-bg.png"
                                alt="Uyda ornatish"
                                width={662}
                                height={400}
                                className="object-contain w-full h-[620px]"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
