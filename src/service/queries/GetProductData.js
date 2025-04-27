export const GetProductData = async () => {
  try {
    const backendUrl = process.env.BACKEND_URL;
    const response = await fetch(`${backendUrl}/api/v1/products-filter`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Ma'lumotlarni olishda xatolik yuz berdi");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Xatolik:", error);
    return [];
  }
};
