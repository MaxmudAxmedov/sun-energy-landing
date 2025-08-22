"use client";

import { LoyihalarimizSwiper } from "@/components/loyihalarimizSwiper/loyihalarimizCard";
import Image from "next/image";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";

export default function ProductPage() {
    const { id } = useParams();
    const searchParams = useSearchParams();

    const rawData = searchParams.get("data");
    const item = rawData ? JSON.parse(decodeURIComponent(rawData)) : null;

    console.log(item);
    return (
        <div className="container lg:max-w-[1200px] mx-auto mb-20">
            <div className="text-[#000]">
                <div className="flex relative mt-10">
                    <Link href={"/mahsulotlar"}>
                        <Image
                            src={"/back.svg"}
                            alt="Uyda ornatish"
                            width={30}
                            height={34}
                        />
                    </Link>

                    <h1 className="absolute left-[42%]">
                        Quyosh panelI Haqida ma‘lumot
                    </h1>
                </div>
                <h2 className="text-center text-[30px] my-10">{item?.name}</h2>
                <div className="flex justify-between items-center">
                    <div className="relative w-[500px] h-[570px]">
                        <Image
                            src={item?.photo}
                            alt="Uyda ornatish"
                            fill
                            className="object-contain"
                        />
                    </div>

                    <div className="w-[600px]">
                        <p className="text-[20px] mb-8">
                            Tejamkor va kuchli energiya manbai 22.5% energiya
                            samaradorligi Namlik va UV-ga chidamli Oson ulanish
                            <strong>10 yil kafolat</strong>
                        </p>

                        <div className="flex flex-col w-[260px]">
                            <span className="inline-block text-[22px] px-5 py-2.5 bg-[#000] text-[#fff] p-2 rounded-3xl">
                                Narxi:{" "}
                                {Number(item?.selling_price).toLocaleString()}{" "}
                                <small>So'm</small>
                            </span>
                            <span className="flex text-[22px] justify-between px-5 py-2.5 my-[40px] bg-[#6ACB20] text-[#fff] p-2 rounded-3xl">
                                <Image
                                    src={"/call.svg"}
                                    alt="Uyda ornatish"
                                    width={20}
                                    height={30}
                                />
                                Biz bilan bog'lanish
                            </span>
                            <span className="flex text-[22px] justify-between px-5 py-2.5 bg-[#FE5716] text-[#fff] p-2 rounded-3xl">
                                To'liq ma'lumot
                                <Image
                                    src={"/info-arrow.svg"}
                                    alt="Uyda ornatish"
                                    width={50}
                                    height={10}
                                />
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <LoyihalarimizSwiper />
        </div>
    );
}
