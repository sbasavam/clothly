import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { name: "Dashboard", path: "/user/dashboard" },
  { name: "Book Service", path: "/user/book" },
  { name: "Addresses", path: "/user/addresses" },
  { name: "Profile", path: "/user/profile" },
];

const Sidebar = ({ setIsLoggedIn }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    // Update logged in state
    setIsLoggedIn(false);
    
    // Redirect to home page
    navigate('/');
  };

  return (
    <aside className="h-screen w-64 bg-gradient-to-b from-indigo-800 via-indigo-700 to-purple-700 text-white flex flex-col py-8 px-6 shadow-xl animate-slide-in-left fixed z-50">
      <div className="mb-10 text-3xl font-extrabold tracking-wide text-center text-white drop-shadow-md">
        🧺 Clothly
      </div>
      <nav className="flex-1">
        <ul className="space-y-3">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`block py-2.5 px-4 rounded-lg font-medium transition-all duration-300 ease-in-out transform ${
                    isActive
                      ? "bg-white text-indigo-800 shadow-md scale-105"
                      : "hover:bg-white hover:text-indigo-800 hover:shadow"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="mt-auto">
        <button
          onClick={handleLogout}
          className="w-full py-2.5 px-4 rounded-lg font-medium bg-red-500 hover:bg-red-600 text-white shadow hover:shadow-md transition-all duration-300 ease-in-out flex items-center justify-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
              clipRule="evenodd"
            />
          </svg>
          Logout
        </button>
      </div>
      <div className="text-sm text-indigo-200 text-center mt-4 opacity-60">
        © 2025 Clothly
      </div>
    </aside>
  );
};

export default Sidebar;