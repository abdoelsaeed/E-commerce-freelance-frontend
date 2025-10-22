import { useLoaderData } from "react-router-dom";
import { useMenProduct } from "../hooks/useMenProduct";
import { getProducts } from "../services/productApi";
import SelectorsButtons from "../features/products/SelectorsButtons";
import Products from "../features/products/Products";

function Men() {
  const initialProducts = useLoaderData();
  const { products, loading } = useMenProduct(initialProducts, "men");

  return (
    <div>
      <SelectorsButtons />
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1672D4]"></div>
        </div>
      ) : (
        <Products products={products} />
      )}
    </div>
  );
}
export async function loader({ request }) {
  const url = new URL(request.url);
  const page = url.searchParams.get("page") || 1;
  const data = await getProducts("men", page);
  return data;
}
export default Men;
