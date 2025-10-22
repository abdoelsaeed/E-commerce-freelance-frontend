import { useLoaderData } from "react-router-dom";
import CardCart from "../features/cart/CardCart";
import OrderSummary from "../features/cart/OrderSummary";
import { getMyCart } from "../services/cartApi";
import EmptyCart from "../features/cart/EmptyCart";

function Cart() {
  const { cart } = useLoaderData();
  
  if (!cart || cart.cartItems.length === 0) {
    return <EmptyCart />;
  }

  const { cartItems, totalPrice } = cart;

  return (
    <div className="px-4 py-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-10 mb-8 text-center sm:text-left">
        My Cart
      </h1>

      <div
        className="
      flex flex-col lg:flex-row 
      justify-center items-center 
      border-2 border-gray-300 border-dashed rounded-lg 
      gap-8 
      p-6
      w-full
    "
      >
        {/* Cart section */}
        <div className="w-full lg:w-2/3">
          <CardCart items={cartItems} />
        </div>

        {/* Order summary */}
        <div className="w-full lg:w-1/3 flex justify-center items-center">
          <OrderSummary totalPrice={totalPrice} />
        </div>
      </div>
    </div>
  );
}

export async function loader() {
  // Check authentication before calling API
  const jwt = (() => {
    try {
      return localStorage.getItem("jwt");
    } catch (e) {
      return null;
    }
  })();
  if (!jwt) {
    // Not authenticated, redirect to login
    throw new Response(null, {
      status: 302,
      headers: {
        Location: "/login",
      },
    });
  }
  // Au
  const { data } = await getMyCart();
  return data;
}
export default Cart;
