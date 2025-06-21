import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem('token') // Initialize from localStorage
  );

  return (
    <BrowserRouter>
      <div className="flex min-h-screen">
        {isLoggedIn && <Sidebar setIsLoggedIn={setIsLoggedIn} />}
        <main className={isLoggedIn ? "flex-1 ml-64 bg-gray-50 min-h-screen" : "flex-1 bg-gray-50 min-h-screen"}>
          <AppRoutes setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
