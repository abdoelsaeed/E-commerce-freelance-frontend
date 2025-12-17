// src/components/layout/DashboardLayout.jsx
import { Link } from "react-router-dom";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <aside className="w-50 bg-white border-r h-screen p-5 hidden md:block">
          <div className="font-bold text-xl mb-6 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white text-lg font-semibold">
              S
            </div>
            <span>Store Admin</span>
          </div>

          <nav className="space-y-2 text-sm">
            <a
              href="#"
              className="flex items-center gap-3 py-3 px-3 rounded-lg transition-colors duration-200 text-gray-700 hover:bg-gray-50 hover:translate-x-0.5"
            >
              <svg
                className="w-5 h-5 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="font-medium">Dashboard</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-3 py-3 px-3 rounded-lg transition-colors duration-200 text-gray-700 hover:bg-gray-50 hover:translate-x-0.5"
            >
              <svg
                className="w-5 h-5 text-blue-500"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3 3h18v12H3zM7 21h10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-medium">Orders</span>
            </a>
          </nav>
        </aside>

        <main className="flex-1 p-6">
          <header className="flex items-center justify-between mb-6">
            <div className="text-2xl font-semibold">Dashboard</div>
            <div className="flex items-center gap-3">
              <Link to="/">
                <button className="px-3 py-2 bg-white rounded shadow text-sm ">
                  Home
                </button>
              </Link>
              <div className="bg-white p-2 rounded shadow">Admin</div>
            </div>
          </header>
          {children}
        </main>
      </div>
    </div>
  );
}
