import React from "react";
import UserInfoBar from "./UserInfoBar";
import GridTest from "./GridTest";
import Toast from "./Toast";
import Notification from "./Notification";
import AppHeader from "./AppHeader";
import Menu from "./Menu";
import Footer from "./Footer";
export default function Temp({ children }) {
  return (
    <>
      <GridTest />
      <Toast />
      {/* <Notification /> */}
      <UserInfoBar />
      <AppHeader />
      {children}
      <Menu />
      <Footer />
    </>
  );
}
