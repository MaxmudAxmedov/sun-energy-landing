import { MahsulotlarCard } from "@/components/mahsulotlar-card/mahsulotlar-card";
import { GetProductData } from "@/service/queries/GetProductData";


const Mahsulotlar = async () => {
  const productData = (await GetProductData({ limit: "1000" })) || [];

  return (
    <>
      <div className="container lg:w-[1200px] mx-auto">
        <div id="mahsulotlar" className="mt-[87px] mb-[90px]">
          <h2 className="font-[700] text-[24px] mb-[52px] text-grey">
            Mahsulotlar
          </h2>
          <div className="flex flex-wrap justify-between gap-[39px]">
            {productData?.Data?.products?.map((item) => (
              <MahsulotlarCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Mahsulotlar;
