/// MODULES
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

/// STYLES
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../src/assets/style/index.sass";

/// SCRIPTS
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";

/// PAGES
import Temp from "../pages/Temp";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import Notification from "./Notification";
import VerifyAccount from "../pages/VerifyAccount";
import P_404 from "./_404";
import Shop from "./Shop";
import Menu from "./Menu";

export default function App() {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Temp />
        <Notification />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/verify-account/:userId/:token"
            element={<VerifyAccount />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/reset-password/:userId/:token"
            element={<ResetPassword />}
          />
          <Route path="*" element={<P_404 />} />
        </Routes>
        <Menu />
      </BrowserRouter>
    </CookiesProvider>
  );
}
