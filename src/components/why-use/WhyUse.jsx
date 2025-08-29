import Image from "next/image";
import React from "react";

export default function WhyUse() {
    return (
        <div className="flex justify-between flex-col lg:flex-row my-[80px]">
            <div>
                <h2 className="text-[#FE5716] text-[16px] font-[700]">
                    Chiqindisiz dunyo
                </h2>
                <p className="text-[28px] md:text-[40px] lg:text-[60px] text-black font-[700]">
                    Nega aynan Biz?
                </p>

                <ul className="flex flex-col gap-2  min-w-[400px] max-w-[574px] items-start">
                    <li className="flex justify-between items-center text-black">
                        <Image
                            src="/time.svg"
                            alt="time"
                            width={100}
                            height={100}
                            className="mx-auto"
                        />
                        <div>
                            <p className="text-[18px] md:text-[26px] font-bold mb-2.5">
                                Vaqtingizni tejang
                            </p>
                            <p className="text-[14px] md:text-[18px]">
                                Atigi bitta forma to‘ldirib, eng yaxshi 3 ta
                                taklifga ega bo‘ling
                            </p>
                        </div>
                    </li>
                    <li className="flex justify-between items-center text-black">
                        <Image
                            src="/money.svg"
                            alt="time"
                            width={100}
                            height={100}
                            className="mx-auto"
                        />
                        <div>
                            <p className="text-[18px] md:text-[26px] font-bold mb-2.5">
                                Pulni tejash – oson!
                            </p>
                            <p className="text-[14px] md:text-[18px]">
                                Tanlab olingan yetkazib beruvchilardan eng qulay
                                narxlar
                            </p>
                        </div>
                    </li>
                    <li className="flex justify-between items-center text-black">
                        <Image
                            src="/services.svg"
                            alt="time"
                            width={100}
                            height={100}
                            className="mx-auto"
                        />
                        <div>
                            <p className="text-[18px] md:text-[26px] font-bold mb-2.5">
                                Majburiyatsiz, bepul xizmat
                            </p>
                            <p className="text-[14px] md:text-[18px]">
                                Hech qanday to‘lovlarsiz, 3 ta taklifni oling
                            </p>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="mt-4 lg:mt-0">
                <iframe
                    className="rounded-[30px] w-full max-w-[800px] h-[478px]"
                    src="https://www.youtube.com/embed/VIg8qpI5b3Y?si=VAyrxLDv-tlONHoL"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>

                <div className="bg-[#6ACC20] rounded-4xl mt-2.5">
                    <span className="inline-block w-[50%] p-4 md:p-10">
                        <p className="uppercase">Qo‘ng‘iroq qiling:</p>
                        <a href="tel:+998944808804" className="text-[18px] md:text-[24px]">
                            +998 94 480-88-04
                        </a>
                    </span>
                    <span className="inline-block bg-[#ffff] w-[50%] rounded-4xl p-4 md:p-10">
                        <p className="text-black uppercase">Telegram:</p>
                        <a
                            href="https://t.me/BravoSunEnergy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#6ACC20] text-[18px] md:text-[24px]"
                        >
                            @BravoSunEnergy
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
}
