// import { GetProductData } from "@/service/queries/GetProductData";
// import ProductClient from "./mahsulotlar/ProductClient";

// const Home = async () => {
//     const productData = (await GetProductData({ limit: "1000" })) || [];
//     const allProducts = productData?.Data?.products || [];

//     const uniqueCategories = Array.from(
//         new Set(allProducts.map((item) => item.category_name))
//     );

//     return (
//         <ProductClient products={allProducts} categories={uniqueCategories} />
//     );
// };

// export default Home;

const Home = async () => {
  return <div className="bg-red-400">
    
  </div>;
};

export default Home;
