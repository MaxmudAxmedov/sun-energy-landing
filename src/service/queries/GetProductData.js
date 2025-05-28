export const GetProductData = async (params) => {
    try {
        // const url = process.env.NEXT_PUBLIC_BACKEND_URL || "";
        const url = "https://backend-secure.quyosh-panellari.uz/api/v1";

        const query = new URLSearchParams(params).toString();
        const response = await fetch(`${url}/products-filter?${query}`, {
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
