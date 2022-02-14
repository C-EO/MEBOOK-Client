import React, { useEffect } from "react";
import UserInfoBar from "./UserInfoBar";
import AppHeader from "./AppHeader";
import Menu from "./Menu";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import scrollToTop from "../helpers/scrollToTop";
export default function Temp({ children }) {
  const location = useLocation();
  useEffect(() => {
    scrollToTop();
  }, [location]);

  return (
    <>
      <UserInfoBar />
      <AppHeader />
      {children}
      <Menu />
      <Footer />
    </>
  );
}
