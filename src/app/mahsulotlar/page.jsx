import { GetProductData } from "@/service/queries/GetProductData";
import ProductClient from "./ProductClient";
import Image from "next/image";
import { LoyihalarimizSwiper } from "@/components/loyihalarimizSwiper/loyihalarimizCard";

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

            <div className="container mx-auto">
                <LoyihalarimizSwiper />
            </div>
        </>
    );
};

export default Mahsulotlar;
