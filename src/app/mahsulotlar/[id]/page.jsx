"use client";

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

            <div className="mb-[150px] mt-[150px]">
                <div className="text-black text-center mb-14">
                    <h2 className="text-[16px] font-[700] uppercase">
                        So‘nggi loyihalar
                    </h2>
                    <span className="w-[620px] h-[2px] inline-block bg-[#E5E5E5]"></span>
                    <p className="text-[60px] font-[700]">
                        Eng so‘nggi o‘rnatishlar
                    </p>
                </div>

                <div className="flex gap-10">
                    <div className="relative w-[48%] h-[380px] bg-[#555555] rounded-[30px]">
                        <div className="flex flex-col justify-between absolute bottom-[-100px] left-[38px] w-[448px] h-[210px] rounded-[30px] bg-white text-black p-[40px]">
                            <h3 className="font-[700] text-[22px]">
                                Barqaror infratuzilmani ishlab chiqadi va
                                boshqaradi
                            </h3>
                            <span className="flex justify-baseline items-center">
                                <p className="text-[32px] landscape-[30px] text-[#FE5716] font-[700]">
                                    250.43
                                </p>
                                <p className="mt-2 ml-4 text-[16px] landscape-[38px]">
                                    KWP SYSTEM
                                </p>
                            </span>

                            <Image
                                src="/arrow-right.svg"
                                alt="Uyda ornatish"
                                width={45}
                                height={45}
                                className="mx-auto absolute right-4 bottom-4"
                            />
                        </div>
                    </div>
                    <div className="relative w-[48%] h-[380px] bg-[#555555] rounded-[30px]">
                        <div className="flex flex-col justify-between absolute bottom-[-100px] left-[38px] w-[448px] h-[210px] rounded-[30px] bg-white text-black p-[40px]">
                            <h3 className="font-[700] text-[22px]">
                                Toshkentdagi Ibn Sino Akademiyasi (bauder
                                tizimi)
                            </h3>
                            <span className="flex justify-baseline items-center">
                                <p className="text-[32px] landscape-[30px] text-[#FE5716] font-[700]">
                                    250.43
                                </p>
                                <p className="mt-2 ml-4 text-[16px] landscape-[38px]">
                                    KWP SYSTEM
                                </p>
                            </span>

                            <Image
                                src="/arrow-right.svg"
                                alt="Uyda ornatish"
                                width={45}
                                height={45}
                                className="mx-auto absolute right-4 bottom-4"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
