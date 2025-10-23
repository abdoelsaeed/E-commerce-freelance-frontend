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
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 w-full overflow-hidden flex flex-col group">
      <div className="relative bg-gray-100 w-full aspect-[3/4] overflow-hidden">
        <img
          src={imageCover.url}
          alt={name}
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
        />
        {!inStock && (
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center">
            <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="font-semibold text-gray-900 text-lg sm:text-xl mb-2 line-clamp-2">
            {name}
          </h3>
          <div className="flex flex-wrap gap-2 my-3">
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
