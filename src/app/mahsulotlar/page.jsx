import { GetProductData } from "@/service/queries/GetProductData";
import ProductClient from "./ProductClient";

const Mahsulotlar = async () => {
    const productData = (await GetProductData({ limit: "1000" })) || [];
    const allProducts = productData?.Data?.products || [];

    const uniqueCategories = Array.from(
        new Set(allProducts.map((item) => item.category_name))
    );

    return (
        <ProductClient products={allProducts} categories={uniqueCategories} />
    );
};

export default Mahsulotlar;
