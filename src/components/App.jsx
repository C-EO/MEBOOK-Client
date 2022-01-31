/// MODULES
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

/// STYLES
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../src/assets/style/index.sass";

/// SCRIPTS
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";

/// COMPONENTS
import AppHeader from "./AppHeader";
import Menu from "./Menu";
import GridTest from "./GridTest";
import Notification from "./Notification";
import P_404 from "./_404";
import UserInfoBar from "./UserInfoBar";
import AuthRoute from "./AuthRoute";
import Footer from "./Footer";

/// PAGES
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Logout from "../pages/Logout";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import VerifyAccount from "../pages/VerifyAccount";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";
import Shop from "./Shop";

export default function App() {
  return (
    <BrowserRouter>
      <GridTest />
      <Notification />
      <UserInfoBar />
      <AppHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login redirect_to=" " />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route
          path="/wishlist"
          element={
            <AuthRoute path="wishlist">
              <Wishlist />
            </AuthRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <AuthRoute path="cart">
              <Cart />
            </AuthRoute>
          }
        />
        <Route
          path="/verify-account/:userId/:token"
          element={<VerifyAccount />}
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/reset-password/:userId/:token"
          element={<ResetPassword />}
        />
        <Route path="/shop" element={<Shop />} />
        <Route path="*" element={<P_404 />} />
      </Routes>
      <Menu />
      <Footer />
    </BrowserRouter>
  );
}
