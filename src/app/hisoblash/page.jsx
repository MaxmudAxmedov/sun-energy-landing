import HisoblashComp from "@/components/Hisoblash-Comp/hisoblash-comp";
import { GetProductData } from "@/service/queries/GetProductData";

export default async function HisoblashPage() {
    const productData = await GetProductData({ limit: "1000" });
    const products = productData?.Data?.products || [];
    console.log(products); // []

    return (
        <div>
            <HisoblashComp products={products} />
        </div>
    );
}
