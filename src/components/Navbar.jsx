import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800">KeenKeeper</h1>

          <div className="flex gap-8 items-center">
            <Link
              to="/"
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                isActive("/")
                  ? "bg-green-700 text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <i className="fa-regular fa-house"></i>
              <span>Home</span>
            </Link>

            <Link
              to="/timeline"
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                isActive("/timeline")
                  ? "bg-green-700 text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <i className="fa-regular fa-clock"></i>
              <span>Timeline</span>
            </Link>

            <Link
              to="/stats"
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                isActive("/stats")
                  ? "bg-green-700 text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <i className="fa-solid fa-arrow-trend-down"></i>
              <span>Stats</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
