/// MODULES
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import { getUserData, getAllCategories, updateUser } from "../redux/actions";
import _ from "lodash";

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
import Toast from "./Toast";

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
import Shop from "../pages/Shop";

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, {
  getAllCategories,
  getUserData,
  updateUser,
})(function App({ getAllCategories, getUserData, response, updateUser }) {
  useEffect(() => {
    (async () => {
      if (!(await getUserData())) {
        updateUser(null);
      }
      getAllCategories();
    })();
  }, []);

  useEffect(() => {
    if (!_.isEmpty(response)) {
      if (!response?.data?.data?.user && response?.data?.status !== "error") {
        getUserData();
      } else if (response?.data?.data?.user) {
        const user = response?.data?.data?.user;
        updateUser(user);
      }
    }
  }, [response]);

  return (
    <BrowserRouter>
      <GridTest />
      {/* <Notification /> */}
      <Toast />
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
});
