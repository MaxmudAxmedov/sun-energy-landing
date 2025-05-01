import React from "react";
import { GetProductCategoryData } from "@/service/queries/GetProductCategory";
import { GetProductData } from "@/service/queries/GetProductData";
import { LoyihalarimizSwiper } from "@/components/loyihalarimizSwiper/loyihalarimizCard";
import { MahsulotlarCard } from "@/components/mahsulotlar-card/mahsulotlar-card";
import { XizmatlarCard } from "@/components/xizmatlar-card/xizmatlar-card";
export default async function Home() {
  const MahsulotlarData = [
    {
      id: 1,
      img: "/imgs/mahsulotlar.jpg",
      title: "Hibrid - Gibridli EST",
      des: "Gibridli quyoshli elektr stantsiyasi - avtonom va tarmoq funksiyalarini birlashtiradi. Bunday stansiyalar, shuningdek, zaxira stansiyalar deb ataladi, chunki ular tez-tez elektr uzilishlariga duch keladigan ob'ektlar uchun ishonchli zaxirani ta'minlaydi...",
    },
    {
      id: 2,
      img: "/imgs/mahsulotlar.jpg",
      title: "Hibrid - Gibridli EST2",
      des: "Gibridli quyoshli elektr stantsiyasi - avtonom va tarmoq funksiyalarini birlashtiradi. Bunday stansiyalar, shuningdek, zaxira stansiyalar deb ataladi, chunki ular tez-tez elektr uzilishlariga duch keladigan ob'ektlar uchun ishonchli zaxirani ta'minlaydi...",
    },
    {
      id: 3,
      img: "/imgs/mahsulotlar.jpg",
      title: "Hibrid - Gibridli EST3",
      des: "Gibridli quyoshli elektr stantsiyasi - avtonom va tarmoq funksiyalarini birlashtiradi. Bunday stansiyalar, shuningdek, zaxira stansiyalar deb ataladi, chunki ular tez-tez elektr uzilishlariga duch keladigan ob'ektlar uchun ishonchli zaxirani ta'minlaydi...",
    },
    {
      id: 4,
      img: "/imgs/mahsulotlar.jpg",
      title: "Hibrid - Gibridli EST4",
      des: "Gibridli quyoshli elektr stantsiyasi - avtonom va tarmoq funksiyalarini birlashtiradi. Bunday stansiyalar, shuningdek, zaxira stansiyalar deb ataladi, chunki ular tez-tez elektr uzilishlariga duch keladigan ob'ektlar uchun ishonchli zaxirani ta'minlaydi...",
    },
  ];

  const XizmatlarData = [
    {
      id: 1,
      img: "/imgs/xizmatlar1.png",
      title: "Xususiy uylar va dachalar",
      des: "Uylarda quyosh panellarini o'rnatish uchun sizga faqat ishonchli tom kerak bo'ladi. Professional dizayn bilan deyarli har qanday uyda quyosh stansiyasini o'rnatish mumkin.",
    },
    {
      id: 2,
      img: "/imgs/xizmatlar2.png",
      title: "Ofis binolari va korxonalar",
      des: "Quyosh panellarini o'rnatish kompaniya menejeri qabul qilishi mumkin bo'lgan eng yaxshi qarordir. Shunday qilib, ofis yoki korxona zamonaviy energiya tejamkor yechimlar va ularning atrof-muhitga bo'lgan g'amxo'rligi haqida xabardorligini namoyish eta oladi.",
    },
    {
      id: 3,
      img: "/imgs/xizmatlar3.png",
      title: "Sanoat hududlari",
      des: "Dalalarda yoki boshqa joylarda panellarni o'rnatish va turli maqsadlar uchun sezilarli miqdorda energiya olish mumkin.",
    },
  ];

  const Tariflar = {
    onGrid: [
      { id: 1, power: 5, price: "4 500 000 " },
      { id: 2, power: 10, price: "4 300 000" },
      { id: 3, power: 20, price: "4 100 000" },
      { id: 4, power: 50, price: "3 900 000" },
      { id: 5, power: 100, price: "3 800 000" },
    ],
    hybrid: [
      { id: 6, power: 3, price: "6 300 000" },
      { id: 7, power: 5, price: "6 000 000" },
      { id: 8, power: 10, price: "5 500 000" },
      { id: 9, power: 15, price: "5 300 000" },
      { id: 10, power: 20, price: "5 000  000" },
    ],
  };

  // const productData = await GetProductData();
  const data = await GetProductCategoryData();
  console.log(data);

  // console.log(productData, "hello");
  // console.log(data.Data.product_categories, "hello12");

  return (
    <>
      <div className="container lg:w-[1200px] mx-auto">
        <div id="xizmatlar" className="service mt-[41px] mb-[95px]">
          {/* {data?.Data?.product_categories?.map((item) => (
            <div key={item.id}>
              <h1 className="text-black2">{item.name}</h1>
            </div>
          ))} */}
          <h2 className="text-grey font-[700] text-[24px] mb-[43px]">
            Xizmat ko’rsatish
          </h2>
          <div>
            {XizmatlarData?.map((item) => (
              <XizmatlarCard item={item} key={item.id} />
            ))}
          </div>
        </div>
        <div id="mahsulotlar" className="mt-100px mb-[85px]">
          <h2 className="font-[700] text-[24px] mb-[52px] text-grey">
            Mahsulotlar
          </h2>
          <div className="flex flex-wrap justify-between gap-[39px]">
            {MahsulotlarData?.map((item) => (
              <MahsulotlarCard key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div id="loyihalar" className="loyihalarimiz  mb-[64px] text-black">
          <h2 className="font-[700] text-[24px] text-grey mb-[60px]">
            Loyihalarimiz
          </h2>
          <div>
            <LoyihalarimizSwiper />
          </div>
        </div>
        <div className="Tariflar mb-[60px]">
          <h2 className="font-[700] text-[24px] text-grey mb-[20px]">
            Tariflar
          </h2>
          <div>
            <div className="flex items-center gap-[502px] justify-center mb-[8px]">
              <h2 className="font-[700] text-[18px] text-black leading-[100%] ">
                On-Grid
              </h2>
              <h2 className="font-[700] text-[18px] text-black leading-[100%] ">
                Hybrid
              </h2>
            </div>
            <div className="flex justify-between w-full ">
              <div className="bg-[#e5e5e5] rounded-l-[12px]  w-[600px]">
                <div className=" pl-[82px] pt-[14px] pb-[10px] flex gap-[165px] border-b-[1px] border-yellow ">
                  <h3 className="font-[700] text-[18px] text-black leading-[100%] ">
                    Quvvat ( kvt )
                  </h3>
                  <h3 className="font-[700] text-[18px] text-black leading-[100%]">
                    Narxi
                  </h3>
                </div>
                <div className="flex flex-col  w-full justify-between ">
                  {Tariflar?.onGrid?.map((item) => (
                    <div
                      key={item.id}
                      className="pl-[82px] pt-[14px] pb-[10px] flex gap-[165px] border-b-[1px] text-center border-yellow  items-center justify-between pr-[95px] last:border-none"
                    >
                      <h3 className="font-[700] text-[18px] text-black leading-[100%]">
                        {item.power}
                      </h3>
                      <h3 className="font-[700] text-[18px] text-black leading-[100%]">
                        {item.price} sum
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#e5e5e5]  border-yellow border-l-[1px] rounded-r-[12px]  w-[600px]">
                <div className=" pl-[82px] pt-[14px] pb-[10px] flex gap-[165px] border-b-[1px] border-yellow ">
                  <h3 className="font-[700] text-[18px] text-black leading-[100%] ">
                    Quvvat ( kvt )
                  </h3>
                  <h3 className="font-[700] text-[18px] text-black leading-[100%]">
                    Narxi
                  </h3>
                </div>
                <div className="flex flex-col  w-full justify-between ">
                  {Tariflar?.hybrid?.map((item) => (
                    <div
                      key={item.id}
                      className="pl-[82px] pt-[14px] pb-[10px] flex gap-[165px] border-b-[1px] text-center border-yellow  items-center justify-between pr-[95px] last:border-none"
                    >
                      <h3 className="font-[700] text-[18px] text-black leading-[100%]">
                        {item.power}
                      </h3>
                      <h3 className="font-[700] text-[18px] text-black leading-[100%]">
                        {item.price} sum
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
