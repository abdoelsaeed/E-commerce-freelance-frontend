import axiosClient from "./axiosClient";
export async function getProducts(gender, page) {
  const data = await axiosClient.get(`products?gender=${gender}&page=${page}`);
  return data;
}

export async function createProduct(productData) {
  try {
    const data = await axiosClient.post("products", productData, {
      headers: {
        "Content-Type": "multipart/form-data", // Override default Content-Type for FormData
      },
    });
    return data;
  } catch (error) {
    console.error("createProduct error", error);
    // Add better error handling
    if (error.response?.data?.message) {
      throw new Error(error.response.data.message);
    }
    throw error;
  }
}
export async function getProductById(id) {
  try {
    const res = await axiosClient.get(`products/${id}`);

    if (!res?.data) {
      throw new Error("No product found");
    }

    return res.data;
  } catch (error) {
    console.error("getProductById error", error);

    if (error.response?.data?.message) {
      throw new Error(error.response.data.message);
    }

    throw error;
  }
}
