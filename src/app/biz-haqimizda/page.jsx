import { LoyihalarimizSwiper } from "@/components/loyihalarimizSwiper/loyihalarimizCard";
import React from "react";

const BizHaqimizda = () => {
    return (
        <>
            <div className="container lg:w-[1200px] mx-auto">
                <div
                    id="biz_haqimizda"
                    className="biz haqimizda mt-[87px] mb-[102px] "
                >
                    <h2 className="font-[700] text-[24px] text-grey mb-[25px] ">
                        Biz haqimizda
                    </h2>
                    <p className="font-[700] text-[18px] text-black mb-[42px]">
                        Nega bizni tanlashingiz kerak
                    </p>
                    <div className="flex flex-wrap gap-[32px] mx-auto mb-[65px] ">
                        <div className="bg-yellow rounded-[12px] w-[558px]">
                            <p className="font-[400] text-[14px] text-white py-[26px] px-[15px] ">
                                Bizning “BRAVO SUN ENERGIES” korxonasi Xitoyning
                                yirik ishlab chiqaruvchilari bilan uzviy aloqa
                                xizmati va kelishuv asosida ish olib boradi. Bu
                                esa bizning korxonamiz xizmatlarini yanada
                                yaxshilash hamda malakali kadrlar bilan ishlash
                                imkoniyatini beradi.
                            </p>
                        </div>
                        <div className="bg-yellow rounded-[12px] w-[558px]">
                            <p className="font-[400] text-[14px] text-white py-[26px] px-[15px] ">
                                “BRAVO SUN ENERGIES” korxonasi Quyosh
                                panellarini o’rnatmoqchi bo’lgan fuqoro yoki
                                korxonalar bilan doimiy aloqa markazi orqali
                                bog’lanib, ularda bo’layotgan savollarga javob
                                berish uchun 12/6 vaqt rejimida ish olib boradi
                            </p>
                        </div>
                        <div className="bg-yellow rounded-[12px] w-[558px]">
                            <p className="font-[400] text-[14px] text-white py-[26px] px-[15px] ">
                                Bizning korxonamiz tomonidan o’rnatilgan
                                stansiyalar uchun 1 yillik bepul servis xizmati
                                yo’lga qo’yilgan va har bir maxsulotning o’z
                                kafolat muddati bo’lib, ular maxsulot ishlab
                                chiqaruvchi tomonidan taqdim etilgan.
                            </p>
                        </div>
                        <div className="bg-yellow rounded-[12px] w-[558px]">
                            <p className="font-[400] text-[14px] text-white py-[26px] px-[15px] ">
                                Korxonamizning malakali mutaxasislari sizga o’z
                                xizmatlarini taqdim etish davomida sizga
                                qurilish-montaj ishlarida yaxshi tushuncha ham
                                berib boradi. Bu bilan sizda Quyosh panellariga
                                bo’lgan savollaringizga yechim topiladi.
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    id="loyihalar"
                    className="loyihalarimiz mt-[87px]  mb-[107px] text-black"
                >
                    <h2 className="font-[700] text-[24px] text-grey mb-[60px]">
                        Loyihalarimiz
                    </h2>
                    <div>
                        <LoyihalarimizSwiper />
                    </div>
                </div>
            </div>
        </>
    );
};

export default BizHaqimizda;
