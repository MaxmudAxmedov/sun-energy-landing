// import { XizmatlarCard } from "@/components/xizmatlar-card/xizmatlar-card";
// import React from "react";

// const Home = () => {
//   const XizmatlarData = [
//     {
//       id: 1,
//       img: "/imgs/xizmatlar1.png",
//       title: "Xususiy uylar va dachalar",
//       des: "Uylarda quyosh panellarini o'rnatish uchun sizga faqat ishonchli tom kerak bo'ladi. Professional dizayn bilan deyarli har qanday uyda quyosh stansiyasini o'rnatish mumkin.",
//     },
//     {
//       id: 2,
//       img: "/imgs/xizmatlar2.png",
//       title: "Ofis binolari va korxonalar",
//       des: "Quyosh panellarini o'rnatish kompaniya menejeri qabul qilishi mumkin bo'lgan eng yaxshi qarordir. Shunday qilib, ofis yoki korxona zamonaviy energiya tejamkor yechimlar va ularning atrof-muhitga bo'lgan g'amxo'rligi haqida xabardorligini namoyish eta oladi.",
//     },
//     {
//       id: 3,
//       img: "/imgs/xizmatlar3.png",
//       title: "Sanoat hududlari",
//       des: "Dalalarda yoki boshqa joylarda panellarni o'rnatish va turli maqsadlar uchun sezilarli miqdorda energiya olish mumkin.",
//     },
//   ];
//   return (
//     <>
//       <div className="container lg:w-[1200px] mx-auto">
//         <div id="xizmatlar" className="service mt-[41px] mb-[95px]">
//           <h2 className="text-grey font-[700] text-[24px] mt-[87px] mb-[100px]">
//             Xizmat ko’rsatish
//           </h2>
//           <div>
//             {/* {XizmatlarData?.map((item) => (
//               <XizmatlarCard item={item} key={item.id} />
//             ))} */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;

import { GetProductData } from "@/service/queries/GetProductData";
import ProductClient from "./mahsulotlar/ProductClient";

const Home = async () => {
    const productData = (await GetProductData({ limit: "1000" })) || [];
    const allProducts = productData?.Data?.products || [];

    const uniqueCategories = Array.from(
        new Set(allProducts.map((item) => item.category_name))
    );

    return (
        <ProductClient products={allProducts} categories={uniqueCategories} />
    );
};

export default Home;
