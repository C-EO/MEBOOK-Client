import React, { useEffect, useLayoutEffect } from "react";
import "../assets/style/app_header.sass";
import HeaderTopBar from "./HeaderTopBar";
import HeaderDesktop from "./HeaderDesktop";
import HeraderMob from "./HeraderMob";
import { connect } from "react-redux";
import { reactLocalStorage } from "reactjs-localstorage";
import { updateUser } from "../redux/actions";
export default connect((state) => state, { updateUser })(function AppHeader({
  response,
  updateUser,
}) {
  useLayoutEffect(() => {
    const user = reactLocalStorage.getObject("user");
    updateUser(user);
  }, []);

  useEffect(() => {
    if (response?.data?.data?.user) {
      const user = response.data.data.user;
      reactLocalStorage.setObject("user", user);
      updateUser(user);
    }
  }, [response]);

  return (
    <header id="app-header">
      <HeaderTopBar />
      <HeaderDesktop />
      <HeraderMob />
    </header>
  );
});
