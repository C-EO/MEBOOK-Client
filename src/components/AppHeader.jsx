import React, { useEffect } from "react";
import "../assets/style/app_header.sass";
import HeaderTopBar from "./HeaderTopBar";
import HeaderDesktop from "./HeaderDesktop";
import HeraderMob from "./HeraderMob";
import { connect } from "react-redux";
import jwtDecode from "jwt-decode";
import { reactLocalStorage } from "reactjs-localstorage";
import { updateUser } from "../redux/actions";
export default connect((state) => state, { updateUser })(function AppHeader({
  response,
  updateUser,
}) {
  useEffect(() => {
    if (response?.data?.data?.jwt) {
      const jwt_token = response.data.data.jwt;
      const decoded = jwtDecode(jwt_token);
      reactLocalStorage.setObject("user", decoded.user);
      updateUser(decoded.user);
    }
  }, [response]);
  useEffect(() => {
    const user = reactLocalStorage.getObject("user");
    updateUser(user);
  }, []);
  return (
    <header id="app-header">
      <HeaderTopBar />
      <HeaderDesktop />
      <HeraderMob />
    </header>
  );
});
