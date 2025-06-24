import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import {
  FiHome,
  FiCalendar,
  FiPackage,
  FiTruck,
  FiLogOut,
} from "react-icons/fi";
import logo from "../assets/logo_clothly.png";

const navLinks = [
  { name: "Dashboard", path: "/user/dashboard", icon: <FiHome /> },
  { name: "Book Service", path: "/user/book", icon: <FiCalendar /> },
  { name: "My Orders", path: "/user/order", icon: <FiPackage /> },
  { name: "Track Order", path: "/user/track", icon: <FiTruck /> },
];

const HamburgerSidebar = ({
  isOpen,
  setOpen,
  setIsLoggedIn,
  isMobile,
  sidebarWidth,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <>
      {/* Show hamburger only when sidebar is closed */}
      {!isOpen && (
        <div className="fixed top-4 left-4 z-50 block">
          <button
            onClick={() => setOpen(true)}
            className="text-indigo-700 bg-white p-2 rounded shadow hover:bg-gray-100"
            title="Open Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen bg-gradient-to-b from-indigo-800 via-indigo-700 to-purple-700 text-white shadow-xl z-40 transform transition-transform duration-300 flex flex-col
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        style={{ width: sidebarWidth }}
      >
        {/* Logo + Close */}
        <div className="flex justify-between items-center px-4 pt-4 mb-6">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
            <Link to="/" className="text-2xl font-bold text-white" onClick={() => setOpen(false)}>
              Clothly
            </Link>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="text-white hover:text-red-400 text-xl"
            title="Close Menu"
          >
            <FaTimes />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-3">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 py-2 px-4 rounded-lg transition-all ${
                  isActive
                    ? "bg-white text-indigo-800 shadow-md scale-105"
                    : "hover:bg-white hover:text-indigo-800 hover:shadow"
                }`}
              >
                <span className="text-lg">{link.icon}</span>
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="mt-auto px-4 pb-6">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
          >
            <FiLogOut />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default HamburgerSidebar;
