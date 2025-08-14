import Image from "next/image";
import React from "react";
import WhyUse from "../why-use/WhyUse";

export default function ServicesType() {
    return (
        <div className="container mx-auto">
            <div className="flex justify-between mt-[140px]">
                <div
                    className={`bg-[#FE5716] py-[105] px-[50px] w-[48%] rounded-[30px] text-center`}
                >
                    <Image
                        src="/uyda-ornatish.svg"
                        alt="Uyda ornatish"
                        width={130}
                        height={130}
                        className="mx-auto"
                    />
                    <h2 className="leading-[80px] text-[30px] font-bold">
                        Uyda o‘rnatish
                    </h2>
                    <p className="leading-[32px] max-w-[470px] mx-auto">
                        Quyosh panellari, energiya saqlash, issiqlik
                        ventilyatsiyasi va EV quvvatlash tizimlari.
                    </p>
                </div>
                <div
                    className={`bg-[#3B9CFF] py-[105] px-[50px] w-[48%] rounded-[30px] text-center`}
                >
                    <Image
                        src="/tijorat-ornatish.svg"
                        alt="Uyda ornatish"
                        width={130}
                        height={130}
                        className="mx-auto"
                    />
                    <div>
                        <h2 className="leading-[80px] text-[30px] font-bold">
                            Tijorat ob’ektlariga o‘rnatish
                        </h2>
                        <p className="leading-[32px] max-w-[470px] mx-auto">
                            Quyosh panellari, energiya saqlash, issiqlik
                            ventilyatsiyasi va EV quvvatlash tizimlari.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-[100px] text-black">
                <div className="flex justify-between">
                    <div className="w-[55%]">
                        <small className="text-[16px] font-bold tracking-[10%]">
                            Quyosh Energiyasiga Xush Kelibsiz — Energiya
                            Tejashni Boshlang!
                        </small>
                        <span className="h-[2px] w-[409px] bg-[#E5E5E5] inline-block"></span>

                        <h2 className="text-[60px] font-[700] leanding-[60px]">
                            Biznes energiyasini boshqarishni osonlashtiramiz
                        </h2>
                    </div>
                    <div className="w-[40%]">
                        <p className="text-[18px] leading-[32px]">
                            Qayta tiklanuvchi energiya yechimlari bo‘yicha
                            yetakchi kompaniya bo‘lib, O‘zbekiston bo‘ylab
                            barqaror energiya manbalaridan foydalanish
                            usullarini inqilobiy tarzda o‘zgartirib va yangidan
                            belgilab bermoqda. Veztaz energiya bilan
                            ta’minlashda faoliyat olib bormoqda.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-10">
                <div className="grid grid-cols-12 grid-rows-5 gap-4 w-full">
                    <div className="col-span-6 p-[40px] row-span-2 bg-cover bg-center rounded-[30px] overflow-hidden bg-[url(/imgs/batareya-card.png)]">
                        <span className="w-[100px] h-[100px] rounded-[50%] mb-[90px] bg-[#C9F529] flex justify-center items-center">
                            <Image
                                src="/batareya.svg"
                                alt="Uyda ornatish"
                                width={50}
                                height={50}
                                className="mx-auto"
                            />
                        </span>
                        <h3 className="text-[30px] font-[700] leanding-[40px]">
                            Batareya Saqlash
                        </h3>
                    </div>

                    <div className="col-span-6 p-[40px] row-span-4 bg-cover bg-center rounded-[30px] overflow-hidden bg-[url(/imgs/qayta-tiklanuvchi.png)]">
                        <div className="flex flex-col justify-between h-[100%]">
                            <span className="w-[100px] h-[100px] rounded-[50%] mb-[90px] bg-[#C9F529] flex justify-center items-center">
                                <Image
                                    src="/batareya.svg"
                                    alt="Uyda ornatish"
                                    width={50}
                                    height={50}
                                    className="mx-auto"
                                />
                            </span>
                            <div>
                                <h3 className="text-[30px] font-[700] leanding-[40px]">
                                    Qayta Tiklanuvchi Energiya
                                </h3>
                                <p>
                                    Tabiatni asrash uchun katta xarajat shart
                                    emas.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-3 p-[40px] row-span-2 bg-cover bg-center rounded-[30px] overflow-hidden bg-[url(/imgs/invertor.png)]">
                        <span className="w-[100px] h-[100px] rounded-[50%] mb-[90px] bg-[#C9F529] flex justify-center items-center">
                            <Image
                                src="/batareya.svg"
                                alt="Uyda ornatish"
                                width={50}
                                height={50}
                                className="mx-auto"
                            />
                        </span>
                        <h3 className="text-[30px] font-[700] leanding-[40px]">
                            Invertor
                        </h3>
                    </div>
                    <div className="col-span-3 p-[40px] row-span-2 bg-cover bg-center rounded-[30px] overflow-hidden bg-[url(/imgs/shamol-energiya.png)]">
                        <span className="w-[100px] h-[100px] rounded-[50%] mb-[90px] bg-[#C9F529] flex justify-center items-center">
                            <Image
                                src="/batareya.svg"
                                alt="Uyda ornatish"
                                width={50}
                                height={50}
                                className="mx-auto"
                            />
                        </span>
                        <h3 className="text-[30px] font-[700] leanding-[40px]">
                            Shamol Energiyasi
                        </h3>
                    </div>
                </div>
            </div>

            <div className="mb-[150px]">
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

            <WhyUse />
        </div>
    );
}
