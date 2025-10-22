import { useState } from "react";
import { addToCart } from "../../../services/cartApi";
import { useNavigate, useLocation } from "react-router-dom";

function AddToCardButton({
  selectedColor,
  selectedSize,
  productId,
  isAuthenticated,
}) {
  const [added, setAdded] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  async function handleAddToCart() {
    if (loading) return;
    // Check authentication: Redux or jwt in localStorage
    const jwt = (() => {
      try {
        return localStorage.getItem("jwt");
      } catch (e) {
        return null;
      }
    })();
    if (!isAuthenticated && !jwt) {
      navigate("/login", { state: { from: location } });
      return;
    }
    setLoading(true);
    try {
      await addToCart(selectedColor, selectedSize, productId);
      setAdded(true);
      setTimeout(() => setAdded(false), 1200); // Show cart icon for 1.2s
    } catch (error) {
      console.error("Failed to add to cart", error.message);
      alert(error?.response?.data?.message || error?.message || "Failed to add to cart");
      setAdded(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleAddToCart}
      className="flex-1 relative overflow-hidden bg-[#1672d4] text-white px-3 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-[#0d5bb8] hover:scale-105 active:scale-95"
      disabled={loading}
    >
      <div className="flex items-center justify-center">
        {/* Text */}
        <span
          className={`transition-all duration-300 text-white ${
            !added ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
          }`}
        >
          Add to cart
        </span>

        {/* Cart Icon */}
        <span
          className={`absolute transition-all duration-300 text-2xl ${
            added
              ? "opacity-100 translate-x-0 scale-110"
              : "opacity-0 translate-x-4 scale-0"
          }`}
          style={{
            transform: "scaleX(1.2) scaleY(1.1)",
            borderRadius: "50%",
            padding: "4px 8px",
            color: "white",
          }}
        >
          🛒
        </span>
      </div>
    </button>
  );
}

export default AddToCardButton;
