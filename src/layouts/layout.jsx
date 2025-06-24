import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HamburgerSidebar from "../components/HamburgerSidebar";

const Layout = ({ isLoggedIn, setIsLoggedIn, children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isOpen, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const sidebarWidth = 256;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const contentStyle = !isMobile && isOpen ? { marginLeft: `${sidebarWidth}px` } : {};

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {!isHomePage && (
        <>
          <Header
            setIsLoggedIn={setIsLoggedIn}
            isLoggedIn={isLoggedIn}
            sidebarOpen={isOpen}
            setSidebarOpen={setOpen}
          />
          <HamburgerSidebar
            isOpen={isOpen}
            setOpen={setOpen}
            setIsLoggedIn={setIsLoggedIn}
            isMobile={isMobile}
            sidebarWidth={sidebarWidth}
          />
        </>
      )}

      {/* Main Content */}
      <main
        className="flex-1 transition-all duration-300 px-4 pt-5 pb-10"
        style={contentStyle}
      >
        <div className="mx-auto w-full max-w-[calc(100%-12px)]">
          <Outlet />
          {children}
        </div>
      </main>

      {!isHomePage && <Footer />}
    </div>
  );
};

export default Layout;
