import { MahsulotlarCard } from "@/components/mahsulotlar-card/mahsulotlar-card";
import { GetProductData } from "@/service/queries/GetProductData";
import React from "react";

const Mahsulotlar = async () => {
  const productData = (await GetProductData()) || [];
  console.log(productData.Data.products);

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
