export const GetProductCategoryData = async () => {
    try {
        // const url = process.env.NEXT_PUBLIC_BACKEND_URL || "";
        const url = "https://sun-energy-api.ibodulla.uz/api/v1";
        const response = await fetch(`${url}/product-categories`, {
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
