/// MODULES
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import { getUserData, getAllCategories, updateUser } from "../redux/actions";
import _ from "lodash";
import { reactLocalStorage } from "reactjs-localstorage";

/// STYLES
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../src/assets/style/index.sass";

/// SCRIPTS
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";

/// COMPONENTS
import GridTest from "./GridTest";
import Notification from "./Notification";
import P_404 from "./_404";
import AuthRoute from "./AuthRoute";
import Toast from "./Toast";
import Temp from "./Temp";

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
import Checkout from "../pages/Checkout";
import Shop from "../pages/Shop";
import Admin from "../pages/Admin";
import Dashboard from "../pages/Dashboard";

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, {
  getAllCategories,
  getUserData,
  updateUser,
})(function App({ getAllCategories, getUserData, response, updateUser }) {
  useEffect(() => {
    // reactLocalStorage.getObject("user");
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
        // reactLocalStorage.setObject("user", user);
        updateUser(user);
      }
    }
  }, [response]);

  return (
    <>
      <BrowserRouter>
        <GridTest />
        <Toast />
        {/* <Notification /> */}
        {/* WEBSITE PAGES ROUTE */}
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <Temp>
                  <Home />
                </Temp>
              }
            ></Route>
            <Route
              path="register"
              element={
                <Temp>
                  <Register />
                </Temp>
              }
            />
            <Route
              path="login"
              element={
                <Temp>
                  <Login redirect_to=" " />
                </Temp>
              }
            />
            <Route
              path="/logout"
              element={
                <Temp>
                  <Logout />
                </Temp>
              }
            />
            <Route
              path="/wishlist"
              element={
                <Temp>
                  <AuthRoute
                    path="wishlist"
                    restrict_to={["owner", "user", "admin"]}
                  >
                    <Wishlist />
                  </AuthRoute>
                </Temp>
              }
            />
            <Route
              path="/cart"
              element={
                <Temp>
                  <AuthRoute
                    path="cart"
                    restrict_to={["owner", "user", "admin"]}
                  >
                    <Cart />
                  </AuthRoute>
                </Temp>
              }
            />
            <Route
              path="/checkout"
              element={
                <Temp>
                  <AuthRoute
                    path="checkout"
                    restrict_to={["owner", "user", "admin"]}
                  >
                    <Checkout />
                  </AuthRoute>
                </Temp>
              }
            />
            <Route
              path="/verify-account/:userId/:token"
              element={
                <Temp>
                  <VerifyAccount />
                </Temp>
              }
            />
            <Route
              path="/forgot-password"
              element={
                <Temp>
                  <ForgotPassword />
                </Temp>
              }
            />
            <Route
              path="/reset-password/:userId/:token"
              element={
                <Temp>
                  <ResetPassword />
                </Temp>
              }
            />
            <Route
              path="/shop"
              element={
                <Temp>
                  <Shop />
                </Temp>
              }
            />
            <Route
              path="*"
              element={
                <Temp>
                  <P_404 />
                </Temp>
              }
            />
            <Route
              path={"/shop/category/:catId"}
              element={
                <Temp>
                  <Shop />
                </Temp>
              }
            />
          </Route>
          {/* ADMIN DASHBOARD ROUTE */}
          <Route
            path="/admin/*"
            element={
              <AuthRoute
                label={"log into admin dashboard"}
                path={"admin/dashboard"}
                restrict_to={["owner", "admin"]}
              >
                <Routes>
                  <Route index element={<Admin />} />
                  <Route path="dashboard">
                    <Route index element={<Dashboard />} />
                    <Route path="books" element={<>BOOKS</>} />
                    <Route path="users" element={<>USER</>} />
                    <Route path="categories" element={<>CATEGORIES</>} />
                    <Route path="reviews" element={<>REVIEWS</>} />
                    <Route path="orders" element={<>ORDERS</>} />
                  </Route>
                  <Route path="*" element={<P_404 />} />
                  <Route path="logout" element={<Logout />} />
                </Routes>
              </AuthRoute>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
    // {
    // <AuthRoute
    // label={"log into admin dashboard"}
    // path="admin/dashboard"
    // restrict_to={["owner", "admin"]}
    // >
    // <>ADMIN</>
    // </AuthRoute>
    // }
  );
});
