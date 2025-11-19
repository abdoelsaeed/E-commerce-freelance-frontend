import { useLoaderData } from "react-router-dom";
import CardCart from "../features/cart/CardCart";
import OrderSummary from "../features/cart/OrderSummary";
import { getMyCart } from "../services/cartApi";
import EmptyCart from "../features/cart/EmptyCart";
import { getLocalCart } from "../utils/localCart";
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
  // حاول تجيب jwt
  const jwt = (() => {
    try {
      return localStorage.getItem("jwt");
    } catch (e) {
      return null;
    }
  })();

  if (jwt) {
    // Authenticated -> call server cart (كما كان عندك)
    const { data } = await getMyCart();
    // data expected to contain { cart, totalPrice } or similar
    return data;
  }

  // Guest -> read localStorage cart
  const local = getLocalCart();
  if (!local || !local.cartItems || local.cartItems.length === 0) {
    // return shape consistent with server when cart is empty
    return { cart: null };
  }

  // Adapt local structure to match server cart shape expected by component
  const adapted = {
    cartItems: local.cartItems.map((it, idx) => ({
      _id: `${idx}-${it.productId}`,
      productId: {
        _id: it.productId,
        name: it.productSnapshot?.name || "",
        imageCover: it.productSnapshot?.imageCover || "",
        price: it.productSnapshot?.price || 0,
      },
      quantity: it.quantity,
      color: it.color,
      size: it.size,
    })),
    totalPrice:
      local.totalPrice ||
      local.cartItems.reduce((sum, it) => {
        const price = (it.productSnapshot && it.productSnapshot.price) || 0;
        return sum + price * it.quantity;
      }, 0),
  };

  return { cart: adapted };
}

export default Cart;
