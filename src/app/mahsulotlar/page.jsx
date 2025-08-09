import { GetProductData } from "@/service/queries/GetProductData";
import ProductClient from "./ProductClient";
import Image from "next/image";

const Mahsulotlar = async () => {
    const productData = (await GetProductData({ limit: "1000" })) || [];
    const allProducts = productData?.Data?.products || [];

    const uniqueCategories = Array.from(
        new Set(allProducts.map((item) => item.category_name))
    );

    return (
        <>
            <ProductClient
                products={allProducts}
                categories={uniqueCategories}
            />

            <div className="mb-[150px] container mx-auto">
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
        </>
    );
};

export default Mahsulotlar;
