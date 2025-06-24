import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./layouts/layout";
import AppRoutes from "./Routes/AppRoutes";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  return (
    <BrowserRouter>
      <Layout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
        <AppRoutes isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </Layout>
    </BrowserRouter>
  );
};

export default App;