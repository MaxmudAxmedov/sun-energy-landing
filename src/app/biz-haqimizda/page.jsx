import { LoyihalarimizSwiper } from "@/components/loyihalarimizSwiper/loyihalarimizCard";
import Image from "next/image";
import React from "react";

const BizHaqimizda = () => {
    return (
        <div className="container lg:max-w-[1200px] mx-auto mt-20">
            <div className="flex justify-between">
                <div className="w-[45%]">
                    <h2 className="text-[#FE5716] text-[14px] font-[700] mb-2">
                        BRAVO SUN ENERGY GA HUSH KELIBSIZ
                    </h2>
                    <hr className="text-[#FE5716] w-[80px] h-[2px] mb-3" />
                    <p className="text-[30px] text-[#000] font-[700]">
                        BRAVO SUN ENERGY BILAN JAMIYATNI QUVVATLANTIRING
                    </p>

                    <p className="text-[#000] my-5">
                        Bizning “BRAVO SUN ENERGIES” korxonasi Xitoyning yirik
                        ishlab chiqaruvchilari bilan uzviy aloqa xizmati va
                        kelishuv asosida ish olib boradi. Bu esa bizning
                        korxonamiz xizmatlarini yanada yaxshilash hamda malakali
                        kadrlar bilan ishlash imkoniyatini beradi.
                    </p>

                    <div className="text-[#000] flex flex-col">
                        <strong>Ism Familya: Abdulla</strong>
                        <small>BSE direktori</small>
                    </div>
                </div>
                <div className="w-[50%] relative">
                    <Image
                        src="/imgs/about.png"
                        alt="Uyda ornatish"
                        width={750}
                        height={620}
                        className="mx-auto"
                    />

                    <span className="w-[200px] flex items-start gap-8 absolute right-0 bottom-0 bg-[#6ACC20] py-3 px-5 rounded-3xl">
                        <Image
                            src="/sertificate.svg"
                            alt="Uyda ornatish"
                            width={40}
                            height={25}
                            className="relative top-2"
                        />
                        <div>
                            <span className="text-[35px] font-[700] mt-[-4px]">5+</span> <br />
                            <small className="font-bold">Yil Tajriba</small>
                        </div>
                    </span>
                </div>
            </div>

            <LoyihalarimizSwiper />
        </div>
    );
};

export default BizHaqimizda;
