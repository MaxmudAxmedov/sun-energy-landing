export const GetProductData = async () => {
    try {
        const url = process.env.NEXT_PUBLIC_BACKEND_URL || "";
        const response = await fetch(`${url}/products-filter`, {
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
