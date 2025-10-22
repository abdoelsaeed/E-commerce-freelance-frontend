import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import List from "./List";
import ListIclons from "./ListIclons";
import { useState } from "react";
import { useSelector } from "react-redux";

function Header() {
  const isAuthenticated = !!localStorage.getItem("jwt");
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  function handleLogout() {
    localStorage.removeItem("jwt");
    window.location.href = "/";
  }

  return (
    <div className="relative flex flex-col lg:flex-row justify-between items-center mt-4 lg:mt-10 mb-5 px-4 lg:px-0 gap-4 lg:gap-0">
      <p className={styles.logo}>
        <Link to="/">NIRVA</Link>
      </p>
      <List />
      <div className="flex items-center gap-2 lg:gap-4">
        <button
          className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 bg-white shadow hover:bg-gray-100"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="#1672d4"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        {isAuthenticated && (
          <button
            onClick={handleLogout}
            className="bg-white border border-[#1672d4] text-[#1672d4] font-semibold px-4 py-2 rounded-xl shadow hover:bg-[#1672d4] hover:text-white transition-colors duration-200"
          >
            Logout
          </button>
        )}
        {/* Admin dashboard quick link */}
        {user?.role === "admin" && (
          <button
            onClick={() => navigate("/dashboard")}
            className="ml-2 bg-[#fffbeb] border border-yellow-300 text-yellow-700 font-semibold px-3 py-2 rounded-xl shadow hover:bg-yellow-200 transition-colors duration-200"
          >
            Dashboard
          </button>
        )}
        {!isAuthenticated && (
          <Link to="/login">
            <button className="bg-[#1672d4] text-white font-semibold px-4 py-2 rounded-xl shadow hover:bg-[#0d5bb8] transition-colors duration-200">
              LogIn
            </button>
          </Link>
        )}
      </div>

      {/* القائمة تظهر فوق الهيدر ومتوافقة مع كل الشاشات */}
      {menuOpen && (
        <div
          className="absolute top-full right-0 w-full sm:w-80 md:w-96 lg:w-64 bg-white/80 shadow-xl rounded-xl p-6 flex flex-col gap-6
            backdrop-blur-lg z-50 transition-all duration-300"
        >
          <button
            className="self-end text-gray-500 hover:text-[#1672d4] text-2xl"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
          <ListIclons />
        </div>
      )}
    </div>
  );
}

export default Header;
