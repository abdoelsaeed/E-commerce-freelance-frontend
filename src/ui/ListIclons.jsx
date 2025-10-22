import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faShoppingCart,
  faHeart,
  faClipboardList, // أيقونة الطلبات
} from "@fortawesome/free-solid-svg-icons";

function ListIclons() {
  return (
    <ul className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-5 w-full lg:w-auto ">
      <li>
        <Link
          to="/"
          className="flex items-center justify-center text-black hover:text-[#1672d4] text-2xl sm:text-3xl transition-colors duration-200 cursor-pointer"
        >
          <FontAwesomeIcon icon={faHouse} />
        </Link>
      </li>

      <li>
        <Link
          to="/profile"
          className="flex items-center justify-center text-black hover:text-[#1672d4] text-2xl sm:text-3xl transition-colors duration-200 cursor-pointer"
        >
          <FontAwesomeIcon icon={faUser} />
        </Link>
      </li>

      <li>
        <Link
          to="/cart"
          className="flex items-center justify-center text-black hover:text-[#1672d4] text-2xl sm:text-3xl transition-colors duration-200 cursor-pointer"
        >
          <FontAwesomeIcon icon={faShoppingCart} />
        </Link>
      </li>

      <li>
        <Link
          to="/products/wishlist"
          className="flex items-center justify-center text-black hover:text-[#1672d4] text-2xl sm:text-3xl transition-colors duration-200 cursor-pointer"
        >
          <FontAwesomeIcon icon={faHeart} />
        </Link>
      </li>

      {/* ✅ My Orders */}
      <li>
        <Link
          to="/my-orders"
          className="flex items-center justify-center text-black hover:text-[#1672d4] text-2xl sm:text-3xl transition-colors duration-200 cursor-pointer"
        >
          <FontAwesomeIcon icon={faClipboardList} />
        </Link>
      </li>
    </ul>
  );
}

export default ListIclons;
