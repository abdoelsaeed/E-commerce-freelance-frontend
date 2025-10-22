import { useState } from "react";
import CircleSize from "../../ui/CircleSize";
import AddToCardButton from "./components/AddToCardButton";
import AddToWishlistButton from "./components/AddToWishlistButton";
import { useSelector } from "react-redux";
import RemoveFromWishlistButton from "./components/removeFromWishlistButton";
import CircleColors from "./components/CircleColors";
function Card({ product, noLove }) {
  const { price, name, imageCover, variants, inStock, _id } = product;
  const [selectedColor, setSelectedColor] = useState("");

  const [selectedSize, setSelectedSize] = useState("");
  // Get unique sizes from variants
  const availableSizes = variants
    ? [...new Set(variants.map((v) => v.size))]
    : ["XS", "S", "M", "L", "XL"];

  // Get unique colors from variants
  const availableColors = variants
    ? [...new Set(variants.map((v) => v.color))]
    : [];
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <div className="bg-amber-50 rounded-xl shadow-2xl  hover:shadow-[#0d5bb8]  transition-all duration-300 w-full max-w-sm overflow-hidden h-[600px] flex flex-col">
      <div className="bg-[#415A77] mb-5 w-full h-[400px] overflow-hidden flex items-center justify-center">
        <img
          src={imageCover.url}
          alt="product"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="font-semibold font-Inter text-[20px]">{name}</h3>
          <div className="flex gap-2 mt-3 mb-3">
            {availableSizes.map((size) => (
              <CircleSize
                key={size}
                chosen={size}
                onClick={() => setSelectedSize(size)}
                isChosen={selectedSize}
              >
                {size}
              </CircleSize>
            ))}
          </div>
          {/* Colors Row */}
          {availableColors.length > 0 && (
            <CircleColors
              availableColors={availableColors}
              selectedColor={selectedColor}
              onSelectColor={setSelectedColor}
            />
          )}
          <p className="font-semibold font-Inter text-[20px] mb-3">
            {price} EGP
          </p>
        </div>

        <div className="mt-auto">
          {/* Buttons Row - Side by Side */}
          <div className="flex gap-2">
            {/* Add to Cart Button - Takes remaining space */}
            <AddToCardButton
              selectedColor={selectedColor}
              selectedSize={selectedSize}
              productId={_id}
              isAuthenticated={isAuthenticated}
            />
            {/* Wishlist Button - Small or remove to wishList*/}
            {noLove ? (
              <RemoveFromWishlistButton productId={_id} />
            ) : (
              <AddToWishlistButton productId={_id} />
            )}
          </div>

          <div className="text-center mt-2">
            <span className="text-gray-500 text-[20px">
              {inStock ? "In Stock" : "Out of Stock"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
