import React from "react";
import "../assets/style/app_header.sass";

import HeaderTopBar from "./HeaderTopBar";
import HeaderDesktop from "./HeaderDesktop";

export default function AppHeader() {
  return (
    <header id="app-header">
      <HeaderTopBar />
      <HeaderDesktop />
    </header>
  );
}
