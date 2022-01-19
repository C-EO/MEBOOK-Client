/// MODULES
import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";

/// STYLES
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../src/assets/style/index.sass";

/// COMPONENTS
import GridTest from "./GridTest";
import UserInfoBar from "./UserInfoBar";
import AppHeader from "./AppHeader";

export default function App() {
  return (
    <BrowserRouter>
      <GridTest />
      <UserInfoBar />
      <AppHeader />
      <Routes>{/* <Route path="/" element={"HOME"}></Route> */}</Routes>
    </BrowserRouter>
  );
}
