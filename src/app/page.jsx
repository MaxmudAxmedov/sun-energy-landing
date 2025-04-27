import React from "react";
import { GetProductCategoryData } from "@/service/queries/GetProductCategory";
import { GetProductData } from "@/service/queries/GetProductData";
import {
  LoyihalarimizCard,
  LoyihalarimizSwiper,
} from "@/components/loyihalarimizSwiper/loyihalarimizCard";
export default async function Home() {
  // const productData = await GetProductData();
  const data = await GetProductCategoryData();
  // console.log(productData, "hello");
  console.log(data.Data.product_categories, "hello12");

  return (
    <>
      <div className="container lg:w-[1200px] mx-auto">
        <div id="xizmatlar" className="service h-[400px] bg-blue-200">
          {data?.Data?.product_categories?.map((item) => (
            <div key={item.id}>
              <h1 className="text-black2">{item.name}</h1>
            </div>
          ))}
        </div>
        <div id="mahsulotlar" className="mt-100px bg-red-400 h-[400] ">
          Mahsulotlar
        </div>
        <div id="loyihalar" className="loyihalarimiz  mb-[64px] text-black">
          <h2 className="font-[700] text-[24px] text-grey mb-[60px]">
            Loyihalarimiz
          </h2>
          <div>
            <LoyihalarimizSwiper />
          </div>
        </div>
        <div id="biz_haqimizda" className="biz haqimizda  ">
          <h2 className="font-[700] text-[24px] text-grey mb-[25px] ">
            Biz haqimizda
          </h2>
          <p className="font-[700] text-[18px] text-black mb-[42px]">
            Nega bizni tanlashingiz kerak
          </p>
          <div className="flex flex-wrap gap-[32px] mx-auto mb-[65px] ">
            <div className="bg-yellow rounded-[12px] w-[558px]">
              <p className="font-[400] text-[14px] text-white py-[26px] px-[15px] ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facilis est ut illo dignissimos dolorem impedit libero qui sit
                aliquid placeat ducimus excepturi aperiam, tenetur tempore
                repellendus architecto commodi nam cupiditate at quidem nesciunt
                odit optio! Consequuntur fuga harum similique fugiat quaerat
                temporibus, doloribus expedita error architecto ratione hic
                repellat praesentium.
              </p>
            </div>
            <div className="bg-yellow rounded-[12px] w-[558px]">
              <p className="font-[400] text-[14px] text-white py-[26px] px-[15px] ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facilis est ut illo dignissimos dolorem impedit libero qui sit
                aliquid placeat ducimus excepturi aperiam, tenetur tempore
                repellendus architecto commodi nam cupiditate at quidem nesciunt
                odit optio! Consequuntur fuga harum similique fugiat quaerat
                temporibus, doloribus expedita error architecto ratione hic
                repellat praesentium.
              </p>
            </div>
            <div className="bg-yellow rounded-[12px] w-[558px]">
              <p className="font-[400] text-[14px] text-white py-[26px] px-[15px] ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facilis est ut illo dignissimos dolorem impedit libero qui sit
                aliquid placeat ducimus excepturi aperiam, tenetur tempore
                repellendus architecto commodi nam cupiditate at quidem nesciunt
                odit optio! Consequuntur fuga harum similique fugiat quaerat
                temporibus, doloribus expedita error architecto ratione hic
                repellat praesentium.
              </p>
            </div>
            <div className="bg-yellow rounded-[12px] w-[558px]">
              <p className="font-[400] text-[14px] text-white py-[26px] px-[15px] ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facilis est ut illo dignissimos dolorem impedit libero qui sit
                aliquid placeat ducimus excepturi aperiam, tenetur tempore
                repellendus architecto commodi nam cupiditate at quidem nesciunt
                odit optio! Consequuntur fuga harum similique fugiat quaerat
                temporibus, doloribus expedita error architecto ratione hic
                repellat praesentium.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
