import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBell, FaUserCircle } from "react-icons/fa";

const Header = ({ setIsLoggedIn }) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <header className="flex items-center justify-end w-full px-4 py-4 bg-gray-100 shadow-sm">
      <div className="flex items-center gap-6">
        <span
          className="hidden sm:block text-sm text-indigo-700 font-semibold animate-pulse bg-indigo-50 px-4 py-1 rounded-full shadow-sm"
          title="Welcome message"
        >
          👋 Hi, Welcome Back!
        </span>

        <button
          className="text-indigo-700 hover:text-indigo-500 relative"
          title="Notifications"
        >
          <FaBell size={20} />
        </button>

        <div className="relative" title="Profile options">
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="text-indigo-700 hover:text-indigo-500"
          >
            <FaUserCircle size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
