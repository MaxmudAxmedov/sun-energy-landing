import Image from "next/image";

import { LoyihalarimizSwiper } from "@/components/loyihalarimizSwiper/loyihalarimizCard";
import WhyUse from "@/components/why-use/WhyUse";

export default function Home() {
    return (
        <div className="container mx-auto">
            <div className="flex justify-between mt-7 md:mt-[140px]">
                <div
                    className={`bg-[#FE5716] p-6 md:py-[105] md:px-[50px] w-[48%] rounded-[30px] text-center`}
                >
                    <Image
                        src="/uyda-ornatish.svg"
                        alt="Uyda ornatish"
                        width={130}
                        height={130}
                        className="mx-auto w-[40px] h-[40px] sm:w-[80px] sm:h-[80px] md:w-[130px] md:h-[130px]"
                    />
                    <h2 className="my-4 md:leading-[80px] text-[15px] md:text-[30px] font-bold">
                        Uyda o‘rnatish
                    </h2>
                    <p className="md:leading-[32px] text-[12px] md:text-[28px] max-w-[470px] mx-auto">
                        Quyosh panellari, energiya saqlash, issiqlik
                        ventilyatsiyasi va EV quvvatlash tizimlari.
                    </p>
                </div>
                <div
                    className={`bg-[#3B9CFF] p-6 md:py-[105] md:px-[50px] w-[48%] rounded-[30px] text-center`}
                >
                    <Image
                        src="/tijorat-ornatish.svg"
                        alt="Uyda ornatish"
                        width={130}
                        height={130}
                        className="mx-auto w-[40px] h-[40px] sm:w-[80px] sm:h-[80px] md:w-[130px] md:h-[130px]"
                    />
                    <div>
                        <h2 className="my-4 md:leading-[80px] text-[15px] md:text-[30px] font-bold">
                            Tijorat ob’ektlariga o‘rnatish
                        </h2>
                        <p className="md:leading-[32px] text-[12px] md:text-[28px] max-w-[470px] mx-auto">
                            Quyosh panellari, energiya saqlash, issiqlik
                            ventilyatsiyasi va EV quvvatlash tizimlari.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-[30px] md:mt-[100px] text-black">
                <div className="flex justify-between flex-col md:flex-row">
                    <div className="w-full md:w-[55%]">
                        <small className="text-[10px] md:text-[16px] font-bold tracking-[10%]">
                            Quyosh Energiyasiga Xush Kelibsiz — Energiya
                            Tejashni Boshlang!
                        </small>
                        <br />
                        <span className="h-[2px] w-[40%] max:w-[409px] bg-[#E5E5E5] inline-block"></span>

                        <h2 className="text-[28px] md:text-[40px] lg:text-[60px] font-[700] leanding-[60px]">
                            Biznes energiyasini boshqarishni osonlashtiramiz
                        </h2>
                    </div>
                    <div className="w-full md:w-[40%]">
                        <p className="text-[12px] md:text-[18px] md:leading-[32px]">
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

            <div className="mt-10 mb-6">
                <div className="grid grid-cols-12 grid-rows-3 md:grid-rows-4 gap-4 w-full">
                    <div className="col-span-12 md:col-span-6 p-[40px] row-span-1 md:row-span-2 bg-cover bg-center rounded-[30px] overflow-hidden bg-[url(/imgs/batareya-card.png)]">
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

                    {/* mobile */}
                    <div className="md:hidden block col-span-6 md:col-span-3 p-[40px] row-span-1 md:row-span-2 bg-cover bg-center rounded-[30px] overflow-hidden bg-[url(/imgs/invertor.png)]">
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
                    <div className="md:hidden block col-span-6 md:col-span-3 p-[40px] row-span-1 md:row-span-2 bg-cover bg-center rounded-[30px] overflow-hidden bg-[url(/imgs/shamol-energiya.png)]">
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

                    <div className="col-span-12 md:col-span-6 p-[40px] row-span-1 md:row-span-4 bg-cover bg-center rounded-[30px] overflow-hidden bg-[url(/imgs/qayta-tiklanuvchi.png)]">
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

                    {/* desktop */}
                    <div className="hidden md:block col-span-6 md:col-span-3 p-[40px] row-span-2 bg-cover bg-center rounded-[30px] overflow-hidden bg-[url(/imgs/invertor.png)]">
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
                    <div className="hidden md:block col-span-6 md:col-span-3 p-[40px] row-span-2 bg-cover bg-center rounded-[30px] overflow-hidden bg-[url(/imgs/shamol-energiya.png)]">
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

            <LoyihalarimizSwiper />

            <WhyUse />
        </div>
    );
}
